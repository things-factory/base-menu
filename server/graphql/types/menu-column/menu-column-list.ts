import gql from 'graphql-tag'

export const MenuColumnList = gql`
  type MenuColumnList {
    items: [MenuColumn]
    total: Int
  }
`
