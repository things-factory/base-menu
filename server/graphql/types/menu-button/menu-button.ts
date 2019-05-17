import { gql } from 'apollo-server-koa'

export const MenuButton = gql`
  type MenuButton {
    id: String
    domain: Domain
    rank: Int
    text: String
    menu: Menu
    createdAt: String
    updatedAt: String
  }
`
