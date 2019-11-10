import gql from 'graphql-tag'

export const MenuPatch = gql`
  input MenuPatch {
    id: String
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
    parent: ObjectRef
    childrens: [ObjectRef]
    buttons: [ObjectRef]
    columns: [ObjectRef]
    cuFlag: String
  }
`
