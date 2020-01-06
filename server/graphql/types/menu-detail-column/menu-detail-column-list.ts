import gql from 'graphql-tag'

export const MenuDetailColumnList = gql`
  type MenuDetailColumnList {
    items: [MenuDetailColumn]
    total: Int
  }
`
