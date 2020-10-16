[[toc]]


# class AclManagementClient

> Authing 基于 PBAC（Policy Based Access Control，基于策略的访问控制）构建权限模型，
可以和 RBAC （Role Based Access Control，基于角色的访问控制）结合，实现非常灵活、精细化的权限控制。

此模块将此模型抽象成了两个方法: allow, isAllowed。

请使用以下方式使用该模块，而不要直接初始化该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
   secret: process.env.AUTHING_USERPOOL_SECRET,
   host: process.env.AUTHING_HOST
})
managementClient.acl.allow // 允许某个用户对某个资源进行某个操作
managementClient.acl.isAllowed // 判断某个用户是否对某个资源有某个操作权限
```

## allow

允许某个用户对某个资源进行某个操作

AclManagementClient().allow(userId, action, resource)

> 允许某个用户对某个资源进行某个操作


#### Arguments

- `userId` \<string\> 用户 ID 
- `action` \<string\> 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list` 
- `resource` \<string\> 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 *, 如 `*`, `books:123`, `books:*` 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
AclManagementClient().allow('USERID1', 'books:123', 'books:read')
AclManagementClient().isAllowed('USERID1', 'books:123', 'books:read') # true
AclManagementClient().isAllowed('USERID1', 'books:123', 'books:edit') # false
```
```javascript
AclManagementClient().allow('USERID2', 'books:*', 'books:*')
AclManagementClient().isAllowed('USERID2', 'books:123', 'books:read') # true
AclManagementClient().isAllowed('USERID2', 'books:124', 'books:edit') # true
```
      

## isAllowed

判断某个用户是否对某个资源有某个操作权限

AclManagementClient().isAllowed(userId, action, resource)

> 判断某个用户是否对某个资源有某个操作权限


#### Arguments

- `userId` \<string\> 用户ID 
- `action` \<string\> 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list` 
- `resource` \<string\> 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 *, 如 `*`, `books:123`, `books:*` 

#### Returns

-  `Promise<boolean>` 是否具备操作权限

#### Examples

```javascript
AclManagementClient().isAllowed('USERID', 'books:*', 'books:edit')
```
      