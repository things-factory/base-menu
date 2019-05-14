import { gql } from 'apollo-server-koa'

export const MenuDetailButtonPatch = gql`
  input MenuDetailButtonPatch {
    name: String
  }
`
