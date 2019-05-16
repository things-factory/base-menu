import { gql } from 'apollo-server-koa'

export const Menu = gql`
  type Menu {
    id: String
    domain: Domain
    name: String
    routing: String
    routingType: String
    resourceType: String
    resourceName: String
    idField: String
    title: String
    hiddenFlag: Boolean
    children: [Menu]
    buttons: [MenuButton]
    columns: [MenuColumn]
    createdAt: String
    updatedAt: String
  }
`
