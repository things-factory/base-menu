import { gql } from 'apollo-server-koa'

export const NewMenuDetailColumn = gql`
  input NewMenuDetailColumn {
    name: String!
  }
`
