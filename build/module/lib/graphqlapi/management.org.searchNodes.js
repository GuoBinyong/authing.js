export const searchNodes = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query searchOrgNodes(
    $orgId: String!
    $name: String
    $metadata: [KeyValuePair!]
  ) {
    searchOrgNodes(orgId: $orgId, name: $name, metadata: $metadata) {
      _id
      name
      description
      createdAt
      updatedAt
    }
  }
  `;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuc2VhcmNoTm9kZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcuc2VhcmNoTm9kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQXNDLEVBQUUsU0FBYyxFQUFnQixFQUFFO0lBQ3RJLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7O0dBYWIsQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9