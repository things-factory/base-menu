import { gql } from 'apollo-server-koa'

export const MenuDetailList = gql`
  type MenuDetailList {
    items: [MenuDetail]
    total: Int
  }
`
