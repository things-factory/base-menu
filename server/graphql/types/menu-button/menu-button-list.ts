import gql from 'graphql-tag'

export const MenuButtonList = gql`
  type MenuButtonList {
    items: [MenuButton]
    total: Int
  }
`
