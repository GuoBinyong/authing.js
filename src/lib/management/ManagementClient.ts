import { OrgManagementClient } from './OrgManagementClient';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserPoolManagementClient } from './UserpoolManagementClient';
import { UsersManagementClient } from './UsersManagementClient';
import { sendEmail } from '../graphqlapi';
import { EmailScene, User } from '../../types/graphql.v2';
import { HttpClient } from '../common/HttpClient';
import Axios from 'axios';
import { RolesManagementClient } from './RolesManagementClient';
import { PoliciesManagementClient } from './PoliciesManagementClient';
import { UdfManagementClient } from './UdfManagementClient';
import { GroupsManagementClient } from './GroupsManagementClient';
import { AclManagementClient } from './AclManagementClient';
import { WhitelistManagementClient } from './WhitelistManagementClient';
import { StatisticsManagementClient } from './StatisticsManagementClient';
import jwtDecode from 'jwt-decode';
import { encrypt } from '../utils';
import { PublicKeyManager } from '../common/PublicKeyManager';
import { UserActionManagementClient } from './UserActionManagementClient';
import { ApplicationsManagementClient } from './ApplicationsManagementClient';
import { MFAManagementClient } from './MFAManagementClient';
import { Lang } from '../../types';
import { PrincipalManagementClient } from './PrincipalManagement';

const DEFAULT_OPTIONS: ManagementClientOptions = {
  timeout: 10000,
  onError: (code: number, message: string) => {
    throw { code, message };
  },
  host: 'https://core.authing.cn',
  requestFrom: 'sdk',
  encryptFunction: encrypt,
  headers: {
    'userpool-id': 'x-authing-userpool-id',
    'app-id': 'x-authing-app-id',
    'request-from': 'x-authing-request-from',
    'sdk-version': 'x-authing-sdk-version',
    lang: 'x-authing-lang'
  }
};

export class ManagementClient {
  // 初始化参数
  options: ManagementClientOptions;

  // sub classes definitions
  private graphqlClient: GraphqlClient;
  private httpClient: HttpClient;
  private tokenProvider: ManagementTokenProvider;
  private publicKeyManager: PublicKeyManager;

  users: UsersManagementClient;
  userpool: UserPoolManagementClient;
  acl: AclManagementClient;
  org: OrgManagementClient;
  roles: RolesManagementClient;
  policies: PoliciesManagementClient;
  udf: UdfManagementClient;
  groups: GroupsManagementClient;
  whitelist: WhitelistManagementClient;
  statistics: StatisticsManagementClient;
  userAction: UserActionManagementClient;
  applications: ApplicationsManagementClient;
  mfa: MFAManagementClient;
  principal: PrincipalManagementClient;

  constructor(options: ManagementClientOptions) {
    Object.keys(options).forEach(
      (i: never) => !options[i] && delete options[i]
    );
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    if (!this.options.userPoolId && !this.options.appId)
      throw new Error('请提供 userPoolId 或者 appId!');

    const graphqlApiEndpointV2 = `${this.options.host}/graphql/v2`;

    if (!this.options.secret && !this.options.accessToken) {
      this.options.onError(
        1000,
        'Init Management Client failed, must provide at least secret or accessToken !'
      );
    }

    Axios.defaults.baseURL = this.options.host;

    this.graphqlClient = new (this.options.graphqlClient || GraphqlClient)(
      graphqlApiEndpointV2,
      this.options
    );
    this.tokenProvider = new ManagementTokenProvider(
      this.options,
      this.graphqlClient
    );
    this.httpClient = new (this.options.httpClient || HttpClient)(
      this.options,
      this.tokenProvider
    );
    this.publicKeyManager = new PublicKeyManager(this.options, this.httpClient);
    this.users = new UsersManagementClient(
      this.options,
      this.graphqlClient,
      this.httpClient,
      this.tokenProvider,
      this.publicKeyManager
    );
    this.userpool = new UserPoolManagementClient(
      this.options,
      this.httpClient,
      this.graphqlClient,
      this.tokenProvider
    );
    this.org = new OrgManagementClient(
      this.options,
      this.graphqlClient,
      this.httpClient,
      this.tokenProvider
    );
    this.roles = new RolesManagementClient(
      this.options,
      this.graphqlClient,
      this.tokenProvider
    );
    this.policies = new PoliciesManagementClient(
      this.options,
      this.graphqlClient,
      this.tokenProvider
    );
    this.udf = new UdfManagementClient(
      this.options,
      this.graphqlClient,
      this.tokenProvider
    );
    this.acl = new AclManagementClient(
      this.options,
      this.graphqlClient,
      this.httpClient,
      this.tokenProvider
    );
    this.whitelist = new WhitelistManagementClient(
      this.options,
      this.graphqlClient,
      this.tokenProvider
    );
    this.groups = new GroupsManagementClient(
      this.options,
      this.graphqlClient,
      this.tokenProvider
    );
    this.statistics = new StatisticsManagementClient(
      this.options,
      this.httpClient,
      this.tokenProvider
    );
    this.userAction = new UserActionManagementClient(
      this.options,
      this.httpClient,
      this.tokenProvider
    );
    this.applications = new ApplicationsManagementClient(
      this.options,
      this.httpClient,
      this.graphqlClient,
      this.tokenProvider
    );
    this.mfa = new MFAManagementClient(
      this.options,
      this.graphqlClient,
      this.httpClient,
      this.tokenProvider
    );
    this.principal = new PrincipalManagementClient(
      this.options,
      this.graphqlClient,
      this.httpClient,
      this.tokenProvider
    );
  }

  /**
   * @description 发送邮件
   * @param email: 邮件
   * @param scene: 发送场景
   *
   */
  async sendEmail(email: string, scene: EmailScene) {
    const { sendEmail: data } = await sendEmail(
      this.graphqlClient,
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

    let decoded: any = null;
    try {
      decoded = jwtDecode(token);
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

  /**
   * @name isPasswordValid
   * @name_zh 检测密码是否合法
   * @description 检测密码是否合法
   *
   * @param {string} password 密码
   *
   * @example
   *
   * const envList = await managementClient.isPasswordValid('xxxxxx')
   *
   * @returns {Promise<{
   *  valid: boolean
   *  message: string
   * }>} 返回检测结果
   * @memberof ManagementClient
   */
  async isPasswordValid(
    password: string
  ): Promise<{ valid: boolean; message: string }[]> {
    return await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/password/check`,
      data: {
        password
      }
    });
  }

  /**
   * @description 设置语言
   */
  setLang(lang: Lang) {
    this.options.lang = lang;
  }
}
