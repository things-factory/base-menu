import gql from 'graphql-tag'

export const MenuButton = gql`
  type MenuButton {
    id: String
    domain: Domain
    menu: Menu
    rank: Int
    style: String
    icon: String
    text: String
    auth: String
    logic: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
