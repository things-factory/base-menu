import gql from 'graphql-tag'

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
