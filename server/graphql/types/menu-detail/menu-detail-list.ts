import gql from 'graphql-tag'

export const MenuDetailList = gql`
  type MenuDetailList {
    items: [MenuDetail]
    total: Int
  }
`
