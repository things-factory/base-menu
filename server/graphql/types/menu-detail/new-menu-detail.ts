import gql from 'graphql-tag'

export const NewMenuDetail = gql`
  input NewMenuDetail {
    menu: String!
    name: String!
    viewSection: String!
    entityId: String
    dataProp: String
    association: String
    searchUrl: String
    saveUrl: String
    masterField: String
    customView: String
    columns: [String]
    buttons: [String]
  }
`
