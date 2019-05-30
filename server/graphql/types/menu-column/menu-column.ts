import { gql } from 'apollo-server-koa'

export const MenuColumn = gql`
  type MenuColumn {
    id: String
    domain: Domain
    name: String
    description: String
    term: String
    colType: String
    colSize: String
    nullable: Boolean
    refType: String
    refName: String
    refUrl: String
    refRelated: String
    searchRank: Int
    sortRank: Int
    reverseSort: Boolean
    searchEditor: String
    searchOper: String
    searchInitVal: String
    gridRank: Int
    gridEditor: String
    gridFormat: String
    gridValidator: String
    gridWidth: String
    gridAlign: String
    formEditor: String
    formValidator: String
    formFormat: String
    defVal: String
    rangeVal: String
    ignoreOnSave: Boolean
    menu: Menu
    createdAt: String
    updatedAt: String
  }
`
