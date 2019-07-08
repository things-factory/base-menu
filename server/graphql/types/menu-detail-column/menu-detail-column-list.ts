import { gql } from 'apollo-server-koa'

export const MenuDetailColumnList = gql`
  type MenuDetailColumnList {
    items: [MenuDetailColumn]
    total: Int
  }
`
