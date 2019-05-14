import { gql } from 'apollo-server-koa'

export const MenuDetailButton = gql`
  type MenuDetailButton {
    id: String
    domain: Domain
    name: String
    menuDetail: MenuDetail
    createdAt: String
    updatedAt: String
  }
`
