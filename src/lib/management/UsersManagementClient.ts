import { GraphqlClient } from './../common/GraphqlClient';
import { encrypt } from './../utils';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  deleteUser,
  deleteUsers,
  user,
  users,
  getGroupsOfUser,
  updateUser,
  searchUser,
  createUser,
  refreshToken,
  userBatch,
  getUserRoles,
  assignRole,
  revokeRole,
  isUserExists
} from '../graphqlapi';
import {
  User,
  PaginatedUsers,
  CreateUserInput,
  RefreshToken
} from '../../types/graphql.v2';

export class UsersManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * 删除用户
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async delete(userId: string) {
    const { deleteUser: data } = await deleteUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: userId
      }
    );
    return data;
  }

  /**
   * 批量删除用户
   *
   * @param {string[]} userIds
   * @returns
   * @memberof UsersManagementClient
   */
  async deleteMany(userIds: string[]) {
    const { deleteUsers: data } = await deleteUsers(
      this.graphqlClient,
      this.tokenProvider,
      {
        ids: userIds
      }
    );
    return data;
  }

  /**
   * 获取用户详情
   *
   * @param {string} userId
   * @returns
   * @memberof UsersManagementClient
   */
  async detail(userId: string): Promise<User> {
    const { user: data } = await user(this.graphqlClient, this.tokenProvider, {
      id: userId
    });
    return data;
  }

  /**
   * @description 通过 ID 批量查询用户
   *
   */
  async batch(ids: string[]) {
    const { userBatch: data } = await userBatch(
      this.graphqlClient,
      this.tokenProvider,
      {
        ids
      }
    );
    return data;
  }

  /**
   * @description 获取用户池用户列表
   * @param page: 页码数, 从 1 开始
   * @param limit: 每页包含的用户数
   *
   * @param {{ page: number, count: number }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async list(page?: number, limit?: number) {
    const { users: data } = await users(
      this.graphqlClient,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }

  /**
   * 以管理员身份创建用户
   * @param userInfo
   * @param keepPassword
   */
  async create(userInfo: CreateUserInput, keepPassword?: boolean) {
    if (userInfo && userInfo.password) {
      userInfo.password = encrypt(
        userInfo.password,
        this.options.encrptionPublicKey
      );
    }
    const { createUser: user } = await createUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        userInfo,
        keepPassword
      }
    );
    return user;
  }

  /**
   * @description 修改用户资料
   *
   */
  async update(id: string, updates: Partial<User>) {
    if (updates && updates.password) {
      updates.password = encrypt(
        updates.password,
        this.options.encrptionPublicKey
      );
    }
    const { updateUser: user } = await updateUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        id,
        input: updates
      }
    );
    return user;
  }

  async isExists(options: {
    username?: string;
    email?: string;
    phone?: string;
  }) {
    const { username, email, phone } = options;
    const { isUserExists: data } = await isUserExists(
      this.graphqlClient,
      this.tokenProvider,
      {
        username,
        email,
        phone
      }
    );
    return data;
  }

  /**
   * 根据关键字搜索用户
   * @param query 搜索内容
   * @param options 选项
   */
  async search(
    query: string,
    options?: { fields?: string[]; page?: number; limit?: number }
  ): Promise<PaginatedUsers> {
    const { searchUser: users } = await searchUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        query,
        ...options
      }
    );
    // @ts-ignore
    return users;
  }

  async refreshToken(id: string): Promise<RefreshToken> {
    const { refreshToken: data } = await refreshToken(
      this.graphqlClient,
      this.tokenProvider,
      {
        id
      }
    );
    return data;
  }

  /**
   * @description 获取用户的分组列表
   *
   */
  async listGroups(userId: string, page: number = 1, limit: number = 10) {
    const { groups } = await getGroupsOfUser(
      this.graphqlClient,
      this.tokenProvider,
      {
        userId,
        page,
        limit
      }
    );
    return groups;
  }

  /**
   * @description 获取用户的角色列表
   *
   */
  async listRoles(userId: string) {
    const {
      user: { roles }
    } = await getUserRoles(this.graphqlClient, this.tokenProvider, {
      id: userId
    });
    return roles;
  }

  /**
   * @description 添加角色
   *
   */
  async addRoles(userId: string, roles: string[]) {
    const { assignRole: data } = await assignRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        roleCodes: roles,
        userIds: [userId]
      }
    );
    return data;
  }

  /**
   * @description 移除角色
   *
   */
  async removeRoles(userId: string, roles: string[]) {
    const { revokeRole: data } = await revokeRole(
      this.graphqlClient,
      this.tokenProvider,
      {
        roleCodes: roles,
        userIds: [userId]
      }
    );
    return data;
  }
}
