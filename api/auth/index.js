const login = `
query login($tenantId: String!, $clientId: String!, $username: String!, $password: String!){
  token_2(tenantId: $tenantId, clientId: $clientId, username: $username, password: $password) {
    accessToken
    expiresIn
    error
  }
}
`

export default { login }
