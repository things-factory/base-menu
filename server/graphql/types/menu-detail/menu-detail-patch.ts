import { gql } from 'apollo-server-koa'

export const MenuDetailPatch = gql`
  input MenuDetailPatch {
    name: String
  }
`
