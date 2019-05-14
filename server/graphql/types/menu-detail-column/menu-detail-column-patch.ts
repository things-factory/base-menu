import { gql } from 'apollo-server-koa'

export const MenuDetailColumnPatch = gql`
  input MenuDetailColumnPatch {
    name: String
  }
`
