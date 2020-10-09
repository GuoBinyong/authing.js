import { OrgManagementClient } from './OrgManagementClient';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserPoolManagementClient } from './UserpoolManagementClient';
import { UsersManagementClient } from './UsersManagementClient';
import { isDomainAvaliable, sendEmail } from '../graphqlapi';
import { EmailScene, User, UserPool } from '../../types/graphql.v2';
import { verifyToken } from '../utils';
import { HttpClient } from '../common/HttpClient';
import Axios from 'axios';
import { RolesManagementClient } from './RolesManagementClient';
import { PoliciesManagementClient } from './PoliciesManagementClient';
import { UdfManagementClient } from './UdfManagementClient';
import { GroupsManagementClient } from './GroupsManagementClient';
import { AclManagementClient } from './AclManagementClient';
import { WhitelistManagementClient } from './WhitelistManagementClient';

const DEFAULT_OPTIONS: ManagementClientOptions = {
  timeout: 10000,
  encrptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
  onError: (_: number, message: string) => {
    throw new Error(message);
  },
  enableAccessTokenCache: true,
  host: 'https://core.authing.cn',
  requestFrom: 'sdk'
};

export class ManagementClient {
  // 初始化参数
  options: ManagementClientOptions;

  /** 用户池配置 */
  userpoolConfig: UserPool;

  // sub classes definitions
  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  httpClient: HttpClient;
  tokenProvider: ManagementTokenProvider;
  users: UsersManagementClient;
  userpool: UserPoolManagementClient;
  acl: AclManagementClient;
  org: OrgManagementClient;
  roles: RolesManagementClient;
  policies: PoliciesManagementClient;
  udf: UdfManagementClient;
  groups: GroupsManagementClient;
  whitelist: WhitelistManagementClient;

  constructor(options: ManagementClientOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    if (!this.options.userPoolId && !this.options.appId)
      throw new Error('请提供 userPoolId 或者 appId!');

    const graphqlApiEndpoint = `${this.options.host}/graphql`;
    const graphqlApiEndpointV2 = `${this.options.host}/v2/graphql`;

    if (!this.options.secret && !this.options.accessToken) {
      this.options.onError(
        1000,
        'Init Management Client failed, must provide at least secret or accessToken !'
      );
    }

    Axios.defaults.baseURL = this.options.host;

    this.graphqlClient = new GraphqlClient(graphqlApiEndpoint, this.options);
    this.graphqlClientV2 = new GraphqlClient(
      graphqlApiEndpointV2,
      this.options
    );
    this.tokenProvider = new ManagementTokenProvider(
      this.options,
      this.graphqlClient
    );
    this.httpClient = new HttpClient(this.options, this.tokenProvider);
    this.users = new UsersManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.userpool = new UserPoolManagementClient(
      this.options,
      this.httpClient,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.org = new OrgManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.roles = new RolesManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.policies = new PoliciesManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.udf = new UdfManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.acl = new AclManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
    this.whitelist = new WhitelistManagementClient(
      this.options,
      this.graphqlClientV2,
      this.tokenProvider
    );
  }

  private async getConfig(): Promise<UserPool> {
    if (this.userpoolConfig) {
      return this.userpoolConfig;
    }

    const detail = await this.userpool.detail();
    this.userpoolConfig = detail;
    return detail;
  }

  async isDomainAvaliable(domain: string) {
    const res = await isDomainAvaliable(
      this.graphqlClient,
      this.tokenProvider,
      { domain }
    );
    return res.isDomainAvaliable;
  }

  /**
   * @description 发送邮件
   * @param email: 邮件
   * @param scene: 发送场景
   *
   */
  async sendEmail(email: string, scene: EmailScene) {
    const { sendEmail: data } = await sendEmail(
      this.graphqlClientV2,
      this.tokenProvider,
      { email, scene }
    );
    return data;
  }

  /**
   * @description 检测登录状态
   *
   */
  async checkLoginStatus(
    token: string,
    options?: {
      fetchUserDetail?: boolean;
    }
  ): Promise<User> {
    options = options || {};
    const { fetchUserDetail = false } = options;
    if (!token) return null;

    let decoded = null;
    try {
      const config = await this.getConfig();
      decoded = verifyToken(token, config.jwtSecret);
    } catch (error) {
      return null;
    }

    const { data } = decoded;
    if (!fetchUserDetail) {
      return data;
    } else {
      const { id } = data;
      const user = await this.users.detail(id);
      return user;
    }
  }
}
