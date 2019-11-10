import gql from 'graphql-tag'

export const MenuDetail = gql`
  type MenuDetail {
    id: String
    domain: Domain
    menu: Menu
    name: String
    viewSection: String
    entityId: String
    dataProp: String
    association: String
    searchUrl: String
    saveUrl: String
    masterField: String
    customView: String
    columns: [MenuDetailColumn]
    buttons: [MenuDetailButton]
    creator: User
    updater: User
  }
`
