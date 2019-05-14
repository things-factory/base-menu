import { gql } from 'apollo-server-koa'

export const NewMenuDetail = gql`
  input NewMenuDetail {
    name: String!
  }
`
