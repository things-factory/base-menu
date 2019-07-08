import { gql } from 'apollo-server-koa'

export const MenuDetailButtonPatch = gql`
  input MenuDetailButtonPatch {
    menuDetail: String
    text: String
    rank: Int
    icon: String
    style: String
    logic: String
  }
`
