import { gql } from 'apollo-server-koa'

export const NewMenuDetailButton = gql`
  input NewMenuDetailButton {
    name: String!
  }
`
