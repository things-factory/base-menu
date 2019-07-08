import { gql } from 'apollo-server-koa'

export const NewMenuButton = gql`
  input NewMenuButton {
    menu: String!
    rank: Int
    style: String
    icon: String
    text: String!
    auth: String
    logic: String
  }
`
