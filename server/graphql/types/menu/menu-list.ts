import gql from 'graphql-tag'

export const MenuList = gql`
  type MenuList {
    items: [Menu]
    total: Int
  }
`
