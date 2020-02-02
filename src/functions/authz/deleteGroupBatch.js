export default function (idList) {

  if (!idList instanceof Array) {
    throw "idList must be an array!"
  }

  const query = `
  mutation DeleteRBACGroupBatch($idList: [String!]!) {
    deleteRBACGroupBatch(idList: $idList) {
      message
      code
      status
    }
  }
  
  `
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "DeleteRBACGroupBatch",
      query,
      variables: {
        idList
      }
    })
  })
}
