import { gql } from 'apollo-server-koa'

export const MenuButtonList = gql`
  type MenuButtonList {
    items: [MenuButton]
    total: Int
  }
`
