import gql from 'graphql-tag'

export const MenuDetailButton = gql`
  type MenuDetailButton {
    id: String
    domain: Domain
    menuDetail: MenuDetail
    text: String
    rank: Int
    icon: String
    style: String
    logic: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
