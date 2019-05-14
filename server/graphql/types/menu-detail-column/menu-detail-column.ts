import { gql } from 'apollo-server-koa'

export const MenuDetailColumn = gql`
  type MenuDetailColumn {
    id: String
    domain: Domain
    name: String
    menuDetail: MenuDetail
    createdAt: String
    updatedAt: String
  }
`
