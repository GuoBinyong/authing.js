import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import buildTree from '../utils';
import _ from 'lodash';
import { SearchOrgNodesVariables } from '../../types/graphql.v1';
import {
  orgs,
  createOrg,
  org,
  deleteOrg,
  removeOrgNode,
  isRootNodeOfOrg,
  orgChildrenNodes,
  orgRootNode,
  searchNodes,
  addMember,
  getMembers,
  addNode,
  updateNode
} from '../graphqlapi';
import Axios from 'axios';
import { SDK_VERSION } from '../version';
import { Org, SortByEnum } from '../../types/graphql.v2';

export class OrgManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    graphqlClientV2: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.graphqlClientV2 = graphqlClientV2;
    this.tokenProvider = tokenProvider;
  }

  /**
   * @description 获取用户池组织机构列表
   * @param page 从 1 开始，默认为 1
   * @param limit 默认为 10
   *
   */
  async list(page: number = 1, limit: number = 10) {
    const res = await orgs(this.graphqlClientV2, this.tokenProvider, {
      page,
      limit
    });
    for (let org of res.orgs.list) {
      (org as any).tree = buildTree(_.cloneDeep(org.nodes) as any);
    }
    return res.orgs;
  }

  /**
   * 创建组织机构
   * @memberof OrgManagementClient
   */
  async create(name: string, description?: string, code?: string) {
    const { createOrg: org } = await createOrg(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        name,
        description,
        code
      }
    );
    return org;
  }

  /**
   * 往组织机构中添加一个节点
   * @memberof OrgManagementClient
   */
  async addNode(
    orgId: string,
    parentNodeId: string,
    data: {
      name: string;
      code?: string;
      order?: number;
      nameI18n?: string;
      description?: string;
      descriptionI18n?: string;
    }
  ) {
    const { name, code, order, nameI18n, description, descriptionI18n } = data;
    const { addNode: org } = await addNode(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        orgId,
        parentNodeId,
        name,
        code,
        order,
        nameI18n,
        description,
        descriptionI18n
      }
    );
    (org as any).tree = buildTree(_.cloneDeep(org.nodes) as any);
    return org;
  }

  async updateNode(
    id: string,
    updates: {
      name: string;
      code?: string;
      order?: number;
      nameI18n?: string;
      description?: string;
      descriptionI18n?: string;
    }
  ) {
    const { name, code, description } = updates;
    const { updateNode: node } = await updateNode(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        id,
        name,
        code,
        description
      }
    );
    return node;
  }

  /**
   * 通过 ID 查询组织机构
   * @memberof OrgManagementClient
   */
  async findById(id: string) {
    const { org: data } = await org(this.graphqlClientV2, this.tokenProvider, {
      id
    });
    (data as any).tree = buildTree(_.cloneDeep(data.nodes) as any);
    return data;
  }

  /**
   * 删除组织机构树
   * @param {string} id
   * @returns
   * @memberof OrgManagementClient
   */
  async delete(id: string) {
    const res = await deleteOrg(this.graphqlClient, this.tokenProvider, {
      _id: id
    });
    return res.deleteOrg;
  }

  /**
   * 删除组织机构树中的某一个节点
   * @param {string} orgId
   * @param {string} nodeId
   * @returns
   * @memberof OrgManagementClient
   */
  async removeNode(orgId: string, nodeId: string) {
    const res = await removeOrgNode(this.graphqlClient, this.tokenProvider, {
      input: {
        orgId,
        groupId: nodeId
      }
    });
    return res.removeOrgNode;
  }

  /**
   * 判断一个节点是不是组织树的根节点
   * @param {string} orgId
   * @param {string} nodeId
   * @returns
   * @memberof OrgManagementClient
   */
  async isRoot(orgId: string, nodeId: string) {
    const res = await isRootNodeOfOrg(this.graphqlClient, this.tokenProvider, {
      input: {
        orgId,
        groupId: nodeId
      }
    });
    return res.isRootNodeOfOrg;
  }

  /**
   * 查询节点子节点列表
   * @param {string} orgId
   * @param {string} nodeId
   * @returns
   * @memberof OrgManagementClient
   */
  async children(orgId: string, nodeId: string) {
    const res = await orgChildrenNodes(this.graphqlClient, this.tokenProvider, {
      input: {
        orgId,
        groupId: nodeId
      }
    });
    return res.orgChildrenNodes;
  }

  /**
   * 查询组织机构树根节点
   * @memberof OrgManagementClient
   */
  async rootNode(id: string) {
    const res = await orgRootNode(this.graphqlClient, this.tokenProvider, {
      _id: id
    });
    return res.orgRootNode;
  }

  /**
   * 根据 Group 的自定义字段查询节点
   *
   * @param {SearchOrgNodesVariables} options
   * @memberof OrgManagementClient
   */
  async searchNodes(options: SearchOrgNodesVariables) {
    let { orgId, name = '', metadata = [] } = options;
    if (!name && metadata.length === 0) {
      this.options.onError(500, 'Plesas Provide name or metadata');
    }

    if (metadata) {
      metadata = metadata.map(metadata => {
        if (typeof metadata.value !== 'string') {
          metadata.value = JSON.stringify(metadata.value);
        }
        return metadata;
      });
    }
    const res = await searchNodes(this.graphqlClient, this.tokenProvider, {
      orgId,
      name,
      metadata
    });
    return res.searchOrgNodes;
  }

  /**
   * @description 通过一个 JSON 导入树机构
   *
   */
  async import(json: { [x: string]: any }) {
    const api = `${this.options.host}/v2/api/org/import-by-json`;
    const res = await Axios.post(api, json, {
      headers: {
        'x-authing-userpool-id': this.options.userPoolId,
        'x-authing-sdk-version': SDK_VERSION,
        'x-authing-request-from': 'sdk'
      }
    });
    return res.data as Org;
  }

  /**
   * @description 节点添加成员
   *
   */
  async addMember(orgId: string, nodeCode: string, userId: string) {
    const res = await addMember(this.graphqlClientV2, this.tokenProvider, {
      orgId,
      nodeCode,
      userIds: [userId]
    });
    return res.addMember;
  }

  /**
   * @description 节点批量添加成员
   *
   */
  async addMembers(orgId: string, nodeCode: string, userIds: string[]) {
    const res = await addMember(this.graphqlClientV2, this.tokenProvider, {
      orgId,
      nodeCode,
      userIds
    });
    return res.addMember;
  }

  async getMmebers(
    orgId: string,
    nodeCode: string,
    options?: {
      page?: number;
      limit?: number;
      sortBy?: SortByEnum;
      includeChildrenNodes?: boolean;
    }
  ) {
    options = options || {};
    const { node } = await getMembers(
      this.graphqlClientV2,
      this.tokenProvider,
      {
        orgId,
        code: nodeCode,
        ...options
      }
    );
    return node.users;
  }
}
