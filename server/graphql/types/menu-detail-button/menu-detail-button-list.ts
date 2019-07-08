import { gql } from 'apollo-server-koa'

export const MenuDetailButtonList = gql`
  type MenuDetailButtonList {
    items: [MenuDetailButton]
    total: Int
  }
`
