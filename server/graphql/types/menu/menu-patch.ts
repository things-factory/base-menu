import { gql } from 'apollo-server-koa'

export const MenuPatch = gql`
  input MenuPatch {
    name: String
    description: String
    category: String
    menuType: String
    rank: Int
    routing: String
    routingType: String
    resourceType: String
    resourceUrl: String
    resourceName: String
    idField: String
    titleField: String
    gridSaveUrl: String
    pagination: Boolean
    detailFormId: String
    detailLayout: String
    template: String
    hiddenFlag: Boolean
    itemsProp: String
    totalProp: String
    fixedColumns: Int
    iconPath: String
    parent: String
    childrens: [String]
    buttons: [String]
    columns: [String]
  }
`
