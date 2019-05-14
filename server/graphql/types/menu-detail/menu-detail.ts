import { gql } from 'apollo-server-koa'

export const MenuDetail = gql`
  type MenuDetail {
    id: String
    domain: Domain
    name: String
    buttons: [MenuDetailButton]
    columns: [MenuDetailColumn]
    createdAt: String
    updatedAt: String
  }
`
