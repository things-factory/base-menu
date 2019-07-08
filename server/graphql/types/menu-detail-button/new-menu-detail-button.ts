import { gql } from 'apollo-server-koa'

export const NewMenuDetailButton = gql`
  input NewMenuDetailButton {
    menuDetail: String!
    text: String!
    rank: Int
    icon: String
    style: String
    logic: String
  }
`
