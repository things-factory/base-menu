import { gql } from 'apollo-server-koa'

export const MenuColumnList = gql`
  type MenuColumnList {
    items: [MenuColumn]
    total: Int
  }
`
