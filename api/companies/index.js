const getList = `
query getCompanies {
  companies(limit: 10) {
    list {
      name
    }
  }
}
`

export default { getList }
