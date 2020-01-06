import gql from 'graphql-tag'

export const MenuDetailButtonList = gql`
  type MenuDetailButtonList {
    items: [MenuDetailButton]
    total: Int
  }
`
