export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Object: any;
};

export type Query = {
  isActionAllowed: Scalars['Boolean'];
  isActionDenied: Scalars['Boolean'];
  authorizedTargets?: Maybe<PaginatedAuthorizedTargets>;
  qiniuUptoken?: Maybe<Scalars['String']>;
  isDomainAvaliable?: Maybe<Scalars['Boolean']>;
  /** 获取社会化登录定义 */
  socialConnection?: Maybe<SocialConnection>;
  /** 获取所有社会化登录定义 */
  socialConnections: Array<SocialConnection>;
  /** 获取当前用户池的社会化登录配置 */
  socialConnectionInstance: SocialConnectionInstance;
  /** 获取当前用户池的所有社会化登录配置 */
  socialConnectionInstances: Array<SocialConnectionInstance>;
  emailTemplates: Array<EmailTemplate>;
  previewEmail: Scalars['String'];
  /** 获取函数模版 */
  templateCode: Scalars['String'];
  function?: Maybe<Function>;
  functions: PaginatedFunctions;
  group?: Maybe<Group>;
  groups: PaginatedGroups;
  /** 查询 MFA 信息 */
  queryMfa?: Maybe<Mfa>;
  nodeById?: Maybe<Node>;
  /** 通过 code 查询节点 */
  nodeByCode?: Maybe<Node>;
  /** 查询组织机构详情 */
  org: Org;
  /** 查询用户池组织机构列表 */
  orgs: PaginatedOrgs;
  /** 查询子节点列表 */
  childrenNodes: Array<Node>;
  rootNode: Node;
  isRootNode?: Maybe<Scalars['Boolean']>;
  searchNodes: Array<Node>;
  checkPasswordStrength: CheckPasswordStrengthResult;
  policy?: Maybe<Policy>;
  policies: PaginatedPolicies;
  policyAssignments: PaginatedPolicyAssignments;
  /** 获取一个对象被授权的资源列表 */
  authorizedResources?: Maybe<PaginatedAuthorizedResources>;
  /** 通过 **code** 查询角色详情 */
  role?: Maybe<Role>;
  /** 获取角色列表 */
  roles: PaginatedRoles;
  /** 查询某个实体定义的自定义数据 */
  udv: Array<UserDefinedData>;
  /** 查询用户池定义的自定义字段 */
  udf: Array<UserDefinedField>;
  /** 批量查询多个对象的自定义数据 */
  udfValueBatch: Array<UserDefinedDataMap>;
  user?: Maybe<User>;
  userBatch: Array<User>;
  users: PaginatedUsers;
  /** 已归档的用户列表 */
  archivedUsers: PaginatedUsers;
  searchUser: PaginatedUsers;
  checkLoginStatus?: Maybe<JwtTokenStatus>;
  isUserExists?: Maybe<Scalars['Boolean']>;
  findUser?: Maybe<User>;
  /** 查询用户池详情 */
  userpool: UserPool;
  /** 查询用户池列表 */
  userpools: PaginatedUserpool;
  userpoolTypes: Array<UserPoolType>;
  /** 获取 accessToken ，如 SDK 初始化 */
  accessToken: AccessTokenRes;
  /** 用户池注册白名单列表 */
  whitelist: Array<WhiteList>;
};


export type QueryIsActionAllowedArgs = {
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type QueryIsActionDeniedArgs = {
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type QueryAuthorizedTargetsArgs = {
  namespace: Scalars['String'];
  resourceType: ResourceType;
  resource: Scalars['String'];
  targetType?: Maybe<PolicyAssignmentTargetType>;
  actions?: Maybe<AuthorizedTargetsActionsInput>;
};


export type QueryQiniuUptokenArgs = {
  type?: Maybe<Scalars['String']>;
};


export type QueryIsDomainAvaliableArgs = {
  domain: Scalars['String'];
};


export type QuerySocialConnectionArgs = {
  provider: Scalars['String'];
};


export type QuerySocialConnectionInstanceArgs = {
  provider: Scalars['String'];
};


export type QueryPreviewEmailArgs = {
  type: EmailTemplateType;
};


export type QueryFunctionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryFunctionsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};


export type QueryGroupArgs = {
  code: Scalars['String'];
};


export type QueryGroupsArgs = {
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};


export type QueryQueryMfaArgs = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
};


export type QueryNodeByIdArgs = {
  id: Scalars['String'];
};


export type QueryNodeByCodeArgs = {
  orgId: Scalars['String'];
  code: Scalars['String'];
};


export type QueryOrgArgs = {
  id: Scalars['String'];
};


export type QueryOrgsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};


export type QueryChildrenNodesArgs = {
  orgId?: Maybe<Scalars['String']>;
  nodeId: Scalars['String'];
};


export type QueryRootNodeArgs = {
  orgId: Scalars['String'];
};


export type QueryIsRootNodeArgs = {
  nodeId: Scalars['String'];
  orgId: Scalars['String'];
};


export type QuerySearchNodesArgs = {
  keyword: Scalars['String'];
};


export type QueryCheckPasswordStrengthArgs = {
  password: Scalars['String'];
};


export type QueryPolicyArgs = {
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type QueryPoliciesArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  namespace?: Maybe<Scalars['String']>;
  excludeDefault?: Maybe<Scalars['Boolean']>;
};


export type QueryPolicyAssignmentsArgs = {
  namespace?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  targetType?: Maybe<PolicyAssignmentTargetType>;
  targetIdentifier?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAuthorizedResourcesArgs = {
  targetType?: Maybe<PolicyAssignmentTargetType>;
  targetIdentifier?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};


export type QueryRoleArgs = {
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type QueryRolesArgs = {
  namespace?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};


export type QueryUdvArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
};


export type QueryUdfArgs = {
  targetType: UdfTargetType;
};


export type QueryUdfValueBatchArgs = {
  targetType: UdfTargetType;
  targetIds: Array<Maybe<Scalars['String']>>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryUserBatchArgs = {
  ids: Array<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};


export type QueryArchivedUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySearchUserArgs = {
  query: Scalars['String'];
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  departmentOpts?: Maybe<Array<Maybe<SearchUserDepartmentOpt>>>;
  groupOpts?: Maybe<Array<Maybe<SearchUserGroupOpt>>>;
  roleOpts?: Maybe<Array<Maybe<SearchUserRoleOpt>>>;
};


export type QueryCheckLoginStatusArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryIsUserExistsArgs = {
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};


export type QueryFindUserArgs = {
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};


export type QueryUserpoolsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};


export type QueryAccessTokenArgs = {
  userPoolId: Scalars['String'];
  secret: Scalars['String'];
};


export type QueryWhitelistArgs = {
  type: WhitelistType;
};

export enum ResourceType {
  Data = 'DATA',
  Api = 'API',
  Menu = 'MENU',
  Ui = 'UI',
  Button = 'BUTTON'
}

export enum PolicyAssignmentTargetType {
  User = 'USER',
  Role = 'ROLE',
  Group = 'GROUP',
  Org = 'ORG',
  AkSk = 'AK_SK'
}

export type AuthorizedTargetsActionsInput = {
  op: Operator;
  list: Array<Maybe<Scalars['String']>>;
};

export enum Operator {
  And = 'AND',
  Or = 'OR'
}

export type PaginatedAuthorizedTargets = {
  list?: Maybe<Array<Maybe<ResourcePermissionAssignment>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResourcePermissionAssignment = {
  targetType?: Maybe<PolicyAssignmentTargetType>;
  targetIdentifier?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Scalars['String']>>;
};

export type SocialConnection = {
  /** 社会化登录服务商唯一标志 */
  provider: Scalars['String'];
  /** 名称 */
  name: Scalars['String'];
  /** logo */
  logo: Scalars['String'];
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 表单字段 */
  fields?: Maybe<Array<SocialConnectionField>>;
};

export type SocialConnectionField = {
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SocialConnectionField>>>;
};

export type SocialConnectionInstance = {
  provider: Scalars['String'];
  enabled: Scalars['Boolean'];
  fields?: Maybe<Array<Maybe<SocialConnectionInstanceField>>>;
};

export type SocialConnectionInstanceField = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type EmailTemplate = {
  /** 邮件模版类型 */
  type: EmailTemplateType;
  /** 模版名称 */
  name: Scalars['String'];
  /** 邮件主题 */
  subject: Scalars['String'];
  /** 显示的邮件发送人 */
  sender: Scalars['String'];
  /** 邮件模版内容 */
  content: Scalars['String'];
  /** 重定向链接，操作成功后，用户将被重定向到此 URL。 */
  redirectTo?: Maybe<Scalars['String']>;
  hasURL?: Maybe<Scalars['Boolean']>;
  /** 验证码过期时间（单位为秒） */
  expiresIn?: Maybe<Scalars['Int']>;
  /** 是否开启（自定义模版） */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 是否是系统默认模版 */
  isSystem?: Maybe<Scalars['Boolean']>;
};

export enum EmailTemplateType {
  /** 重置密码确认 */
  ResetPassword = 'RESET_PASSWORD',
  /** 重置密码通知 */
  PasswordResetedNotification = 'PASSWORD_RESETED_NOTIFICATION',
  /** 修改密码验证码 */
  ChangePassword = 'CHANGE_PASSWORD',
  /** 注册欢迎邮件 */
  Welcome = 'WELCOME',
  /** 验证邮箱 */
  VerifyEmail = 'VERIFY_EMAIL',
  /** 修改绑定邮箱 */
  ChangeEmail = 'CHANGE_EMAIL'
}

/** 函数 */
export type Function = {
  /** ID */
  id: Scalars['String'];
  /** 函数名称 */
  name: Scalars['String'];
  /** 源代码 */
  sourceCode: Scalars['String'];
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 云函数链接 */
  url?: Maybe<Scalars['String']>;
};

export enum SortByEnum {
  /** 按照创建时间降序（后创建的在前面） */
  CreatedatDesc = 'CREATEDAT_DESC',
  /** 按照创建时间升序（先创建的在前面） */
  CreatedatAsc = 'CREATEDAT_ASC',
  /** 按照更新时间降序（最近更新的在前面） */
  UpdatedatDesc = 'UPDATEDAT_DESC',
  /** 按照更新时间升序（最近更新的在后面） */
  UpdatedatAsc = 'UPDATEDAT_ASC'
}

export type PaginatedFunctions = {
  list: Array<Function>;
  totalCount: Scalars['Int'];
};

export type Group = {
  /** 唯一标志 code */
  code: Scalars['String'];
  /** 名称 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['String']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['String']>;
  /** 包含的用户列表 */
  users: PaginatedUsers;
  /** 被授权访问的所有资源 */
  authorizedResources?: Maybe<PaginatedAuthorizedResources>;
};


export type GroupUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type GroupAuthorizedResourcesArgs = {
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

export type PaginatedUsers = {
  totalCount: Scalars['Int'];
  list: Array<User>;
};

export type User = {
  /** 用户 ID */
  id: Scalars['String'];
  arn: Scalars['String'];
  /** 用户在组织机构中的状态 */
  status?: Maybe<UserStatus>;
  /** 用户池 ID */
  userPoolId: Scalars['String'];
  /** 用户名，用户池内唯一 */
  username?: Maybe<Scalars['String']>;
  /** 邮箱，用户池内唯一 */
  email?: Maybe<Scalars['String']>;
  /** 邮箱是否已验证 */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** 手机号，用户池内唯一 */
  phone?: Maybe<Scalars['String']>;
  /** 手机号是否已验证 */
  phoneVerified?: Maybe<Scalars['Boolean']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  /** 用户的身份信息 */
  identities?: Maybe<Array<Maybe<Identity>>>;
  /** 昵称，该字段不唯一。 */
  nickname?: Maybe<Scalars['String']>;
  /** 注册方式 */
  registerSource?: Maybe<Array<Scalars['String']>>;
  /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
  photo?: Maybe<Scalars['String']>;
  /** 用户密码，数据库使用密钥加 salt 进行加密，非原文密码。 */
  password?: Maybe<Scalars['String']>;
  /** 用户社会化登录第三方身份提供商返回的原始用户信息，非社会化登录方式注册的用户此字段为空。 */
  oauth?: Maybe<Scalars['String']>;
  /** 用户登录凭证，开发者可以在后端检验该 token 的合法性，从而验证用户身份。详细文档请见：[验证 Token](https://docs.authing.co/advanced/verify-jwt-token.html) */
  token?: Maybe<Scalars['String']>;
  /** token 过期时间 */
  tokenExpiredAt?: Maybe<Scalars['String']>;
  /** 用户登录总次数 */
  loginsCount?: Maybe<Scalars['Int']>;
  /** 用户最近一次登录时间 */
  lastLogin?: Maybe<Scalars['String']>;
  /** 用户上一次登录时使用的 IP */
  lastIP?: Maybe<Scalars['String']>;
  /** 用户注册时间 */
  signedUp?: Maybe<Scalars['String']>;
  /** 该账号是否被禁用 */
  blocked?: Maybe<Scalars['Boolean']>;
  /** 账号是否被软删除 */
  isDeleted?: Maybe<Scalars['Boolean']>;
  device?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 用户所在的角色列表 */
  roles?: Maybe<PaginatedRoles>;
  /** 用户所在的分组列表 */
  groups?: Maybe<PaginatedGroups>;
  /** 用户所在的部门列表 */
  departments?: Maybe<PaginatedDepartments>;
  /** 被授权访问的所有资源 */
  authorizedResources?: Maybe<PaginatedAuthorizedResources>;
  /** 用户外部 ID */
  externalId?: Maybe<Scalars['String']>;
  /** 用户自定义数据 */
  customData?: Maybe<Array<Maybe<UserCustomData>>>;
};


export type UserRolesArgs = {
  namespace?: Maybe<Scalars['String']>;
};


export type UserDepartmentsArgs = {
  orgId?: Maybe<Scalars['String']>;
};


export type UserAuthorizedResourcesArgs = {
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

export enum UserStatus {
  /** 已停用 */
  Suspended = 'Suspended',
  /** 已离职 */
  Resigned = 'Resigned',
  /** 已激活（正常状态） */
  Activated = 'Activated',
  /** 已归档 */
  Archived = 'Archived'
}

export type Identity = {
  openid?: Maybe<Scalars['String']>;
  userIdInIdp?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  connectionId?: Maybe<Scalars['String']>;
  isSocial?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
};

export type PaginatedRoles = {
  totalCount: Scalars['Int'];
  list: Array<Role>;
};

export type Role = {
  id: Scalars['String'];
  /** 权限组 code */
  namespace: Scalars['String'];
  /** 唯一标志 code */
  code: Scalars['String'];
  /** 资源描述符 arn */
  arn: Scalars['String'];
  /** 角色描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否为系统内建，系统内建的角色不能删除 */
  isSystem?: Maybe<Scalars['Boolean']>;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['String']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['String']>;
  /** 被授予此角色的用户列表 */
  users: PaginatedUsers;
  /** 被授权访问的所有资源 */
  authorizedResources?: Maybe<PaginatedAuthorizedResources>;
  /** 父角色 */
  parent?: Maybe<Role>;
};


export type RoleUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type RoleAuthorizedResourcesArgs = {
  resourceType?: Maybe<Scalars['String']>;
};

export type PaginatedAuthorizedResources = {
  totalCount: Scalars['Int'];
  list: Array<AuthorizedResource>;
};

export type AuthorizedResource = {
  code: Scalars['String'];
  type?: Maybe<ResourceType>;
  actions?: Maybe<Array<Scalars['String']>>;
};

export type PaginatedGroups = {
  totalCount: Scalars['Int'];
  list: Array<Group>;
};

export type PaginatedDepartments = {
  list: Array<UserDepartment>;
  totalCount: Scalars['Int'];
};

export type UserDepartment = {
  department: Node;
  /** 是否为主部门 */
  isMainDepartment: Scalars['Boolean'];
  /** 加入该部门的时间 */
  joinedAt?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['String'];
  /** 组织机构 ID */
  orgId?: Maybe<Scalars['String']>;
  /** 节点名称 */
  name: Scalars['String'];
  /** 多语言名称，**key** 为标准 **i18n** 语言编码，**value** 为对应语言的名称。 */
  nameI18n?: Maybe<Scalars['String']>;
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 多语言描述信息 */
  descriptionI18n?: Maybe<Scalars['String']>;
  /** 在父节点中的次序值。**order** 值大的排序靠前。有效的值范围是[0, 2^32) */
  order?: Maybe<Scalars['Int']>;
  /** 节点唯一标志码，可以通过 code 进行搜索 */
  code?: Maybe<Scalars['String']>;
  /** 是否为根节点 */
  root?: Maybe<Scalars['Boolean']>;
  /** 距离父节点的深度（如果是查询整棵树，返回的 **depth** 为距离根节点的深度，如果是查询某个节点的子节点，返回的 **depth** 指的是距离该节点的深度。） */
  depth?: Maybe<Scalars['Int']>;
  path: Array<Scalars['String']>;
  codePath: Array<Maybe<Scalars['String']>>;
  namePath: Array<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 该节点的子节点 **ID** 列表 */
  children?: Maybe<Array<Scalars['String']>>;
  /** 节点的用户列表 */
  users: PaginatedUsers;
  /** 被授权访问的所有资源 */
  authorizedResources?: Maybe<PaginatedAuthorizedResources>;
};


export type NodeUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
};


export type NodeAuthorizedResourcesArgs = {
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

export type UserCustomData = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  dataType: UdfDataType;
};

export enum UdfDataType {
  String = 'STRING',
  Number = 'NUMBER',
  Datetime = 'DATETIME',
  Boolean = 'BOOLEAN',
  Object = 'OBJECT'
}

export type Mfa = {
  /** MFA ID */
  id: Scalars['String'];
  /** 用户 ID */
  userId: Scalars['String'];
  /** 用户池 ID */
  userPoolId: Scalars['String'];
  /** 是否开启 MFA */
  enable: Scalars['Boolean'];
  /** 密钥 */
  secret?: Maybe<Scalars['String']>;
};

export type Org = {
  /** 组织机构 ID */
  id: Scalars['String'];
  /** 根节点 */
  rootNode: Node;
  /** 组织机构节点列表 */
  nodes: Array<Node>;
};

export type PaginatedOrgs = {
  totalCount: Scalars['Int'];
  list: Array<Org>;
};

export type CheckPasswordStrengthResult = {
  valid: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Policy = {
  /** 权限组 code */
  namespace: Scalars['String'];
  code: Scalars['String'];
  isDefault: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  statements: Array<PolicyStatement>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 被授权次数 */
  assignmentsCount: Scalars['Int'];
  /** 授权记录 */
  assignments: Array<PolicyAssignment>;
};


export type PolicyAssignmentsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  namespace?: Maybe<Scalars['String']>;
};

export type PolicyStatement = {
  resource: Scalars['String'];
  actions: Array<Scalars['String']>;
  effect?: Maybe<PolicyEffect>;
  condition?: Maybe<Array<PolicyStatementCondition>>;
};

export enum PolicyEffect {
  Allow = 'ALLOW',
  Deny = 'DENY'
}

export type PolicyStatementCondition = {
  param: Scalars['String'];
  operator: Scalars['String'];
  value: Scalars['Object'];
};


export type PolicyAssignment = {
  code: Scalars['String'];
  targetType: PolicyAssignmentTargetType;
  targetIdentifier: Scalars['String'];
};

export type PaginatedPolicies = {
  totalCount: Scalars['Int'];
  list: Array<Policy>;
};

export type PaginatedPolicyAssignments = {
  totalCount: Scalars['Int'];
  list: Array<PolicyAssignment>;
};

export enum UdfTargetType {
  Node = 'NODE',
  Org = 'ORG',
  User = 'USER',
  Userpool = 'USERPOOL',
  Role = 'ROLE',
  Permission = 'PERMISSION',
  Application = 'APPLICATION'
}

export type UserDefinedData = {
  key: Scalars['String'];
  dataType: UdfDataType;
  value: Scalars['String'];
  label?: Maybe<Scalars['String']>;
};

export type UserDefinedField = {
  targetType: UdfTargetType;
  dataType: UdfDataType;
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['String']>;
};

export type UserDefinedDataMap = {
  targetId: Scalars['String'];
  data: Array<UserDefinedData>;
};

export type SearchUserDepartmentOpt = {
  departmentId?: Maybe<Scalars['String']>;
  includeChildrenDepartments?: Maybe<Scalars['Boolean']>;
};

export type SearchUserGroupOpt = {
  code?: Maybe<Scalars['String']>;
};

export type SearchUserRoleOpt = {
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
};

export type JwtTokenStatus = {
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  exp?: Maybe<Scalars['Int']>;
  iat?: Maybe<Scalars['Int']>;
  data?: Maybe<JwtTokenStatusDetail>;
};

export type JwtTokenStatusDetail = {
  id?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  arn?: Maybe<Scalars['String']>;
};

export type UserPool = {
  id: Scalars['String'];
  name: Scalars['String'];
  domain: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  secret: Scalars['String'];
  jwtSecret: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<UserPoolType>>;
  logo: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 用户邮箱是否验证（用户的 emailVerified 字段）默认值，默认为 false */
  emailVerifiedDefault: Scalars['Boolean'];
  /** 用户注册之后是否发送欢迎邮件 */
  sendWelcomeEmail: Scalars['Boolean'];
  /** 是否关闭注册 */
  registerDisabled: Scalars['Boolean'];
  /** @deprecated 是否开启用户池下应用间单点登录 */
  appSsoEnabled: Scalars['Boolean'];
  /**
   * 用户池禁止注册后，是否还显示微信小程序扫码登录。当 **showWXMPQRCode** 为 **true** 时，
   * 前端显示小程序码，此时只有以前允许注册时，扫码登录过的用户可以继续登录；新用户扫码无法登录。
   */
  showWxQRCodeWhenRegisterDisabled?: Maybe<Scalars['Boolean']>;
  /** 前端跨域请求白名单 */
  allowedOrigins?: Maybe<Scalars['String']>;
  /** 用户 **token** 有效时间，单位为秒，默认为 15 天。 */
  tokenExpiresAfter?: Maybe<Scalars['Int']>;
  /** 是否已删除 */
  isDeleted?: Maybe<Scalars['Boolean']>;
  /** 注册频繁检测 */
  frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfig>;
  /** 登录失败检测 */
  loginFailCheck?: Maybe<LoginFailCheckConfig>;
  /** 登录失败检测 */
  loginPasswordFailCheck?: Maybe<LoginPasswordFailCheckConfig>;
  /** 密码安全策略 */
  loginFailStrategy?: Maybe<Scalars['String']>;
  /** 手机号修改策略 */
  changePhoneStrategy?: Maybe<ChangePhoneStrategy>;
  /** 邮箱修改策略 */
  changeEmailStrategy?: Maybe<ChangeEmailStrategy>;
  /** APP 扫码登录配置 */
  qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategy>;
  /** APP 拉起小程序登录配置 */
  app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategy>;
  /** 注册白名单配置 */
  whitelist?: Maybe<RegisterWhiteListConfig>;
  /** 自定义短信服务商配置 */
  customSMSProvider?: Maybe<CustomSmsProvider>;
  /** 用户池套餐类型 */
  packageType?: Maybe<Scalars['Int']>;
  /** 是否使用自定义数据库 CUSTOM_USER_STORE 模式 */
  useCustomUserStore?: Maybe<Scalars['Boolean']>;
  /** 是否要求邮箱必须验证才能登录（如果是通过邮箱登录的话） */
  loginRequireEmailVerified?: Maybe<Scalars['Boolean']>;
  /** 短信验证码长度 */
  verifyCodeLength?: Maybe<Scalars['Int']>;
};

export type UserPoolType = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sdks?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FrequentRegisterCheckConfig = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type LoginFailCheckConfig = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type LoginPasswordFailCheckConfig = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ChangePhoneStrategy = {
  verifyOldPhone?: Maybe<Scalars['Boolean']>;
};

export type ChangeEmailStrategy = {
  verifyOldEmail?: Maybe<Scalars['Boolean']>;
};

export type QrcodeLoginStrategy = {
  qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
  returnFullUserInfo?: Maybe<Scalars['Boolean']>;
  allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
  ticketExpiresAfter?: Maybe<Scalars['Int']>;
};

export type App2WxappLoginStrategy = {
  ticketExpriresAfter?: Maybe<Scalars['Int']>;
  ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};

export type RegisterWhiteListConfig = {
  /** 是否开启手机号注册白名单 */
  phoneEnabled?: Maybe<Scalars['Boolean']>;
  /** 是否开启邮箱注册白名单 */
  emailEnabled?: Maybe<Scalars['Boolean']>;
  /** 是否开用户名注册白名单 */
  usernameEnabled?: Maybe<Scalars['Boolean']>;
};

export type CustomSmsProvider = {
  enabled?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
};

export type PaginatedUserpool = {
  totalCount: Scalars['Int'];
  list: Array<UserPool>;
};

export type AccessTokenRes = {
  accessToken?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  iat?: Maybe<Scalars['Int']>;
};

export enum WhitelistType {
  Username = 'USERNAME',
  Email = 'EMAIL',
  Phone = 'PHONE'
}

export type WhiteList = {
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type Mutation = {
  /** 允许操作某个资源 */
  allow: CommonMessage;
  /** 将一个（类）资源授权给用户、角色、分组、组织机构，且可以分别指定不同的操作权限。 */
  authorizeResource: CommonMessage;
  /** 配置社会化登录 */
  createSocialConnectionInstance: SocialConnectionInstance;
  /** 开启社会化登录 */
  enableSocialConnectionInstance: SocialConnectionInstance;
  /** 关闭社会化登录 */
  disableSocialConnectionInstance: SocialConnectionInstance;
  /** 设置用户在某个组织机构内所在的主部门 */
  setMainDepartment: CommonMessage;
  /** 配置自定义邮件模版 */
  configEmailTemplate: EmailTemplate;
  /** 启用自定义邮件模版 */
  enableEmailTemplate: EmailTemplate;
  /** 停用自定义邮件模版（将会使用系统默认邮件模版） */
  disableEmailTemplate: EmailTemplate;
  /** 发送邮件 */
  sendEmail: CommonMessage;
  /** 管理员发送首次登录验证邮件 */
  sendFirstLoginVerifyEmail: CommonMessage;
  /** 创建函数 */
  createFunction?: Maybe<Function>;
  /** 修改函数 */
  updateFunction: Function;
  deleteFunction: CommonMessage;
  addUserToGroup: CommonMessage;
  removeUserFromGroup: CommonMessage;
  /** 创建角色 */
  createGroup: Group;
  /** 修改角色 */
  updateGroup: Group;
  /** 批量删除角色 */
  deleteGroups: CommonMessage;
  loginByEmail?: Maybe<User>;
  loginByUsername?: Maybe<User>;
  loginByPhoneCode?: Maybe<User>;
  loginByPhonePassword?: Maybe<User>;
  /** 修改 MFA 信息 */
  changeMfa?: Maybe<Mfa>;
  /** 创建组织机构 */
  createOrg: Org;
  /** 删除组织机构 */
  deleteOrg: CommonMessage;
  /** 添加子节点 */
  addNode: Org;
  /** 添加子节点 */
  addNodeV2: Node;
  /** 修改节点 */
  updateNode: Node;
  /** 删除节点（会一并删掉子节点） */
  deleteNode: CommonMessage;
  /** （批量）将成员添加到节点中 */
  addMember: Node;
  /** （批量）将成员从节点中移除 */
  removeMember: Node;
  moveMembers?: Maybe<CommonMessage>;
  moveNode: Org;
  resetPassword?: Maybe<CommonMessage>;
  /** 通过首次登录的 Token 重置密码 */
  resetPasswordByFirstLoginToken?: Maybe<CommonMessage>;
  createPolicy: Policy;
  updatePolicy: Policy;
  deletePolicy: CommonMessage;
  deletePolicies: CommonMessage;
  addPolicyAssignments: CommonMessage;
  /** 开启授权 */
  enablePolicyAssignment: CommonMessage;
  /** 开启授权 */
  disbalePolicyAssignment: CommonMessage;
  removePolicyAssignments: CommonMessage;
  registerByUsername?: Maybe<User>;
  registerByEmail?: Maybe<User>;
  registerByPhoneCode?: Maybe<User>;
  /** 创建角色 */
  createRole: Role;
  /** 修改角色 */
  updateRole: Role;
  /** 删除角色 */
  deleteRole: CommonMessage;
  /** 批量删除角色 */
  deleteRoles: CommonMessage;
  /** 给用户授权角色 */
  assignRole?: Maybe<CommonMessage>;
  /** 撤销角色 */
  revokeRole?: Maybe<CommonMessage>;
  /** 使用子账号登录 */
  loginBySubAccount: User;
  setUdf: UserDefinedField;
  removeUdf?: Maybe<CommonMessage>;
  setUdv?: Maybe<Array<UserDefinedData>>;
  setUdfValueBatch?: Maybe<CommonMessage>;
  removeUdv?: Maybe<Array<UserDefinedData>>;
  setUdvBatch?: Maybe<Array<UserDefinedData>>;
  refreshToken?: Maybe<RefreshToken>;
  /** 创建用户。此接口需要管理员权限，普通用户注册请使用 **register** 接口。 */
  createUser: User;
  /** 更新用户信息。 */
  updateUser: User;
  /** 修改用户密码，此接口需要验证原始密码，管理员直接修改请使用 **updateUser** 接口。 */
  updatePassword: User;
  /** 绑定手机号，调用此接口需要当前用户未绑定手机号 */
  bindPhone: User;
  /** 绑定邮箱 */
  bindEmail: User;
  /** 解绑定手机号，调用此接口需要当前用户已绑定手机号并且绑定了其他登录方式 */
  unbindPhone: User;
  /** 修改手机号。此接口需要验证手机号验证码，管理员直接修改请使用 **updateUser** 接口。 */
  updatePhone: User;
  /** 修改邮箱。此接口需要验证邮箱验证码，管理员直接修改请使用 updateUser 接口。 */
  updateEmail: User;
  /** 解绑定邮箱 */
  unbindEmail: User;
  /** 删除用户 */
  deleteUser?: Maybe<CommonMessage>;
  /** 批量删除用户 */
  deleteUsers?: Maybe<CommonMessage>;
  /** 创建用户池 */
  createUserpool: UserPool;
  updateUserpool: UserPool;
  refreshUserpoolSecret: Scalars['String'];
  deleteUserpool: CommonMessage;
  refreshAccessToken: RefreshAccessTokenRes;
  addWhitelist: Array<Maybe<WhiteList>>;
  removeWhitelist: Array<Maybe<WhiteList>>;
};


export type MutationAllowArgs = {
  resource: Scalars['String'];
  action: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Scalars['String']>>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Scalars['String']>>;
  namespace?: Maybe<Scalars['String']>;
};


export type MutationAuthorizeResourceArgs = {
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceType>;
  resource?: Maybe<Scalars['String']>;
  opts?: Maybe<Array<Maybe<AuthorizeResourceOpt>>>;
};


export type MutationCreateSocialConnectionInstanceArgs = {
  input: CreateSocialConnectionInstanceInput;
};


export type MutationEnableSocialConnectionInstanceArgs = {
  provider: Scalars['String'];
};


export type MutationDisableSocialConnectionInstanceArgs = {
  provider: Scalars['String'];
};


export type MutationSetMainDepartmentArgs = {
  userId: Scalars['String'];
  departmentId?: Maybe<Scalars['String']>;
};


export type MutationConfigEmailTemplateArgs = {
  input: ConfigEmailTemplateInput;
};


export type MutationEnableEmailTemplateArgs = {
  type: EmailTemplateType;
};


export type MutationDisableEmailTemplateArgs = {
  type: EmailTemplateType;
};


export type MutationSendEmailArgs = {
  email: Scalars['String'];
  scene: EmailScene;
};


export type MutationSendFirstLoginVerifyEmailArgs = {
  userId: Scalars['String'];
  appId: Scalars['String'];
};


export type MutationCreateFunctionArgs = {
  input: CreateFunctionInput;
};


export type MutationUpdateFunctionArgs = {
  input: UpdateFunctionInput;
};


export type MutationDeleteFunctionArgs = {
  id: Scalars['String'];
};


export type MutationAddUserToGroupArgs = {
  userIds: Array<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};


export type MutationRemoveUserFromGroupArgs = {
  userIds: Array<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};


export type MutationCreateGroupArgs = {
  code: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};


export type MutationUpdateGroupArgs = {
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  newCode?: Maybe<Scalars['String']>;
};


export type MutationDeleteGroupsArgs = {
  codeList: Array<Scalars['String']>;
};


export type MutationLoginByEmailArgs = {
  input: LoginByEmailInput;
};


export type MutationLoginByUsernameArgs = {
  input: LoginByUsernameInput;
};


export type MutationLoginByPhoneCodeArgs = {
  input: LoginByPhoneCodeInput;
};


export type MutationLoginByPhonePasswordArgs = {
  input: LoginByPhonePasswordInput;
};


export type MutationChangeMfaArgs = {
  enable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateOrgArgs = {
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MutationDeleteOrgArgs = {
  id: Scalars['String'];
};


export type MutationAddNodeArgs = {
  orgId: Scalars['String'];
  parentNodeId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameI18n?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionI18n?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
};


export type MutationAddNodeV2Args = {
  orgId: Scalars['String'];
  parentNodeId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameI18n?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionI18n?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
};


export type MutationUpdateNodeArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MutationDeleteNodeArgs = {
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
};


export type MutationAddMemberArgs = {
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
};


export type MutationRemoveMemberArgs = {
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
};


export type MutationMoveMembersArgs = {
  userIds: Array<Scalars['String']>;
  sourceNodeId: Scalars['String'];
  targetNodeId: Scalars['String'];
};


export type MutationMoveNodeArgs = {
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  targetParentId: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationResetPasswordByFirstLoginTokenArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreatePolicyArgs = {
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  statements: Array<PolicyStatementInput>;
};


export type MutationUpdatePolicyArgs = {
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<PolicyStatementInput>>;
  newCode?: Maybe<Scalars['String']>;
};


export type MutationDeletePolicyArgs = {
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type MutationDeletePoliciesArgs = {
  codeList: Array<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
};


export type MutationAddPolicyAssignmentsArgs = {
  policies: Array<Scalars['String']>;
  targetType: PolicyAssignmentTargetType;
  targetIdentifiers?: Maybe<Array<Scalars['String']>>;
  inheritByChildren?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
};


export type MutationEnablePolicyAssignmentArgs = {
  policy: Scalars['String'];
  targetType: PolicyAssignmentTargetType;
  targetIdentifier: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type MutationDisbalePolicyAssignmentArgs = {
  policy: Scalars['String'];
  targetType: PolicyAssignmentTargetType;
  targetIdentifier: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type MutationRemovePolicyAssignmentsArgs = {
  policies: Array<Scalars['String']>;
  targetType: PolicyAssignmentTargetType;
  targetIdentifiers?: Maybe<Array<Scalars['String']>>;
  namespace?: Maybe<Scalars['String']>;
};


export type MutationRegisterByUsernameArgs = {
  input: RegisterByUsernameInput;
};


export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};


export type MutationRegisterByPhoneCodeArgs = {
  input: RegisterByPhoneCodeInput;
};


export type MutationCreateRoleArgs = {
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
};


export type MutationUpdateRoleArgs = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  newCode?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
};


export type MutationDeleteRoleArgs = {
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
};


export type MutationDeleteRolesArgs = {
  codeList: Array<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
};


export type MutationAssignRoleArgs = {
  namespace?: Maybe<Scalars['String']>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
};


export type MutationRevokeRoleArgs = {
  namespace?: Maybe<Scalars['String']>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
};


export type MutationLoginBySubAccountArgs = {
  account: Scalars['String'];
  password: Scalars['String'];
  captchaCode?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
};


export type MutationSetUdfArgs = {
  targetType: UdfTargetType;
  key: Scalars['String'];
  dataType: UdfDataType;
  label: Scalars['String'];
  options?: Maybe<Scalars['String']>;
};


export type MutationRemoveUdfArgs = {
  targetType: UdfTargetType;
  key: Scalars['String'];
};


export type MutationSetUdvArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};


export type MutationSetUdfValueBatchArgs = {
  targetType: UdfTargetType;
  input: Array<SetUdfValueBatchInput>;
};


export type MutationRemoveUdvArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
};


export type MutationSetUdvBatchArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  udvList?: Maybe<Array<UserDefinedDataInput>>;
};


export type MutationRefreshTokenArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
  resetPasswordOnFirstLogin?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  id?: Maybe<Scalars['String']>;
  input: UpdateUserInput;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
};


export type MutationBindPhoneArgs = {
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
};


export type MutationBindEmailArgs = {
  email: Scalars['String'];
  emailCode: Scalars['String'];
};


export type MutationUpdatePhoneArgs = {
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  oldPhone?: Maybe<Scalars['String']>;
  oldPhoneCode?: Maybe<Scalars['String']>;
};


export type MutationUpdateEmailArgs = {
  email: Scalars['String'];
  emailCode: Scalars['String'];
  oldEmail?: Maybe<Scalars['String']>;
  oldEmailCode?: Maybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUsersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationCreateUserpoolArgs = {
  name: Scalars['String'];
  domain: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
};


export type MutationUpdateUserpoolArgs = {
  input: UpdateUserpoolInput;
};


export type MutationRefreshAccessTokenArgs = {
  accessToken?: Maybe<Scalars['String']>;
};


export type MutationAddWhitelistArgs = {
  type: WhitelistType;
  list: Array<Scalars['String']>;
};


export type MutationRemoveWhitelistArgs = {
  type: WhitelistType;
  list: Array<Scalars['String']>;
};

export type CommonMessage = {
  /** 可读的接口响应说明，请以业务状态码 code 作为判断业务是否成功的标志 */
  message?: Maybe<Scalars['String']>;
  /**
   * 业务状态码（与 HTTP 响应码不同），但且仅当为 200 的时候表示操作成功表示，详细说明请见：
   * [Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html)
   */
  code?: Maybe<Scalars['Int']>;
};

export type AuthorizeResourceOpt = {
  targetType: PolicyAssignmentTargetType;
  targetIdentifier: Scalars['String'];
  actions?: Maybe<Array<Scalars['String']>>;
};

export type CreateSocialConnectionInstanceInput = {
  /** 社会化登录 provider */
  provider: Scalars['String'];
  fields?: Maybe<Array<Maybe<CreateSocialConnectionInstanceFieldInput>>>;
};

export type CreateSocialConnectionInstanceFieldInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigEmailTemplateInput = {
  /** 邮件模版类型 */
  type: EmailTemplateType;
  /** 模版名称 */
  name: Scalars['String'];
  /** 邮件主题 */
  subject: Scalars['String'];
  /** 显示的邮件发送人 */
  sender: Scalars['String'];
  /** 邮件模版内容 */
  content: Scalars['String'];
  /** 重定向链接，操作成功后，用户将被重定向到此 URL。 */
  redirectTo?: Maybe<Scalars['String']>;
  hasURL?: Maybe<Scalars['Boolean']>;
  /** 验证码过期时间（单位为秒） */
  expiresIn?: Maybe<Scalars['Int']>;
};

/** 邮件使用场景 */
export enum EmailScene {
  /** 发送重置密码邮件，邮件中包含验证码 */
  ResetPassword = 'RESET_PASSWORD',
  /** 发送验证邮箱的邮件 */
  VerifyEmail = 'VERIFY_EMAIL',
  /** 发送修改邮箱邮件，邮件中包含验证码 */
  ChangeEmail = 'CHANGE_EMAIL',
  /** 发送 MFA 验证邮件 */
  MfaVerify = 'MFA_VERIFY'
}

export type CreateFunctionInput = {
  /** 函数名称 */
  name: Scalars['String'];
  /** 源代码 */
  sourceCode: Scalars['String'];
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 云函数链接 */
  url?: Maybe<Scalars['String']>;
};

export type UpdateFunctionInput = {
  /** ID */
  id: Scalars['String'];
  /** 函数名称 */
  name?: Maybe<Scalars['String']>;
  /** 源代码 */
  sourceCode?: Maybe<Scalars['String']>;
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 云函数链接 */
  url?: Maybe<Scalars['String']>;
};

export type LoginByEmailInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  /** 图形验证码 */
  captchaCode?: Maybe<Scalars['String']>;
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type LoginByUsernameInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  /** 图形验证码 */
  captchaCode?: Maybe<Scalars['String']>;
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type LoginByPhoneCodeInput = {
  phone: Scalars['String'];
  code: Scalars['String'];
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type LoginByPhonePasswordInput = {
  phone: Scalars['String'];
  password: Scalars['String'];
  /** 图形验证码 */
  captchaCode?: Maybe<Scalars['String']>;
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type PolicyStatementInput = {
  resource: Scalars['String'];
  actions: Array<Scalars['String']>;
  effect?: Maybe<PolicyEffect>;
  condition?: Maybe<Array<PolicyStatementConditionInput>>;
};

export type PolicyStatementConditionInput = {
  param: Scalars['String'];
  operator: Scalars['String'];
  value: Scalars['Object'];
};

export type RegisterByUsernameInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  profile?: Maybe<RegisterProfile>;
  forceLogin?: Maybe<Scalars['Boolean']>;
  generateToken?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type RegisterProfile = {
  ip?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  udf?: Maybe<Array<UserDdfInput>>;
};

export type UserDdfInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type RegisterByEmailInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile?: Maybe<RegisterProfile>;
  forceLogin?: Maybe<Scalars['Boolean']>;
  generateToken?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type RegisterByPhoneCodeInput = {
  phone: Scalars['String'];
  code: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<RegisterProfile>;
  forceLogin?: Maybe<Scalars['Boolean']>;
  generateToken?: Maybe<Scalars['Boolean']>;
  clientIp?: Maybe<Scalars['String']>;
  /** 设置用户自定义字段，要求符合 Array<{ key: string; value: string }> 格式 */
  params?: Maybe<Scalars['String']>;
  /** 请求上下文信息，将会传递到 pipeline 中 */
  context?: Maybe<Scalars['String']>;
};

export type SetUdfValueBatchInput = {
  targetId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type UserDefinedDataInput = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type RefreshToken = {
  token?: Maybe<Scalars['String']>;
  iat?: Maybe<Scalars['Int']>;
  exp?: Maybe<Scalars['Int']>;
};

export type CreateUserInput = {
  /** 用户名，用户池内唯一 */
  username?: Maybe<Scalars['String']>;
  /** 邮箱，不区分大小写，如 Bob@example.com 和 bob@example.com 会识别为同一个邮箱。用户池内唯一。 */
  email?: Maybe<Scalars['String']>;
  /** 邮箱是否已验证 */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** 手机号，用户池内唯一 */
  phone?: Maybe<Scalars['String']>;
  /** 手机号是否已验证 */
  phoneVerified?: Maybe<Scalars['Boolean']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  /** 昵称，该字段不唯一。 */
  nickname?: Maybe<Scalars['String']>;
  /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
  photo?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** 注册方式 */
  registerSource?: Maybe<Array<Scalars['String']>>;
  browser?: Maybe<Scalars['String']>;
  /** 用户社会化登录第三方身份提供商返回的原始用户信息，非社会化登录方式注册的用户此字段为空。 */
  oauth?: Maybe<Scalars['String']>;
  /** 用户累计登录次数，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  loginsCount?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
  /** 用户注册时间，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  signedUp?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  device?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  /** 邮箱。直接修改用户邮箱需要管理员权限，普通用户修改邮箱请使用 **updateEmail** 接口。 */
  email?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  /** 邮箱是否已验证。直接修改 emailVerified 需要管理员权限。 */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** 手机号。直接修改用户手机号需要管理员权限，普通用户修改邮箱请使用 **updatePhone** 接口。 */
  phone?: Maybe<Scalars['String']>;
  /** 手机号是否已验证。直接修改 **phoneVerified** 需要管理员权限。 */
  phoneVerified?: Maybe<Scalars['Boolean']>;
  /** 用户名，用户池内唯一 */
  username?: Maybe<Scalars['String']>;
  /** 昵称，该字段不唯一。 */
  nickname?: Maybe<Scalars['String']>;
  /** 密码。直接修改用户密码需要管理员权限，普通用户修改邮箱请使用 **updatePassword** 接口。 */
  password?: Maybe<Scalars['String']>;
  /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
  photo?: Maybe<Scalars['String']>;
  /** 注册方式 */
  company?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  tokenExpiredAt?: Maybe<Scalars['String']>;
  /** 用户累计登录次数，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  loginsCount?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
  /** 用户注册时间，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  blocked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};

export type UpdateUserpoolInput = {
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
  emailVerifiedDefault?: Maybe<Scalars['Boolean']>;
  sendWelcomeEmail?: Maybe<Scalars['Boolean']>;
  registerDisabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated */
  appSsoEnabled?: Maybe<Scalars['Boolean']>;
  allowedOrigins?: Maybe<Scalars['String']>;
  tokenExpiresAfter?: Maybe<Scalars['Int']>;
  frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfigInput>;
  loginFailCheck?: Maybe<LoginFailCheckConfigInput>;
  loginFailStrategy?: Maybe<Scalars['String']>;
  loginPasswordFailCheck?: Maybe<LoginPasswordFailCheckConfigInput>;
  changePhoneStrategy?: Maybe<ChangePhoneStrategyInput>;
  changeEmailStrategy?: Maybe<ChangeEmailStrategyInput>;
  qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategyInput>;
  app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategyInput>;
  whitelist?: Maybe<RegisterWhiteListConfigInput>;
  /** 自定义短信服务商配置 */
  customSMSProvider?: Maybe<CustomSmsProviderInput>;
  /** 是否要求邮箱必须验证才能登录（如果是通过邮箱登录的话） */
  loginRequireEmailVerified?: Maybe<Scalars['Boolean']>;
  verifyCodeLength?: Maybe<Scalars['Int']>;
};

export type FrequentRegisterCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type LoginFailCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type LoginPasswordFailCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ChangePhoneStrategyInput = {
  verifyOldPhone?: Maybe<Scalars['Boolean']>;
};

export type ChangeEmailStrategyInput = {
  verifyOldEmail?: Maybe<Scalars['Boolean']>;
};

export type QrcodeLoginStrategyInput = {
  qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
  returnFullUserInfo?: Maybe<Scalars['Boolean']>;
  allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
  ticketExpiresAfter?: Maybe<Scalars['Int']>;
};

export type App2WxappLoginStrategyInput = {
  ticketExpriresAfter?: Maybe<Scalars['Int']>;
  ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};

export type RegisterWhiteListConfigInput = {
  phoneEnabled?: Maybe<Scalars['Boolean']>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  usernameEnabled?: Maybe<Scalars['Boolean']>;
};

export type CustomSmsProviderInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
};

export type RefreshAccessTokenRes = {
  accessToken?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  iat?: Maybe<Scalars['Int']>;
};

/** 批量删除返回结果 */
export type BatchOperationResult = {
  /** 删除成功的个数 */
  succeedCount: Scalars['Int'];
  /** 删除失败的个数 */
  failedCount: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
};

export type KeyValuePair = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type SocialConnectionFieldInput = {
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SocialConnectionFieldInput>>>;
};

export type CreateSocialConnectionInput = {
  provider: Scalars['String'];
  name: Scalars['String'];
  logo: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<SocialConnectionFieldInput>>;
};

export type AddMemberVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
}>;


export type AddMemberResponse = { addMember: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>>, users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, username?: Maybe<string>, status?: Maybe<UserStatus>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } } };

export type AddNodeVariables = Exact<{
  orgId: Scalars['String'];
  parentNodeId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameI18n?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionI18n?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
}>;


export type AddNodeResponse = { addNode: { id: string, rootNode: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }, nodes: Array<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> } };

export type AddNodeV2Variables = Exact<{
  orgId: Scalars['String'];
  parentNodeId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameI18n?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionI18n?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
}>;


export type AddNodeV2Response = { addNodeV2: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> } };

export type AddPolicyAssignmentsVariables = Exact<{
  policies: Array<Scalars['String']>;
  targetType: PolicyAssignmentTargetType;
  targetIdentifiers?: Maybe<Array<Scalars['String']>>;
  inheritByChildren?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type AddPolicyAssignmentsResponse = { addPolicyAssignments: { message?: Maybe<string>, code?: Maybe<number> } };

export type AddUserToGroupVariables = Exact<{
  userIds: Array<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
}>;


export type AddUserToGroupResponse = { addUserToGroup: { message?: Maybe<string>, code?: Maybe<number> } };

export type AddWhitelistVariables = Exact<{
  type: WhitelistType;
  list: Array<Scalars['String']>;
}>;


export type AddWhitelistResponse = { addWhitelist: Array<Maybe<{ createdAt?: Maybe<string>, updatedAt?: Maybe<string>, value: string }>> };

export type AllowVariables = Exact<{
  resource: Scalars['String'];
  action: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Scalars['String']>>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Scalars['String']>>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type AllowResponse = { allow: { message?: Maybe<string>, code?: Maybe<number> } };

export type AssignRoleVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;


export type AssignRoleResponse = { assignRole?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type AuthorizeResourceVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceType>;
  opts?: Maybe<Array<Maybe<AuthorizeResourceOpt>>>;
}>;


export type AuthorizeResourceResponse = { authorizeResource: { code?: Maybe<number>, message?: Maybe<string> } };

export type BindEmailVariables = Exact<{
  email: Scalars['String'];
  emailCode: Scalars['String'];
}>;


export type BindEmailResponse = { bindEmail: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type BindPhoneVariables = Exact<{
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
}>;


export type BindPhoneResponse = { bindPhone: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type ChangeMfaVariables = Exact<{
  enable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Boolean']>;
}>;


export type ChangeMfaResponse = { changeMfa?: Maybe<{ id: string, userId: string, userPoolId: string, enable: boolean, secret?: Maybe<string> }> };

export type ConfigEmailTemplateVariables = Exact<{
  input: ConfigEmailTemplateInput;
}>;


export type ConfigEmailTemplateResponse = { configEmailTemplate: { type: EmailTemplateType, name: string, subject: string, sender: string, content: string, redirectTo?: Maybe<string>, hasURL?: Maybe<boolean>, expiresIn?: Maybe<number>, enabled?: Maybe<boolean>, isSystem?: Maybe<boolean> } };

export type CreateFunctionVariables = Exact<{
  input: CreateFunctionInput;
}>;


export type CreateFunctionResponse = { createFunction?: Maybe<{ id: string, name: string, sourceCode: string, description?: Maybe<string>, url?: Maybe<string> }> };

export type CreateGroupVariables = Exact<{
  code: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type CreateGroupResponse = { createGroup: { code: string, name: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type CreateOrgVariables = Exact<{
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type CreateOrgResponse = { createOrg: { id: string, rootNode: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }, nodes: Array<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> } };

export type CreatePolicyVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  statements: Array<PolicyStatementInput>;
}>;


export type CreatePolicyResponse = { createPolicy: { namespace: string, code: string, isDefault: boolean, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, assignmentsCount: number, statements: Array<{ resource: string, actions: Array<string>, effect?: Maybe<PolicyEffect>, condition?: Maybe<Array<{ param: string, operator: string, value: any }>> }> } };

export type CreateRoleVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
}>;


export type CreateRoleResponse = { createRole: { id: string, namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, parent?: Maybe<{ namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> } };

export type CreateSocialConnectionInstanceVariables = Exact<{
  input: CreateSocialConnectionInstanceInput;
}>;


export type CreateSocialConnectionInstanceResponse = { createSocialConnectionInstance: { provider: string, enabled: boolean, fields?: Maybe<Array<Maybe<{ key: string, value: string }>>> } };

export type CreateUserVariables = Exact<{
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
  resetPasswordOnFirstLogin?: Maybe<Scalars['Boolean']>;
}>;


export type CreateUserResponse = { createUser: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> } };

export type CreateUserWithCustomDataVariables = Exact<{
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['String']>;
}>;


export type CreateUserWithCustomDataResponse = { createUser: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> } };

export type CreateUserpoolVariables = Exact<{
  name: Scalars['String'];
  domain: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
}>;


export type CreateUserpoolResponse = { createUserpool: { id: string, name: string, domain: string, description?: Maybe<string>, secret: string, jwtSecret: string, logo: string, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, emailVerifiedDefault: boolean, sendWelcomeEmail: boolean, registerDisabled: boolean, appSsoEnabled: boolean, showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>, allowedOrigins?: Maybe<string>, tokenExpiresAfter?: Maybe<number>, isDeleted?: Maybe<boolean>, packageType?: Maybe<number>, userpoolTypes?: Maybe<Array<{ code?: Maybe<string>, name?: Maybe<string>, description?: Maybe<string>, image?: Maybe<string>, sdks?: Maybe<Array<Maybe<string>>> }>>, frequentRegisterCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, loginFailCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, changePhoneStrategy?: Maybe<{ verifyOldPhone?: Maybe<boolean> }>, changeEmailStrategy?: Maybe<{ verifyOldEmail?: Maybe<boolean> }>, qrcodeLoginStrategy?: Maybe<{ qrcodeExpiresAfter?: Maybe<number>, returnFullUserInfo?: Maybe<boolean>, allowExchangeUserInfoFromBrowser?: Maybe<boolean>, ticketExpiresAfter?: Maybe<number> }>, app2WxappLoginStrategy?: Maybe<{ ticketExpriresAfter?: Maybe<number>, ticketExchangeUserInfoNeedSecret?: Maybe<boolean> }>, whitelist?: Maybe<{ phoneEnabled?: Maybe<boolean>, emailEnabled?: Maybe<boolean>, usernameEnabled?: Maybe<boolean> }>, customSMSProvider?: Maybe<{ enabled?: Maybe<boolean>, provider?: Maybe<string> }> } };

export type DeleteFunctionVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteFunctionResponse = { deleteFunction: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteGroupsVariables = Exact<{
  codeList: Array<Scalars['String']>;
}>;


export type DeleteGroupsResponse = { deleteGroups: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteNodeVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
}>;


export type DeleteNodeResponse = { deleteNode: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteOrgVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteOrgResponse = { deleteOrg: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeletePoliciesVariables = Exact<{
  codeList: Array<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type DeletePoliciesResponse = { deletePolicies: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeletePolicyVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type DeletePolicyResponse = { deletePolicy: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteRoleVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type DeleteRoleResponse = { deleteRole: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteRolesVariables = Exact<{
  codeList: Array<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type DeleteRolesResponse = { deleteRoles: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteUserVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserResponse = { deleteUser?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type DeleteUserpoolVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserpoolResponse = { deleteUserpool: { message?: Maybe<string>, code?: Maybe<number> } };

export type DeleteUsersVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;


export type DeleteUsersResponse = { deleteUsers?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type DisableEmailTemplateVariables = Exact<{
  type: EmailTemplateType;
}>;


export type DisableEmailTemplateResponse = { disableEmailTemplate: { type: EmailTemplateType, name: string, subject: string, sender: string, content: string, redirectTo?: Maybe<string>, hasURL?: Maybe<boolean>, expiresIn?: Maybe<number>, enabled?: Maybe<boolean>, isSystem?: Maybe<boolean> } };

export type DisableSocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;


export type DisableSocialConnectionInstanceResponse = { disableSocialConnectionInstance: { provider: string, enabled: boolean, fields?: Maybe<Array<Maybe<{ key: string, value: string }>>> } };

export type DisbalePolicyAssignmentVariables = Exact<{
  policy: Scalars['String'];
  targetType: PolicyAssignmentTargetType;
  targetIdentifier: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type DisbalePolicyAssignmentResponse = { disbalePolicyAssignment: { message?: Maybe<string>, code?: Maybe<number> } };

export type EnableEmailTemplateVariables = Exact<{
  type: EmailTemplateType;
}>;


export type EnableEmailTemplateResponse = { enableEmailTemplate: { type: EmailTemplateType, name: string, subject: string, sender: string, content: string, redirectTo?: Maybe<string>, hasURL?: Maybe<boolean>, expiresIn?: Maybe<number>, enabled?: Maybe<boolean>, isSystem?: Maybe<boolean> } };

export type EnablePolicyAssignmentVariables = Exact<{
  policy: Scalars['String'];
  targetType: PolicyAssignmentTargetType;
  targetIdentifier: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type EnablePolicyAssignmentResponse = { enablePolicyAssignment: { message?: Maybe<string>, code?: Maybe<number> } };

export type EnableSocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;


export type EnableSocialConnectionInstanceResponse = { enableSocialConnectionInstance: { provider: string, enabled: boolean, fields?: Maybe<Array<Maybe<{ key: string, value: string }>>> } };

export type LoginByEmailVariables = Exact<{
  input: LoginByEmailInput;
}>;


export type LoginByEmailResponse = { loginByEmail?: Maybe<{ id: string, arn: string, status?: Maybe<UserStatus>, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type LoginByPhoneCodeVariables = Exact<{
  input: LoginByPhoneCodeInput;
}>;


export type LoginByPhoneCodeResponse = { loginByPhoneCode?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type LoginByPhonePasswordVariables = Exact<{
  input: LoginByPhonePasswordInput;
}>;


export type LoginByPhonePasswordResponse = { loginByPhonePassword?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type LoginBySubAccountVariables = Exact<{
  account: Scalars['String'];
  password: Scalars['String'];
  captchaCode?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
}>;


export type LoginBySubAccountResponse = { loginBySubAccount: { id: string, arn: string, status?: Maybe<UserStatus>, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> } };

export type LoginByUsernameVariables = Exact<{
  input: LoginByUsernameInput;
}>;


export type LoginByUsernameResponse = { loginByUsername?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type MoveMembersVariables = Exact<{
  userIds: Array<Scalars['String']>;
  sourceNodeId: Scalars['String'];
  targetNodeId: Scalars['String'];
}>;


export type MoveMembersResponse = { moveMembers?: Maybe<{ code?: Maybe<number>, message?: Maybe<string> }> };

export type MoveNodeVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  targetParentId: Scalars['String'];
}>;


export type MoveNodeResponse = { moveNode: { id: string, rootNode: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }, nodes: Array<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> } };

export type RefreshAccessTokenVariables = Exact<{
  accessToken?: Maybe<Scalars['String']>;
}>;


export type RefreshAccessTokenResponse = { refreshAccessToken: { accessToken?: Maybe<string>, exp?: Maybe<number>, iat?: Maybe<number> } };

export type RefreshTokenVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type RefreshTokenResponse = { refreshToken?: Maybe<{ token?: Maybe<string>, iat?: Maybe<number>, exp?: Maybe<number> }> };

export type RefreshUserpoolSecretVariables = Exact<{ [key: string]: never; }>;


export type RefreshUserpoolSecretResponse = { refreshUserpoolSecret: string };

export type RegisterByEmailVariables = Exact<{
  input: RegisterByEmailInput;
}>;


export type RegisterByEmailResponse = { registerByEmail?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type RegisterByPhoneCodeVariables = Exact<{
  input: RegisterByPhoneCodeInput;
}>;


export type RegisterByPhoneCodeResponse = { registerByPhoneCode?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type RegisterByUsernameVariables = Exact<{
  input: RegisterByUsernameInput;
}>;


export type RegisterByUsernameResponse = { registerByUsername?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type RemoveMemberVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
}>;


export type RemoveMemberResponse = { removeMember: { id: string, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>>, users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> } } };

export type RemovePolicyAssignmentsVariables = Exact<{
  policies: Array<Scalars['String']>;
  targetType: PolicyAssignmentTargetType;
  targetIdentifiers?: Maybe<Array<Scalars['String']>>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type RemovePolicyAssignmentsResponse = { removePolicyAssignments: { message?: Maybe<string>, code?: Maybe<number> } };

export type RemoveUdfVariables = Exact<{
  targetType: UdfTargetType;
  key: Scalars['String'];
}>;


export type RemoveUdfResponse = { removeUdf?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type RemoveUdvVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
}>;


export type RemoveUdvResponse = { removeUdv?: Maybe<Array<{ key: string, dataType: UdfDataType, value: string, label?: Maybe<string> }>> };

export type RemoveUserFromGroupVariables = Exact<{
  userIds: Array<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
}>;


export type RemoveUserFromGroupResponse = { removeUserFromGroup: { message?: Maybe<string>, code?: Maybe<number> } };

export type RemoveWhitelistVariables = Exact<{
  type: WhitelistType;
  list: Array<Scalars['String']>;
}>;


export type RemoveWhitelistResponse = { removeWhitelist: Array<Maybe<{ createdAt?: Maybe<string>, updatedAt?: Maybe<string>, value: string }>> };

export type ResetPasswordVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ResetPasswordResponse = { resetPassword?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type ResetPasswordByFirstLoginTokenVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordByFirstLoginTokenResponse = { resetPasswordByFirstLoginToken?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type RevokeRoleVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;


export type RevokeRoleResponse = { revokeRole?: Maybe<{ message?: Maybe<string>, code?: Maybe<number> }> };

export type SendEmailVariables = Exact<{
  email: Scalars['String'];
  scene: EmailScene;
}>;


export type SendEmailResponse = { sendEmail: { message?: Maybe<string>, code?: Maybe<number> } };

export type SendFirstLoginVerifyEmailVariables = Exact<{
  userId: Scalars['String'];
  appId: Scalars['String'];
}>;


export type SendFirstLoginVerifyEmailResponse = { sendFirstLoginVerifyEmail: { message?: Maybe<string>, code?: Maybe<number> } };

export type SetMainDepartmentVariables = Exact<{
  userId: Scalars['String'];
  departmentId?: Maybe<Scalars['String']>;
}>;


export type SetMainDepartmentResponse = { setMainDepartment: { message?: Maybe<string>, code?: Maybe<number> } };

export type SetUdfVariables = Exact<{
  targetType: UdfTargetType;
  key: Scalars['String'];
  dataType: UdfDataType;
  label: Scalars['String'];
  options?: Maybe<Scalars['String']>;
}>;


export type SetUdfResponse = { setUdf: { targetType: UdfTargetType, dataType: UdfDataType, key: string, label?: Maybe<string>, options?: Maybe<string> } };

export type SetUdfValueBatchVariables = Exact<{
  targetType: UdfTargetType;
  input: Array<SetUdfValueBatchInput>;
}>;


export type SetUdfValueBatchResponse = { setUdfValueBatch?: Maybe<{ code?: Maybe<number>, message?: Maybe<string> }> };

export type SetUdvVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
}>;


export type SetUdvResponse = { setUdv?: Maybe<Array<{ key: string, dataType: UdfDataType, value: string, label?: Maybe<string> }>> };

export type SetUdvBatchVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  udvList?: Maybe<Array<UserDefinedDataInput>>;
}>;


export type SetUdvBatchResponse = { setUdvBatch?: Maybe<Array<{ key: string, dataType: UdfDataType, value: string, label?: Maybe<string> }>> };

export type UnbindEmailVariables = Exact<{ [key: string]: never; }>;


export type UnbindEmailResponse = { unbindEmail: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type UnbindPhoneVariables = Exact<{ [key: string]: never; }>;


export type UnbindPhoneResponse = { unbindPhone: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type UpdateEmailVariables = Exact<{
  email: Scalars['String'];
  emailCode: Scalars['String'];
  oldEmail?: Maybe<Scalars['String']>;
  oldEmailCode?: Maybe<Scalars['String']>;
}>;


export type UpdateEmailResponse = { updateEmail: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type UpdateFunctionVariables = Exact<{
  input: UpdateFunctionInput;
}>;


export type UpdateFunctionResponse = { updateFunction: { id: string, name: string, sourceCode: string, description?: Maybe<string>, url?: Maybe<string> } };

export type UpdateGroupVariables = Exact<{
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  newCode?: Maybe<Scalars['String']>;
}>;


export type UpdateGroupResponse = { updateGroup: { code: string, name: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type UpdateNodeVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type UpdateNodeResponse = { updateNode: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>>, users: { totalCount: number } } };

export type UpdatePasswordVariables = Exact<{
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
}>;


export type UpdatePasswordResponse = { updatePassword: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type UpdatePhoneVariables = Exact<{
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  oldPhone?: Maybe<Scalars['String']>;
  oldPhoneCode?: Maybe<Scalars['String']>;
}>;


export type UpdatePhoneResponse = { updatePhone: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> } };

export type UpdatePolicyVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<PolicyStatementInput>>;
  newCode?: Maybe<Scalars['String']>;
}>;


export type UpdatePolicyResponse = { updatePolicy: { namespace: string, code: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, statements: Array<{ resource: string, actions: Array<string>, effect?: Maybe<PolicyEffect>, condition?: Maybe<Array<{ param: string, operator: string, value: any }>> }> } };

export type UpdateRoleVariables = Exact<{
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  newCode?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type UpdateRoleResponse = { updateRole: { id: string, namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, parent?: Maybe<{ namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> } };

export type UpdateUserVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  input: UpdateUserInput;
}>;


export type UpdateUserResponse = { updateUser: { id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> } };

export type UpdateUserpoolVariables = Exact<{
  input: UpdateUserpoolInput;
}>;


export type UpdateUserpoolResponse = { updateUserpool: { id: string, name: string, domain: string, description?: Maybe<string>, secret: string, jwtSecret: string, logo: string, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, emailVerifiedDefault: boolean, sendWelcomeEmail: boolean, registerDisabled: boolean, appSsoEnabled: boolean, showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>, allowedOrigins?: Maybe<string>, tokenExpiresAfter?: Maybe<number>, isDeleted?: Maybe<boolean>, loginFailStrategy?: Maybe<string>, packageType?: Maybe<number>, useCustomUserStore?: Maybe<boolean>, loginRequireEmailVerified?: Maybe<boolean>, verifyCodeLength?: Maybe<number>, userpoolTypes?: Maybe<Array<{ code?: Maybe<string>, name?: Maybe<string>, description?: Maybe<string>, image?: Maybe<string>, sdks?: Maybe<Array<Maybe<string>>> }>>, frequentRegisterCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, loginFailCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, loginPasswordFailCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, changePhoneStrategy?: Maybe<{ verifyOldPhone?: Maybe<boolean> }>, changeEmailStrategy?: Maybe<{ verifyOldEmail?: Maybe<boolean> }>, qrcodeLoginStrategy?: Maybe<{ qrcodeExpiresAfter?: Maybe<number>, returnFullUserInfo?: Maybe<boolean>, allowExchangeUserInfoFromBrowser?: Maybe<boolean>, ticketExpiresAfter?: Maybe<number> }>, app2WxappLoginStrategy?: Maybe<{ ticketExpriresAfter?: Maybe<number>, ticketExchangeUserInfoNeedSecret?: Maybe<boolean> }>, whitelist?: Maybe<{ phoneEnabled?: Maybe<boolean>, emailEnabled?: Maybe<boolean>, usernameEnabled?: Maybe<boolean> }>, customSMSProvider?: Maybe<{ enabled?: Maybe<boolean>, provider?: Maybe<string>, config?: Maybe<string> }> } };

export type AccessTokenVariables = Exact<{
  userPoolId: Scalars['String'];
  secret: Scalars['String'];
}>;


export type AccessTokenResponse = { accessToken: { accessToken?: Maybe<string>, exp?: Maybe<number>, iat?: Maybe<number> } };

export type ArchivedUsersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type ArchivedUsersResponse = { archivedUsers: { totalCount: number, list: Array<{ id: string, arn: string, status?: Maybe<UserStatus>, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } };

export type AuthorizedTargetsVariables = Exact<{
  namespace: Scalars['String'];
  resourceType: ResourceType;
  resource: Scalars['String'];
  targetType?: Maybe<PolicyAssignmentTargetType>;
  actions?: Maybe<AuthorizedTargetsActionsInput>;
}>;


export type AuthorizedTargetsResponse = { authorizedTargets?: Maybe<{ totalCount?: Maybe<number>, list?: Maybe<Array<Maybe<{ targetType?: Maybe<PolicyAssignmentTargetType>, targetIdentifier?: Maybe<string>, actions?: Maybe<Array<string>> }>>> }> };

export type CheckLoginStatusVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;


export type CheckLoginStatusResponse = { checkLoginStatus?: Maybe<{ code?: Maybe<number>, message?: Maybe<string>, status?: Maybe<boolean>, exp?: Maybe<number>, iat?: Maybe<number>, data?: Maybe<{ id?: Maybe<string>, userPoolId?: Maybe<string>, arn?: Maybe<string> }> }> };

export type CheckPasswordStrengthVariables = Exact<{
  password: Scalars['String'];
}>;


export type CheckPasswordStrengthResponse = { checkPasswordStrength: { valid: boolean, message?: Maybe<string> } };

export type ChildrenNodesVariables = Exact<{
  nodeId: Scalars['String'];
}>;


export type ChildrenNodesResponse = { childrenNodes: Array<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> };

export type EmailTemplatesVariables = Exact<{ [key: string]: never; }>;


export type EmailTemplatesResponse = { emailTemplates: Array<{ type: EmailTemplateType, name: string, subject: string, sender: string, content: string, redirectTo?: Maybe<string>, hasURL?: Maybe<boolean>, expiresIn?: Maybe<number>, enabled?: Maybe<boolean>, isSystem?: Maybe<boolean> }> };

export type FindUserVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
}>;


export type FindUserResponse = { findUser?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type FindUserWithCustomDataVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
}>;


export type FindUserWithCustomDataResponse = { findUser?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> };

export type FunctionVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type FunctionResponse = { function?: Maybe<{ id: string, name: string, sourceCode: string, description?: Maybe<string>, url?: Maybe<string> }> };

export type FunctionsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type FunctionsResponse = { functions: { totalCount: number, list: Array<{ id: string, name: string, sourceCode: string, description?: Maybe<string>, url?: Maybe<string> }> } };

export type GetUserDepartmentsVariables = Exact<{
  id: Scalars['String'];
  orgId?: Maybe<Scalars['String']>;
}>;


export type GetUserDepartmentsResponse = { user?: Maybe<{ departments?: Maybe<{ totalCount: number, list: Array<{ isMainDepartment: boolean, joinedAt?: Maybe<string>, department: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, codePath: Array<Maybe<string>>, namePath: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> } }> }> }> };

export type GetUserGroupsVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserGroupsResponse = { user?: Maybe<{ groups?: Maybe<{ totalCount: number, list: Array<{ code: string, name: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> }> }> };

export type GetUserRolesVariables = Exact<{
  id: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type GetUserRolesResponse = { user?: Maybe<{ roles?: Maybe<{ totalCount: number, list: Array<{ code: string, namespace: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, parent?: Maybe<{ code: string, namespace: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> }> }> }> };

export type GroupVariables = Exact<{
  code: Scalars['String'];
}>;


export type GroupResponse = { group?: Maybe<{ code: string, name: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> };

export type GroupWithUsersVariables = Exact<{
  code: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GroupWithUsersResponse = { group?: Maybe<{ users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } }> };

export type GroupWithUsersWithCustomDataVariables = Exact<{
  code: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GroupWithUsersWithCustomDataResponse = { group?: Maybe<{ users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> } }> };

export type GroupsVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type GroupsResponse = { groups: { totalCount: number, list: Array<{ code: string, name: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> } };

export type IsActionAllowedVariables = Exact<{
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type IsActionAllowedResponse = { isActionAllowed: boolean };

export type IsActionDeniedVariables = Exact<{
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;


export type IsActionDeniedResponse = { isActionDenied: boolean };

export type IsDomainAvaliableVariables = Exact<{
  domain: Scalars['String'];
}>;


export type IsDomainAvaliableResponse = { isDomainAvaliable?: Maybe<boolean> };

export type IsRootNodeVariables = Exact<{
  nodeId: Scalars['String'];
  orgId: Scalars['String'];
}>;


export type IsRootNodeResponse = { isRootNode?: Maybe<boolean> };

export type IsUserExistsVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
}>;


export type IsUserExistsResponse = { isUserExists?: Maybe<boolean> };

export type AuthorizedResourcesVariables = Exact<{
  targetType?: Maybe<PolicyAssignmentTargetType>;
  targetIdentifier?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
}>;


export type AuthorizedResourcesResponse = { authorizedResources?: Maybe<{ totalCount: number, list: Array<{ code: string, type?: Maybe<ResourceType>, actions?: Maybe<Array<string>> }> }> };

export type ListGroupAuthorizedResourcesVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
}>;


export type ListGroupAuthorizedResourcesResponse = { group?: Maybe<{ authorizedResources?: Maybe<{ totalCount: number, list: Array<{ code: string, type?: Maybe<ResourceType>, actions?: Maybe<Array<string>> }> }> }> };

export type ListNodeByCodeAuthorizedResourcesVariables = Exact<{
  orgId: Scalars['String'];
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
}>;


export type ListNodeByCodeAuthorizedResourcesResponse = { nodeByCode?: Maybe<{ authorizedResources?: Maybe<{ totalCount: number, list: Array<{ code: string, type?: Maybe<ResourceType>, actions?: Maybe<Array<string>> }> }> }> };

export type ListNodeByIdAuthorizedResourcesVariables = Exact<{
  id: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
}>;


export type ListNodeByIdAuthorizedResourcesResponse = { nodeById?: Maybe<{ authorizedResources?: Maybe<{ totalCount: number, list: Array<{ code: string, type?: Maybe<ResourceType>, actions?: Maybe<Array<string>> }> }> }> };

export type ListRoleAuthorizedResourcesVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
}>;


export type ListRoleAuthorizedResourcesResponse = { role?: Maybe<{ authorizedResources?: Maybe<{ totalCount: number, list: Array<{ code: string, type?: Maybe<ResourceType>, actions?: Maybe<Array<string>> }> }> }> };

export type ListUserAuthorizedResourcesVariables = Exact<{
  id: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
}>;


export type ListUserAuthorizedResourcesResponse = { user?: Maybe<{ authorizedResources?: Maybe<{ totalCount: number, list: Array<{ code: string, type?: Maybe<ResourceType>, actions?: Maybe<Array<string>> }> }> }> };

export type NodeByCodeVariables = Exact<{
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;


export type NodeByCodeResponse = { nodeByCode?: Maybe<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> };

export type NodeByCodeWithMembersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;


export type NodeByCodeWithMembersResponse = { nodeByCode?: Maybe<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>>, users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } }> };

export type NodeByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type NodeByIdResponse = { nodeById?: Maybe<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> };

export type NodeByIdWithMembersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
}>;


export type NodeByIdWithMembersResponse = { nodeById?: Maybe<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>>, users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } }> };

export type OrgVariables = Exact<{
  id: Scalars['String'];
}>;


export type OrgResponse = { org: { id: string, rootNode: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }, nodes: Array<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> } };

export type OrgsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type OrgsResponse = { orgs: { totalCount: number, list: Array<{ id: string, rootNode: { id: string, name: string, nameI18n?: Maybe<string>, path: Array<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }, nodes: Array<{ id: string, name: string, path: Array<string>, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> }> } };

export type PoliciesVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  namespace?: Maybe<Scalars['String']>;
}>;


export type PoliciesResponse = { policies: { totalCount: number, list: Array<{ namespace: string, code: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, statements: Array<{ resource: string, actions: Array<string>, effect?: Maybe<PolicyEffect>, condition?: Maybe<Array<{ param: string, operator: string, value: any }>> }> }> } };

export type PolicyVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  code: Scalars['String'];
}>;


export type PolicyResponse = { policy?: Maybe<{ namespace: string, code: string, isDefault: boolean, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, statements: Array<{ resource: string, actions: Array<string>, effect?: Maybe<PolicyEffect>, condition?: Maybe<Array<{ param: string, operator: string, value: any }>> }> }> };

export type PolicyAssignmentsVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  targetType?: Maybe<PolicyAssignmentTargetType>;
  targetIdentifier?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type PolicyAssignmentsResponse = { policyAssignments: { totalCount: number, list: Array<{ code: string, targetType: PolicyAssignmentTargetType, targetIdentifier: string }> } };

export type PolicyWithAssignmentsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
}>;


export type PolicyWithAssignmentsResponse = { policy?: Maybe<{ code: string, isDefault: boolean, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, assignmentsCount: number, statements: Array<{ resource: string, actions: Array<string>, effect?: Maybe<PolicyEffect> }>, assignments: Array<{ code: string, targetType: PolicyAssignmentTargetType, targetIdentifier: string }> }> };

export type PreviewEmailVariables = Exact<{
  type: EmailTemplateType;
}>;


export type PreviewEmailResponse = { previewEmail: string };

export type QiniuUptokenVariables = Exact<{
  type?: Maybe<Scalars['String']>;
}>;


export type QiniuUptokenResponse = { qiniuUptoken?: Maybe<string> };

export type QueryMfaVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
}>;


export type QueryMfaResponse = { queryMfa?: Maybe<{ id: string, userId: string, userPoolId: string, enable: boolean, secret?: Maybe<string> }> };

export type RoleVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
}>;


export type RoleResponse = { role?: Maybe<{ id: string, namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, parent?: Maybe<{ namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> }> };

export type RoleWithUsersVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type RoleWithUsersResponse = { role?: Maybe<{ users: { totalCount: number, list: Array<{ id: string, arn: string, status?: Maybe<UserStatus>, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } }> };

export type RoleWithUsersWithCustomDataVariables = Exact<{
  code: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type RoleWithUsersWithCustomDataResponse = { role?: Maybe<{ users: { totalCount: number, list: Array<{ id: string, arn: string, status?: Maybe<UserStatus>, userPoolId: string, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> } }> };

export type RolesVariables = Exact<{
  namespace?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type RolesResponse = { roles: { totalCount: number, list: Array<{ id: string, namespace: string, code: string, arn: string, description?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string> }> } };

export type RootNodeVariables = Exact<{
  orgId: Scalars['String'];
}>;


export type RootNodeResponse = { rootNode: { id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, codePath: Array<Maybe<string>>, namePath: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> } };

export type SearchNodesVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type SearchNodesResponse = { searchNodes: Array<{ id: string, orgId?: Maybe<string>, name: string, nameI18n?: Maybe<string>, description?: Maybe<string>, descriptionI18n?: Maybe<string>, order?: Maybe<number>, code?: Maybe<string>, root?: Maybe<boolean>, depth?: Maybe<number>, path: Array<string>, codePath: Array<Maybe<string>>, namePath: Array<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, children?: Maybe<Array<string>> }> };

export type SearchUserVariables = Exact<{
  query: Scalars['String'];
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  departmentOpts?: Maybe<Array<Maybe<SearchUserDepartmentOpt>>>;
  groupOpts?: Maybe<Array<Maybe<SearchUserGroupOpt>>>;
  roleOpts?: Maybe<Array<Maybe<SearchUserRoleOpt>>>;
}>;


export type SearchUserResponse = { searchUser: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } };

export type SearchUserWithCustomDataVariables = Exact<{
  query: Scalars['String'];
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  departmentOpts?: Maybe<Array<Maybe<SearchUserDepartmentOpt>>>;
  groupOpts?: Maybe<Array<Maybe<SearchUserGroupOpt>>>;
  roleOpts?: Maybe<Array<Maybe<SearchUserRoleOpt>>>;
}>;


export type SearchUserWithCustomDataResponse = { searchUser: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> } };

export type SocialConnectionVariables = Exact<{
  provider: Scalars['String'];
}>;


export type SocialConnectionResponse = { socialConnection?: Maybe<{ provider: string, name: string, logo: string, description?: Maybe<string>, fields?: Maybe<Array<{ key?: Maybe<string>, label?: Maybe<string>, type?: Maybe<string>, placeholder?: Maybe<string> }>> }> };

export type SocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;


export type SocialConnectionInstanceResponse = { socialConnectionInstance: { provider: string, enabled: boolean, fields?: Maybe<Array<Maybe<{ key: string, value: string }>>> } };

export type SocialConnectionInstancesVariables = Exact<{ [key: string]: never; }>;


export type SocialConnectionInstancesResponse = { socialConnectionInstances: Array<{ provider: string, enabled: boolean, fields?: Maybe<Array<Maybe<{ key: string, value: string }>>> }> };

export type SocialConnectionsVariables = Exact<{ [key: string]: never; }>;


export type SocialConnectionsResponse = { socialConnections: Array<{ provider: string, name: string, logo: string, description?: Maybe<string>, fields?: Maybe<Array<{ key?: Maybe<string>, label?: Maybe<string>, type?: Maybe<string>, placeholder?: Maybe<string> }>> }> };

export type TemplateCodeVariables = Exact<{ [key: string]: never; }>;


export type TemplateCodeResponse = { templateCode: string };

export type UdfVariables = Exact<{
  targetType: UdfTargetType;
}>;


export type UdfResponse = { udf: Array<{ targetType: UdfTargetType, dataType: UdfDataType, key: string, label?: Maybe<string>, options?: Maybe<string> }> };

export type UdfValueBatchVariables = Exact<{
  targetType: UdfTargetType;
  targetIds: Array<Scalars['String']>;
}>;


export type UdfValueBatchResponse = { udfValueBatch: Array<{ targetId: string, data: Array<{ key: string, dataType: UdfDataType, value: string, label?: Maybe<string> }> }> };

export type UdvVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
}>;


export type UdvResponse = { udv: Array<{ key: string, dataType: UdfDataType, value: string, label?: Maybe<string> }> };

export type UserVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type UserResponse = { user?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, identities?: Maybe<Array<Maybe<{ openid?: Maybe<string>, userIdInIdp?: Maybe<string>, userId?: Maybe<string>, connectionId?: Maybe<string>, isSocial?: Maybe<boolean>, provider?: Maybe<string>, userPoolId?: Maybe<string> }>>> }> };

export type UserBatchVariables = Exact<{
  ids: Array<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}>;


export type UserBatchResponse = { userBatch: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> };

export type UserBatchWithCustomDataVariables = Exact<{
  ids: Array<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}>;


export type UserBatchWithCustomDataResponse = { userBatch: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> };

export type UserWithCustomDataVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type UserWithCustomDataResponse = { user?: Maybe<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, identities?: Maybe<Array<Maybe<{ openid?: Maybe<string>, userIdInIdp?: Maybe<string>, userId?: Maybe<string>, connectionId?: Maybe<string>, isSocial?: Maybe<boolean>, provider?: Maybe<string>, userPoolId?: Maybe<string> }>>>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> };

export type UserpoolVariables = Exact<{ [key: string]: never; }>;


export type UserpoolResponse = { userpool: { id: string, name: string, domain: string, description?: Maybe<string>, secret: string, jwtSecret: string, ownerId?: Maybe<string>, logo: string, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, emailVerifiedDefault: boolean, sendWelcomeEmail: boolean, registerDisabled: boolean, appSsoEnabled: boolean, showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>, allowedOrigins?: Maybe<string>, tokenExpiresAfter?: Maybe<number>, isDeleted?: Maybe<boolean>, loginFailStrategy?: Maybe<string>, packageType?: Maybe<number>, useCustomUserStore?: Maybe<boolean>, loginRequireEmailVerified?: Maybe<boolean>, verifyCodeLength?: Maybe<number>, userpoolTypes?: Maybe<Array<{ code?: Maybe<string>, name?: Maybe<string>, description?: Maybe<string>, image?: Maybe<string>, sdks?: Maybe<Array<Maybe<string>>> }>>, frequentRegisterCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, loginFailCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, loginPasswordFailCheck?: Maybe<{ timeInterval?: Maybe<number>, limit?: Maybe<number>, enabled?: Maybe<boolean> }>, changePhoneStrategy?: Maybe<{ verifyOldPhone?: Maybe<boolean> }>, changeEmailStrategy?: Maybe<{ verifyOldEmail?: Maybe<boolean> }>, qrcodeLoginStrategy?: Maybe<{ qrcodeExpiresAfter?: Maybe<number>, returnFullUserInfo?: Maybe<boolean>, allowExchangeUserInfoFromBrowser?: Maybe<boolean>, ticketExpiresAfter?: Maybe<number> }>, app2WxappLoginStrategy?: Maybe<{ ticketExpriresAfter?: Maybe<number>, ticketExchangeUserInfoNeedSecret?: Maybe<boolean> }>, whitelist?: Maybe<{ phoneEnabled?: Maybe<boolean>, emailEnabled?: Maybe<boolean>, usernameEnabled?: Maybe<boolean> }>, customSMSProvider?: Maybe<{ enabled?: Maybe<boolean>, provider?: Maybe<string>, config?: Maybe<string> }> } };

export type UserpoolTypesVariables = Exact<{ [key: string]: never; }>;


export type UserpoolTypesResponse = { userpoolTypes: Array<{ code?: Maybe<string>, name?: Maybe<string>, description?: Maybe<string>, image?: Maybe<string>, sdks?: Maybe<Array<Maybe<string>>> }> };

export type UserpoolsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type UserpoolsResponse = { userpools: { totalCount: number, list: Array<{ id: string, name: string, domain: string, ownerId?: Maybe<string>, description?: Maybe<string>, secret: string, jwtSecret: string, logo: string, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, emailVerifiedDefault: boolean, sendWelcomeEmail: boolean, registerDisabled: boolean, appSsoEnabled: boolean, showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>, allowedOrigins?: Maybe<string>, tokenExpiresAfter?: Maybe<number>, isDeleted?: Maybe<boolean>, packageType?: Maybe<number>, useCustomUserStore?: Maybe<boolean>, loginRequireEmailVerified?: Maybe<boolean>, verifyCodeLength?: Maybe<number> }> } };

export type UsersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type UsersResponse = { users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string> }> } };

export type UsersWithCustomDataVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;


export type UsersWithCustomDataResponse = { users: { totalCount: number, list: Array<{ id: string, arn: string, userPoolId: string, status?: Maybe<UserStatus>, username?: Maybe<string>, email?: Maybe<string>, emailVerified?: Maybe<boolean>, phone?: Maybe<string>, phoneVerified?: Maybe<boolean>, unionid?: Maybe<string>, openid?: Maybe<string>, nickname?: Maybe<string>, registerSource?: Maybe<Array<string>>, photo?: Maybe<string>, password?: Maybe<string>, oauth?: Maybe<string>, token?: Maybe<string>, tokenExpiredAt?: Maybe<string>, loginsCount?: Maybe<number>, lastLogin?: Maybe<string>, lastIP?: Maybe<string>, signedUp?: Maybe<string>, blocked?: Maybe<boolean>, isDeleted?: Maybe<boolean>, device?: Maybe<string>, browser?: Maybe<string>, company?: Maybe<string>, name?: Maybe<string>, givenName?: Maybe<string>, familyName?: Maybe<string>, middleName?: Maybe<string>, profile?: Maybe<string>, preferredUsername?: Maybe<string>, website?: Maybe<string>, gender?: Maybe<string>, birthdate?: Maybe<string>, zoneinfo?: Maybe<string>, locale?: Maybe<string>, address?: Maybe<string>, formatted?: Maybe<string>, streetAddress?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, postalCode?: Maybe<string>, city?: Maybe<string>, province?: Maybe<string>, country?: Maybe<string>, createdAt?: Maybe<string>, updatedAt?: Maybe<string>, externalId?: Maybe<string>, customData?: Maybe<Array<Maybe<{ key: string, value?: Maybe<string>, dataType: UdfDataType, label?: Maybe<string> }>>> }> } };

export type WhitelistVariables = Exact<{
  type: WhitelistType;
}>;


export type WhitelistResponse = { whitelist: Array<{ createdAt?: Maybe<string>, updatedAt?: Maybe<string>, value: string }> };


export const AddMemberDocument = `
    mutation addMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $nodeId: String, $orgId: String, $nodeCode: String, $userIds: [String!]!, $isLeader: Boolean) {
  addMember(nodeId: $nodeId, orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds, isLeader: $isLeader) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        arn
        userPoolId
        username
        status
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
      }
    }
  }
}
    `;
export const AddNodeDocument = `
    mutation addNode($orgId: String!, $parentNodeId: String, $name: String!, $nameI18n: String, $description: String, $descriptionI18n: String, $order: Int, $code: String) {
  addNode(orgId: $orgId, parentNodeId: $parentNodeId, name: $name, nameI18n: $nameI18n, description: $description, descriptionI18n: $descriptionI18n, order: $order, code: $code) {
    id
    rootNode {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const AddNodeV2Document = `
    mutation addNodeV2($orgId: String!, $parentNodeId: String, $name: String!, $nameI18n: String, $description: String, $descriptionI18n: String, $order: Int, $code: String) {
  addNodeV2(orgId: $orgId, parentNodeId: $parentNodeId, name: $name, nameI18n: $nameI18n, description: $description, descriptionI18n: $descriptionI18n, order: $order, code: $code) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
  }
}
    `;
export const AddPolicyAssignmentsDocument = `
    mutation addPolicyAssignments($policies: [String!]!, $targetType: PolicyAssignmentTargetType!, $targetIdentifiers: [String!], $inheritByChildren: Boolean, $namespace: String) {
  addPolicyAssignments(policies: $policies, targetType: $targetType, targetIdentifiers: $targetIdentifiers, inheritByChildren: $inheritByChildren, namespace: $namespace) {
    message
    code
  }
}
    `;
export const AddUserToGroupDocument = `
    mutation addUserToGroup($userIds: [String!]!, $code: String) {
  addUserToGroup(userIds: $userIds, code: $code) {
    message
    code
  }
}
    `;
export const AddWhitelistDocument = `
    mutation addWhitelist($type: WhitelistType!, $list: [String!]!) {
  addWhitelist(type: $type, list: $list) {
    createdAt
    updatedAt
    value
  }
}
    `;
export const AllowDocument = `
    mutation allow($resource: String!, $action: String!, $userId: String, $userIds: [String!], $roleCode: String, $roleCodes: [String!], $namespace: String) {
  allow(resource: $resource, action: $action, userId: $userId, userIds: $userIds, roleCode: $roleCode, roleCodes: $roleCodes, namespace: $namespace) {
    message
    code
  }
}
    `;
export const AssignRoleDocument = `
    mutation assignRole($namespace: String, $roleCode: String, $roleCodes: [String], $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {
  assignRole(namespace: $namespace, roleCode: $roleCode, roleCodes: $roleCodes, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {
    message
    code
  }
}
    `;
export const AuthorizeResourceDocument = `
    mutation authorizeResource($namespace: String, $resource: String, $resourceType: ResourceType, $opts: [AuthorizeResourceOpt]) {
  authorizeResource(namespace: $namespace, resource: $resource, resourceType: $resourceType, opts: $opts) {
    code
    message
  }
}
    `;
export const BindEmailDocument = `
    mutation bindEmail($email: String!, $emailCode: String!) {
  bindEmail(email: $email, emailCode: $emailCode) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const BindPhoneDocument = `
    mutation bindPhone($phone: String!, $phoneCode: String!) {
  bindPhone(phone: $phone, phoneCode: $phoneCode) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const ChangeMfaDocument = `
    mutation changeMfa($enable: Boolean, $id: String, $userId: String, $userPoolId: String, $refresh: Boolean) {
  changeMfa(enable: $enable, id: $id, userId: $userId, userPoolId: $userPoolId, refresh: $refresh) {
    id
    userId
    userPoolId
    enable
    secret
  }
}
    `;
export const ConfigEmailTemplateDocument = `
    mutation configEmailTemplate($input: ConfigEmailTemplateInput!) {
  configEmailTemplate(input: $input) {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const CreateFunctionDocument = `
    mutation createFunction($input: CreateFunctionInput!) {
  createFunction(input: $input) {
    id
    name
    sourceCode
    description
    url
  }
}
    `;
export const CreateGroupDocument = `
    mutation createGroup($code: String!, $name: String!, $description: String) {
  createGroup(code: $code, name: $name, description: $description) {
    code
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export const CreateOrgDocument = `
    mutation createOrg($name: String!, $code: String, $description: String) {
  createOrg(name: $name, code: $code, description: $description) {
    id
    rootNode {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const CreatePolicyDocument = `
    mutation createPolicy($namespace: String, $code: String!, $description: String, $statements: [PolicyStatementInput!]!) {
  createPolicy(namespace: $namespace, code: $code, description: $description, statements: $statements) {
    namespace
    code
    isDefault
    description
    statements {
      resource
      actions
      effect
      condition {
        param
        operator
        value
      }
    }
    createdAt
    updatedAt
    assignmentsCount
  }
}
    `;
export const CreateRoleDocument = `
    mutation createRole($namespace: String, $code: String!, $description: String, $parent: String) {
  createRole(namespace: $namespace, code: $code, description: $description, parent: $parent) {
    id
    namespace
    code
    arn
    description
    createdAt
    updatedAt
    parent {
      namespace
      code
      arn
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const CreateSocialConnectionInstanceDocument = `
    mutation createSocialConnectionInstance($input: CreateSocialConnectionInstanceInput!) {
  createSocialConnectionInstance(input: $input) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const CreateUserDocument = `
    mutation createUser($userInfo: CreateUserInput!, $keepPassword: Boolean, $resetPasswordOnFirstLogin: Boolean) {
  createUser(userInfo: $userInfo, keepPassword: $keepPassword, resetPasswordOnFirstLogin: $resetPasswordOnFirstLogin) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const CreateUserWithCustomDataDocument = `
    mutation createUserWithCustomData($userInfo: CreateUserInput!, $keepPassword: Boolean, $params: String) {
  createUser(userInfo: $userInfo, keepPassword: $keepPassword, params: $params) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
    customData {
      key
      value
      dataType
      label
    }
  }
}
    `;
export const CreateUserpoolDocument = `
    mutation createUserpool($name: String!, $domain: String!, $description: String, $logo: String, $userpoolTypes: [String!]) {
  createUserpool(name: $name, domain: $domain, description: $description, logo: $logo, userpoolTypes: $userpoolTypes) {
    id
    name
    domain
    description
    secret
    jwtSecret
    userpoolTypes {
      code
      name
      description
      image
      sdks
    }
    logo
    createdAt
    updatedAt
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    appSsoEnabled
    showWxQRCodeWhenRegisterDisabled
    allowedOrigins
    tokenExpiresAfter
    isDeleted
    frequentRegisterCheck {
      timeInterval
      limit
      enabled
    }
    loginFailCheck {
      timeInterval
      limit
      enabled
    }
    changePhoneStrategy {
      verifyOldPhone
    }
    changeEmailStrategy {
      verifyOldEmail
    }
    qrcodeLoginStrategy {
      qrcodeExpiresAfter
      returnFullUserInfo
      allowExchangeUserInfoFromBrowser
      ticketExpiresAfter
    }
    app2WxappLoginStrategy {
      ticketExpriresAfter
      ticketExchangeUserInfoNeedSecret
    }
    whitelist {
      phoneEnabled
      emailEnabled
      usernameEnabled
    }
    customSMSProvider {
      enabled
      provider
    }
    packageType
  }
}
    `;
export const DeleteFunctionDocument = `
    mutation deleteFunction($id: String!) {
  deleteFunction(id: $id) {
    message
    code
  }
}
    `;
export const DeleteGroupsDocument = `
    mutation deleteGroups($codeList: [String!]!) {
  deleteGroups(codeList: $codeList) {
    message
    code
  }
}
    `;
export const DeleteNodeDocument = `
    mutation deleteNode($orgId: String!, $nodeId: String!) {
  deleteNode(orgId: $orgId, nodeId: $nodeId) {
    message
    code
  }
}
    `;
export const DeleteOrgDocument = `
    mutation deleteOrg($id: String!) {
  deleteOrg(id: $id) {
    message
    code
  }
}
    `;
export const DeletePoliciesDocument = `
    mutation deletePolicies($codeList: [String!]!, $namespace: String) {
  deletePolicies(codeList: $codeList, namespace: $namespace) {
    message
    code
  }
}
    `;
export const DeletePolicyDocument = `
    mutation deletePolicy($code: String!, $namespace: String) {
  deletePolicy(code: $code, namespace: $namespace) {
    message
    code
  }
}
    `;
export const DeleteRoleDocument = `
    mutation deleteRole($code: String!, $namespace: String) {
  deleteRole(code: $code, namespace: $namespace) {
    message
    code
  }
}
    `;
export const DeleteRolesDocument = `
    mutation deleteRoles($codeList: [String!]!, $namespace: String) {
  deleteRoles(codeList: $codeList, namespace: $namespace) {
    message
    code
  }
}
    `;
export const DeleteUserDocument = `
    mutation deleteUser($id: String!) {
  deleteUser(id: $id) {
    message
    code
  }
}
    `;
export const DeleteUserpoolDocument = `
    mutation deleteUserpool {
  deleteUserpool {
    message
    code
  }
}
    `;
export const DeleteUsersDocument = `
    mutation deleteUsers($ids: [String!]!) {
  deleteUsers(ids: $ids) {
    message
    code
  }
}
    `;
export const DisableEmailTemplateDocument = `
    mutation disableEmailTemplate($type: EmailTemplateType!) {
  disableEmailTemplate(type: $type) {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const DisableSocialConnectionInstanceDocument = `
    mutation disableSocialConnectionInstance($provider: String!) {
  disableSocialConnectionInstance(provider: $provider) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const DisbalePolicyAssignmentDocument = `
    mutation disbalePolicyAssignment($policy: String!, $targetType: PolicyAssignmentTargetType!, $targetIdentifier: String!, $namespace: String) {
  disbalePolicyAssignment(policy: $policy, targetType: $targetType, targetIdentifier: $targetIdentifier, namespace: $namespace) {
    message
    code
  }
}
    `;
export const EnableEmailTemplateDocument = `
    mutation enableEmailTemplate($type: EmailTemplateType!) {
  enableEmailTemplate(type: $type) {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const EnablePolicyAssignmentDocument = `
    mutation enablePolicyAssignment($policy: String!, $targetType: PolicyAssignmentTargetType!, $targetIdentifier: String!, $namespace: String) {
  enablePolicyAssignment(policy: $policy, targetType: $targetType, targetIdentifier: $targetIdentifier, namespace: $namespace) {
    message
    code
  }
}
    `;
export const EnableSocialConnectionInstanceDocument = `
    mutation enableSocialConnectionInstance($provider: String!) {
  enableSocialConnectionInstance(provider: $provider) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const LoginByEmailDocument = `
    mutation loginByEmail($input: LoginByEmailInput!) {
  loginByEmail(input: $input) {
    id
    arn
    status
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const LoginByPhoneCodeDocument = `
    mutation loginByPhoneCode($input: LoginByPhoneCodeInput!) {
  loginByPhoneCode(input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const LoginByPhonePasswordDocument = `
    mutation loginByPhonePassword($input: LoginByPhonePasswordInput!) {
  loginByPhonePassword(input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const LoginBySubAccountDocument = `
    mutation loginBySubAccount($account: String!, $password: String!, $captchaCode: String, $clientIp: String) {
  loginBySubAccount(account: $account, password: $password, captchaCode: $captchaCode, clientIp: $clientIp) {
    id
    arn
    status
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const LoginByUsernameDocument = `
    mutation loginByUsername($input: LoginByUsernameInput!) {
  loginByUsername(input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const MoveMembersDocument = `
    mutation moveMembers($userIds: [String!]!, $sourceNodeId: String!, $targetNodeId: String!) {
  moveMembers(userIds: $userIds, sourceNodeId: $sourceNodeId, targetNodeId: $targetNodeId) {
    code
    message
  }
}
    `;
export const MoveNodeDocument = `
    mutation moveNode($orgId: String!, $nodeId: String!, $targetParentId: String!) {
  moveNode(orgId: $orgId, nodeId: $nodeId, targetParentId: $targetParentId) {
    id
    rootNode {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const RefreshAccessTokenDocument = `
    mutation refreshAccessToken($accessToken: String) {
  refreshAccessToken(accessToken: $accessToken) {
    accessToken
    exp
    iat
  }
}
    `;
export const RefreshTokenDocument = `
    mutation refreshToken($id: String) {
  refreshToken(id: $id) {
    token
    iat
    exp
  }
}
    `;
export const RefreshUserpoolSecretDocument = `
    mutation refreshUserpoolSecret {
  refreshUserpoolSecret
}
    `;
export const RegisterByEmailDocument = `
    mutation registerByEmail($input: RegisterByEmailInput!) {
  registerByEmail(input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const RegisterByPhoneCodeDocument = `
    mutation registerByPhoneCode($input: RegisterByPhoneCodeInput!) {
  registerByPhoneCode(input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const RegisterByUsernameDocument = `
    mutation registerByUsername($input: RegisterByUsernameInput!) {
  registerByUsername(input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const RemoveMemberDocument = `
    mutation removeMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $nodeId: String, $orgId: String, $nodeCode: String, $userIds: [String!]!) {
  removeMember(nodeId: $nodeId, orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds) {
    id
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        arn
        userPoolId
        status
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
      }
    }
  }
}
    `;
export const RemovePolicyAssignmentsDocument = `
    mutation removePolicyAssignments($policies: [String!]!, $targetType: PolicyAssignmentTargetType!, $targetIdentifiers: [String!], $namespace: String) {
  removePolicyAssignments(policies: $policies, targetType: $targetType, targetIdentifiers: $targetIdentifiers, namespace: $namespace) {
    message
    code
  }
}
    `;
export const RemoveUdfDocument = `
    mutation removeUdf($targetType: UDFTargetType!, $key: String!) {
  removeUdf(targetType: $targetType, key: $key) {
    message
    code
  }
}
    `;
export const RemoveUdvDocument = `
    mutation removeUdv($targetType: UDFTargetType!, $targetId: String!, $key: String!) {
  removeUdv(targetType: $targetType, targetId: $targetId, key: $key) {
    key
    dataType
    value
    label
  }
}
    `;
export const RemoveUserFromGroupDocument = `
    mutation removeUserFromGroup($userIds: [String!]!, $code: String) {
  removeUserFromGroup(userIds: $userIds, code: $code) {
    message
    code
  }
}
    `;
export const RemoveWhitelistDocument = `
    mutation removeWhitelist($type: WhitelistType!, $list: [String!]!) {
  removeWhitelist(type: $type, list: $list) {
    createdAt
    updatedAt
    value
  }
}
    `;
export const ResetPasswordDocument = `
    mutation resetPassword($phone: String, $email: String, $code: String!, $newPassword: String!) {
  resetPassword(phone: $phone, email: $email, code: $code, newPassword: $newPassword) {
    message
    code
  }
}
    `;
export const ResetPasswordByFirstLoginTokenDocument = `
    mutation resetPasswordByFirstLoginToken($token: String!, $password: String!) {
  resetPasswordByFirstLoginToken(token: $token, password: $password) {
    message
    code
  }
}
    `;
export const RevokeRoleDocument = `
    mutation revokeRole($namespace: String, $roleCode: String, $roleCodes: [String], $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {
  revokeRole(namespace: $namespace, roleCode: $roleCode, roleCodes: $roleCodes, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {
    message
    code
  }
}
    `;
export const SendEmailDocument = `
    mutation sendEmail($email: String!, $scene: EmailScene!) {
  sendEmail(email: $email, scene: $scene) {
    message
    code
  }
}
    `;
export const SendFirstLoginVerifyEmailDocument = `
    mutation sendFirstLoginVerifyEmail($userId: String!, $appId: String!) {
  sendFirstLoginVerifyEmail(userId: $userId, appId: $appId) {
    message
    code
  }
}
    `;
export const SetMainDepartmentDocument = `
    mutation setMainDepartment($userId: String!, $departmentId: String) {
  setMainDepartment(userId: $userId, departmentId: $departmentId) {
    message
    code
  }
}
    `;
export const SetUdfDocument = `
    mutation setUdf($targetType: UDFTargetType!, $key: String!, $dataType: UDFDataType!, $label: String!, $options: String) {
  setUdf(targetType: $targetType, key: $key, dataType: $dataType, label: $label, options: $options) {
    targetType
    dataType
    key
    label
    options
  }
}
    `;
export const SetUdfValueBatchDocument = `
    mutation setUdfValueBatch($targetType: UDFTargetType!, $input: [SetUdfValueBatchInput!]!) {
  setUdfValueBatch(targetType: $targetType, input: $input) {
    code
    message
  }
}
    `;
export const SetUdvDocument = `
    mutation setUdv($targetType: UDFTargetType!, $targetId: String!, $key: String!, $value: String!) {
  setUdv(targetType: $targetType, targetId: $targetId, key: $key, value: $value) {
    key
    dataType
    value
    label
  }
}
    `;
export const SetUdvBatchDocument = `
    mutation setUdvBatch($targetType: UDFTargetType!, $targetId: String!, $udvList: [UserDefinedDataInput!]) {
  setUdvBatch(targetType: $targetType, targetId: $targetId, udvList: $udvList) {
    key
    dataType
    value
    label
  }
}
    `;
export const UnbindEmailDocument = `
    mutation unbindEmail {
  unbindEmail {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const UnbindPhoneDocument = `
    mutation unbindPhone {
  unbindPhone {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const UpdateEmailDocument = `
    mutation updateEmail($email: String!, $emailCode: String!, $oldEmail: String, $oldEmailCode: String) {
  updateEmail(email: $email, emailCode: $emailCode, oldEmail: $oldEmail, oldEmailCode: $oldEmailCode) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const UpdateFunctionDocument = `
    mutation updateFunction($input: UpdateFunctionInput!) {
  updateFunction(input: $input) {
    id
    name
    sourceCode
    description
    url
  }
}
    `;
export const UpdateGroupDocument = `
    mutation updateGroup($code: String!, $name: String, $description: String, $newCode: String) {
  updateGroup(code: $code, name: $name, description: $description, newCode: $newCode) {
    code
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export const UpdateNodeDocument = `
    mutation updateNode($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $id: String!, $name: String, $code: String, $description: String) {
  updateNode(id: $id, name: $name, code: $code, description: $description) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
    }
  }
}
    `;
export const UpdatePasswordDocument = `
    mutation updatePassword($newPassword: String!, $oldPassword: String) {
  updatePassword(newPassword: $newPassword, oldPassword: $oldPassword) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const UpdatePhoneDocument = `
    mutation updatePhone($phone: String!, $phoneCode: String!, $oldPhone: String, $oldPhoneCode: String) {
  updatePhone(phone: $phone, phoneCode: $phoneCode, oldPhone: $oldPhone, oldPhoneCode: $oldPhoneCode) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
  }
}
    `;
export const UpdatePolicyDocument = `
    mutation updatePolicy($namespace: String, $code: String!, $description: String, $statements: [PolicyStatementInput!], $newCode: String) {
  updatePolicy(namespace: $namespace, code: $code, description: $description, statements: $statements, newCode: $newCode) {
    namespace
    code
    description
    statements {
      resource
      actions
      effect
      condition {
        param
        operator
        value
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const UpdateRoleDocument = `
    mutation updateRole($code: String!, $description: String, $newCode: String, $namespace: String) {
  updateRole(code: $code, description: $description, newCode: $newCode, namespace: $namespace) {
    id
    namespace
    code
    arn
    description
    createdAt
    updatedAt
    parent {
      namespace
      code
      arn
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const UpdateUserDocument = `
    mutation updateUser($id: String, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const UpdateUserpoolDocument = `
    mutation updateUserpool($input: UpdateUserpoolInput!) {
  updateUserpool(input: $input) {
    id
    name
    domain
    description
    secret
    jwtSecret
    userpoolTypes {
      code
      name
      description
      image
      sdks
    }
    logo
    createdAt
    updatedAt
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    appSsoEnabled
    showWxQRCodeWhenRegisterDisabled
    allowedOrigins
    tokenExpiresAfter
    isDeleted
    frequentRegisterCheck {
      timeInterval
      limit
      enabled
    }
    loginFailCheck {
      timeInterval
      limit
      enabled
    }
    loginFailStrategy
    loginPasswordFailCheck {
      timeInterval
      limit
      enabled
    }
    changePhoneStrategy {
      verifyOldPhone
    }
    changeEmailStrategy {
      verifyOldEmail
    }
    qrcodeLoginStrategy {
      qrcodeExpiresAfter
      returnFullUserInfo
      allowExchangeUserInfoFromBrowser
      ticketExpiresAfter
    }
    app2WxappLoginStrategy {
      ticketExpriresAfter
      ticketExchangeUserInfoNeedSecret
    }
    whitelist {
      phoneEnabled
      emailEnabled
      usernameEnabled
    }
    customSMSProvider {
      enabled
      provider
      config
    }
    packageType
    useCustomUserStore
    loginRequireEmailVerified
    verifyCodeLength
  }
}
    `;
export const AccessTokenDocument = `
    query accessToken($userPoolId: String!, $secret: String!) {
  accessToken(userPoolId: $userPoolId, secret: $secret) {
    accessToken
    exp
    iat
  }
}
    `;
export const ArchivedUsersDocument = `
    query archivedUsers($page: Int, $limit: Int) {
  archivedUsers(page: $page, limit: $limit) {
    totalCount
    list {
      id
      arn
      status
      userPoolId
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      city
      province
      country
      createdAt
      updatedAt
      externalId
    }
  }
}
    `;
export const AuthorizedTargetsDocument = `
    query authorizedTargets($namespace: String!, $resourceType: ResourceType!, $resource: String!, $targetType: PolicyAssignmentTargetType, $actions: AuthorizedTargetsActionsInput) {
  authorizedTargets(namespace: $namespace, resource: $resource, resourceType: $resourceType, targetType: $targetType, actions: $actions) {
    totalCount
    list {
      targetType
      targetIdentifier
      actions
    }
  }
}
    `;
export const CheckLoginStatusDocument = `
    query checkLoginStatus($token: String) {
  checkLoginStatus(token: $token) {
    code
    message
    status
    exp
    iat
    data {
      id
      userPoolId
      arn
    }
  }
}
    `;
export const CheckPasswordStrengthDocument = `
    query checkPasswordStrength($password: String!) {
  checkPasswordStrength(password: $password) {
    valid
    message
  }
}
    `;
export const ChildrenNodesDocument = `
    query childrenNodes($nodeId: String!) {
  childrenNodes(nodeId: $nodeId) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
  }
}
    `;
export const EmailTemplatesDocument = `
    query emailTemplates {
  emailTemplates {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const FindUserDocument = `
    query findUser($email: String, $phone: String, $username: String, $externalId: String) {
  findUser(email: $email, phone: $phone, username: $username, externalId: $externalId) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const FindUserWithCustomDataDocument = `
    query findUserWithCustomData($email: String, $phone: String, $username: String, $externalId: String) {
  findUser(email: $email, phone: $phone, username: $username, externalId: $externalId) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
    customData {
      key
      value
      dataType
      label
    }
  }
}
    `;
export const FunctionDocument = `
    query function($id: String) {
  function(id: $id) {
    id
    name
    sourceCode
    description
    url
  }
}
    `;
export const FunctionsDocument = `
    query functions($page: Int, $limit: Int, $sortBy: SortByEnum) {
  functions(page: $page, limit: $limit, sortBy: $sortBy) {
    list {
      id
      name
      sourceCode
      description
      url
    }
    totalCount
  }
}
    `;
export const GetUserDepartmentsDocument = `
    query getUserDepartments($id: String!, $orgId: String) {
  user(id: $id) {
    departments(orgId: $orgId) {
      totalCount
      list {
        department {
          id
          orgId
          name
          nameI18n
          description
          descriptionI18n
          order
          code
          root
          depth
          path
          codePath
          namePath
          createdAt
          updatedAt
          children
        }
        isMainDepartment
        joinedAt
      }
    }
  }
}
    `;
export const GetUserGroupsDocument = `
    query getUserGroups($id: String!) {
  user(id: $id) {
    groups {
      totalCount
      list {
        code
        name
        description
        createdAt
        updatedAt
      }
    }
  }
}
    `;
export const GetUserRolesDocument = `
    query getUserRoles($id: String!, $namespace: String) {
  user(id: $id) {
    roles(namespace: $namespace) {
      totalCount
      list {
        code
        namespace
        arn
        description
        createdAt
        updatedAt
        parent {
          code
          namespace
          arn
          description
          createdAt
          updatedAt
        }
      }
    }
  }
}
    `;
export const GroupDocument = `
    query group($code: String!) {
  group(code: $code) {
    code
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export const GroupWithUsersDocument = `
    query groupWithUsers($code: String!, $page: Int, $limit: Int) {
  group(code: $code) {
    users(page: $page, limit: $limit) {
      totalCount
      list {
        id
        arn
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
      }
    }
  }
}
    `;
export const GroupWithUsersWithCustomDataDocument = `
    query groupWithUsersWithCustomData($code: String!, $page: Int, $limit: Int) {
  group(code: $code) {
    users(page: $page, limit: $limit) {
      totalCount
      list {
        id
        arn
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
        customData {
          key
          value
          dataType
          label
        }
      }
    }
  }
}
    `;
export const GroupsDocument = `
    query groups($userId: String, $page: Int, $limit: Int, $sortBy: SortByEnum) {
  groups(userId: $userId, page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      code
      name
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const IsActionAllowedDocument = `
    query isActionAllowed($resource: String!, $action: String!, $userId: String!, $namespace: String) {
  isActionAllowed(resource: $resource, action: $action, userId: $userId, namespace: $namespace)
}
    `;
export const IsActionDeniedDocument = `
    query isActionDenied($resource: String!, $action: String!, $userId: String!) {
  isActionDenied(resource: $resource, action: $action, userId: $userId)
}
    `;
export const IsDomainAvaliableDocument = `
    query isDomainAvaliable($domain: String!) {
  isDomainAvaliable(domain: $domain)
}
    `;
export const IsRootNodeDocument = `
    query isRootNode($nodeId: String!, $orgId: String!) {
  isRootNode(nodeId: $nodeId, orgId: $orgId)
}
    `;
export const IsUserExistsDocument = `
    query isUserExists($email: String, $phone: String, $username: String, $externalId: String) {
  isUserExists(email: $email, phone: $phone, username: $username, externalId: $externalId)
}
    `;
export const AuthorizedResourcesDocument = `
    query authorizedResources($targetType: PolicyAssignmentTargetType, $targetIdentifier: String, $namespace: String, $resourceType: String) {
  authorizedResources(targetType: $targetType, targetIdentifier: $targetIdentifier, namespace: $namespace, resourceType: $resourceType) {
    totalCount
    list {
      code
      type
      actions
    }
  }
}
    `;
export const ListGroupAuthorizedResourcesDocument = `
    query listGroupAuthorizedResources($code: String!, $namespace: String, $resourceType: String) {
  group(code: $code) {
    authorizedResources(namespace: $namespace, resourceType: $resourceType) {
      totalCount
      list {
        code
        type
        actions
      }
    }
  }
}
    `;
export const ListNodeByCodeAuthorizedResourcesDocument = `
    query listNodeByCodeAuthorizedResources($orgId: String!, $code: String!, $namespace: String, $resourceType: String) {
  nodeByCode(orgId: $orgId, code: $code) {
    authorizedResources(namespace: $namespace, resourceType: $resourceType) {
      totalCount
      list {
        code
        type
        actions
      }
    }
  }
}
    `;
export const ListNodeByIdAuthorizedResourcesDocument = `
    query listNodeByIdAuthorizedResources($id: String!, $namespace: String, $resourceType: String) {
  nodeById(id: $id) {
    authorizedResources(namespace: $namespace, resourceType: $resourceType) {
      totalCount
      list {
        code
        type
        actions
      }
    }
  }
}
    `;
export const ListRoleAuthorizedResourcesDocument = `
    query listRoleAuthorizedResources($code: String!, $namespace: String, $resourceType: String) {
  role(code: $code, namespace: $namespace) {
    authorizedResources(resourceType: $resourceType) {
      totalCount
      list {
        code
        type
        actions
      }
    }
  }
}
    `;
export const ListUserAuthorizedResourcesDocument = `
    query listUserAuthorizedResources($id: String!, $namespace: String, $resourceType: String) {
  user(id: $id) {
    authorizedResources(namespace: $namespace, resourceType: $resourceType) {
      totalCount
      list {
        code
        type
        actions
      }
    }
  }
}
    `;
export const NodeByCodeDocument = `
    query nodeByCode($orgId: String!, $code: String!) {
  nodeByCode(orgId: $orgId, code: $code) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
  }
}
    `;
export const NodeByCodeWithMembersDocument = `
    query nodeByCodeWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $orgId: String!, $code: String!) {
  nodeByCode(orgId: $orgId, code: $code) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        arn
        userPoolId
        status
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
      }
    }
  }
}
    `;
export const NodeByIdDocument = `
    query nodeById($id: String!) {
  nodeById(id: $id) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
  }
}
    `;
export const NodeByIdWithMembersDocument = `
    query nodeByIdWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $id: String!) {
  nodeById(id: $id) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        arn
        userPoolId
        status
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
      }
    }
  }
}
    `;
export const OrgDocument = `
    query org($id: String!) {
  org(id: $id) {
    id
    rootNode {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      orgId
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const OrgsDocument = `
    query orgs($page: Int, $limit: Int, $sortBy: SortByEnum) {
  orgs(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      rootNode {
        id
        name
        nameI18n
        path
        description
        descriptionI18n
        order
        code
        root
        depth
        createdAt
        updatedAt
        children
      }
      nodes {
        id
        name
        path
        nameI18n
        description
        descriptionI18n
        order
        code
        root
        depth
        createdAt
        updatedAt
        children
      }
    }
  }
}
    `;
export const PoliciesDocument = `
    query policies($page: Int, $limit: Int, $namespace: String) {
  policies(page: $page, limit: $limit, namespace: $namespace) {
    totalCount
    list {
      namespace
      code
      description
      createdAt
      updatedAt
      statements {
        resource
        actions
        effect
        condition {
          param
          operator
          value
        }
      }
    }
  }
}
    `;
export const PolicyDocument = `
    query policy($namespace: String, $code: String!) {
  policy(code: $code, namespace: $namespace) {
    namespace
    code
    isDefault
    description
    statements {
      resource
      actions
      effect
      condition {
        param
        operator
        value
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const PolicyAssignmentsDocument = `
    query policyAssignments($namespace: String, $code: String, $targetType: PolicyAssignmentTargetType, $targetIdentifier: String, $page: Int, $limit: Int) {
  policyAssignments(namespace: $namespace, code: $code, targetType: $targetType, targetIdentifier: $targetIdentifier, page: $page, limit: $limit) {
    totalCount
    list {
      code
      targetType
      targetIdentifier
    }
  }
}
    `;
export const PolicyWithAssignmentsDocument = `
    query policyWithAssignments($page: Int, $limit: Int, $code: String!) {
  policy(code: $code) {
    code
    isDefault
    description
    statements {
      resource
      actions
      effect
    }
    createdAt
    updatedAt
    assignmentsCount
    assignments(page: $page, limit: $limit) {
      code
      targetType
      targetIdentifier
    }
  }
}
    `;
export const PreviewEmailDocument = `
    query previewEmail($type: EmailTemplateType!) {
  previewEmail(type: $type)
}
    `;
export const QiniuUptokenDocument = `
    query qiniuUptoken($type: String) {
  qiniuUptoken(type: $type)
}
    `;
export const QueryMfaDocument = `
    query queryMfa($id: String, $userId: String, $userPoolId: String) {
  queryMfa(id: $id, userId: $userId, userPoolId: $userPoolId) {
    id
    userId
    userPoolId
    enable
    secret
  }
}
    `;
export const RoleDocument = `
    query role($code: String!, $namespace: String) {
  role(code: $code, namespace: $namespace) {
    id
    namespace
    code
    arn
    description
    createdAt
    updatedAt
    parent {
      namespace
      code
      arn
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const RoleWithUsersDocument = `
    query roleWithUsers($code: String!, $namespace: String, $page: Int, $limit: Int) {
  role(code: $code, namespace: $namespace) {
    users(page: $page, limit: $limit) {
      totalCount
      list {
        id
        arn
        status
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
      }
    }
  }
}
    `;
export const RoleWithUsersWithCustomDataDocument = `
    query roleWithUsersWithCustomData($code: String!, $namespace: String, $page: Int, $limit: Int) {
  role(code: $code, namespace: $namespace) {
    users(page: $page, limit: $limit) {
      totalCount
      list {
        id
        arn
        status
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        city
        province
        country
        createdAt
        updatedAt
        externalId
        customData {
          key
          value
          dataType
          label
        }
      }
    }
  }
}
    `;
export const RolesDocument = `
    query roles($namespace: String, $page: Int, $limit: Int, $sortBy: SortByEnum) {
  roles(namespace: $namespace, page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      namespace
      code
      arn
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const RootNodeDocument = `
    query rootNode($orgId: String!) {
  rootNode(orgId: $orgId) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    codePath
    namePath
    createdAt
    updatedAt
    children
  }
}
    `;
export const SearchNodesDocument = `
    query searchNodes($keyword: String!) {
  searchNodes(keyword: $keyword) {
    id
    orgId
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    codePath
    namePath
    createdAt
    updatedAt
    children
  }
}
    `;
export const SearchUserDocument = `
    query searchUser($query: String!, $fields: [String], $page: Int, $limit: Int, $departmentOpts: [SearchUserDepartmentOpt], $groupOpts: [SearchUserGroupOpt], $roleOpts: [SearchUserRoleOpt]) {
  searchUser(query: $query, fields: $fields, page: $page, limit: $limit, departmentOpts: $departmentOpts, groupOpts: $groupOpts, roleOpts: $roleOpts) {
    totalCount
    list {
      id
      arn
      userPoolId
      status
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      city
      province
      country
      createdAt
      updatedAt
      externalId
    }
  }
}
    `;
export const SearchUserWithCustomDataDocument = `
    query searchUserWithCustomData($query: String!, $fields: [String], $page: Int, $limit: Int, $departmentOpts: [SearchUserDepartmentOpt], $groupOpts: [SearchUserGroupOpt], $roleOpts: [SearchUserRoleOpt]) {
  searchUser(query: $query, fields: $fields, page: $page, limit: $limit, departmentOpts: $departmentOpts, groupOpts: $groupOpts, roleOpts: $roleOpts) {
    totalCount
    list {
      id
      arn
      userPoolId
      status
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      city
      province
      country
      createdAt
      updatedAt
      externalId
      customData {
        key
        value
        dataType
        label
      }
    }
  }
}
    `;
export const SocialConnectionDocument = `
    query socialConnection($provider: String!) {
  socialConnection(provider: $provider) {
    provider
    name
    logo
    description
    fields {
      key
      label
      type
      placeholder
    }
  }
}
    `;
export const SocialConnectionInstanceDocument = `
    query socialConnectionInstance($provider: String!) {
  socialConnectionInstance(provider: $provider) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const SocialConnectionInstancesDocument = `
    query socialConnectionInstances {
  socialConnectionInstances {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const SocialConnectionsDocument = `
    query socialConnections {
  socialConnections {
    provider
    name
    logo
    description
    fields {
      key
      label
      type
      placeholder
    }
  }
}
    `;
export const TemplateCodeDocument = `
    query templateCode {
  templateCode
}
    `;
export const UdfDocument = `
    query udf($targetType: UDFTargetType!) {
  udf(targetType: $targetType) {
    targetType
    dataType
    key
    label
    options
  }
}
    `;
export const UdfValueBatchDocument = `
    query udfValueBatch($targetType: UDFTargetType!, $targetIds: [String!]!) {
  udfValueBatch(targetType: $targetType, targetIds: $targetIds) {
    targetId
    data {
      key
      dataType
      value
      label
    }
  }
}
    `;
export const UdvDocument = `
    query udv($targetType: UDFTargetType!, $targetId: String!) {
  udv(targetType: $targetType, targetId: $targetId) {
    key
    dataType
    value
    label
  }
}
    `;
export const UserDocument = `
    query user($id: String) {
  user(id: $id) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const UserBatchDocument = `
    query userBatch($ids: [String!]!, $type: String) {
  userBatch(ids: $ids, type: $type) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
  }
}
    `;
export const UserBatchWithCustomDataDocument = `
    query userBatchWithCustomData($ids: [String!]!, $type: String) {
  userBatch(ids: $ids, type: $type) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
    customData {
      key
      value
      dataType
      label
    }
  }
}
    `;
export const UserWithCustomDataDocument = `
    query userWithCustomData($id: String) {
  user(id: $id) {
    id
    arn
    userPoolId
    status
    username
    email
    emailVerified
    phone
    phoneVerified
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    city
    province
    country
    createdAt
    updatedAt
    externalId
    customData {
      key
      value
      dataType
      label
    }
  }
}
    `;
export const UserpoolDocument = `
    query userpool {
  userpool {
    id
    name
    domain
    description
    secret
    jwtSecret
    ownerId
    userpoolTypes {
      code
      name
      description
      image
      sdks
    }
    logo
    createdAt
    updatedAt
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    appSsoEnabled
    showWxQRCodeWhenRegisterDisabled
    allowedOrigins
    tokenExpiresAfter
    isDeleted
    frequentRegisterCheck {
      timeInterval
      limit
      enabled
    }
    loginFailCheck {
      timeInterval
      limit
      enabled
    }
    loginPasswordFailCheck {
      timeInterval
      limit
      enabled
    }
    loginFailStrategy
    changePhoneStrategy {
      verifyOldPhone
    }
    changeEmailStrategy {
      verifyOldEmail
    }
    qrcodeLoginStrategy {
      qrcodeExpiresAfter
      returnFullUserInfo
      allowExchangeUserInfoFromBrowser
      ticketExpiresAfter
    }
    app2WxappLoginStrategy {
      ticketExpriresAfter
      ticketExchangeUserInfoNeedSecret
    }
    whitelist {
      phoneEnabled
      emailEnabled
      usernameEnabled
    }
    customSMSProvider {
      enabled
      provider
      config
    }
    packageType
    useCustomUserStore
    loginRequireEmailVerified
    verifyCodeLength
  }
}
    `;
export const UserpoolTypesDocument = `
    query userpoolTypes {
  userpoolTypes {
    code
    name
    description
    image
    sdks
  }
}
    `;
export const UserpoolsDocument = `
    query userpools($page: Int, $limit: Int, $sortBy: SortByEnum) {
  userpools(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      name
      domain
      ownerId
      description
      secret
      jwtSecret
      logo
      createdAt
      updatedAt
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      appSsoEnabled
      showWxQRCodeWhenRegisterDisabled
      allowedOrigins
      tokenExpiresAfter
      isDeleted
      packageType
      useCustomUserStore
      loginRequireEmailVerified
      verifyCodeLength
    }
  }
}
    `;
export const UsersDocument = `
    query users($page: Int, $limit: Int, $sortBy: SortByEnum) {
  users(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      arn
      userPoolId
      status
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      city
      province
      country
      createdAt
      updatedAt
      externalId
    }
  }
}
    `;
export const UsersWithCustomDataDocument = `
    query usersWithCustomData($page: Int, $limit: Int, $sortBy: SortByEnum) {
  users(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      arn
      userPoolId
      status
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      city
      province
      country
      createdAt
      updatedAt
      externalId
      customData {
        key
        value
        dataType
        label
      }
    }
  }
}
    `;
export const WhitelistDocument = `
    query whitelist($type: WhitelistType!) {
  whitelist(type: $type) {
    createdAt
    updatedAt
    value
  }
}
    `;