import { gql } from 'apollo-server-koa'

export const MenuList = gql`
  type MenuList {
    items: [Menu]
    total: Int
  }
`
