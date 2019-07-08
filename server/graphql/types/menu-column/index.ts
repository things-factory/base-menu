import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { MenuColumn } from './menu-column'
import { MenuColumnList } from './menu-column-list'
import { MenuColumnPatch } from './menu-column-patch'
import { NewMenuColumn } from './new-menu-column'

export const Mutation = `
  createMenuColumn (
    menuColumn: NewMenuColumn!
  ): MenuColumn

  updateMenuColumn (
    id: String!
    patch: MenuColumnPatch!
  ): MenuColumn

  deleteMenuColumn (
    id: String!
  ): MenuColumn
`

export const Query = `
  menuColumns(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuColumnList
  menuColumn(id: String!): MenuColumn
`

export const Types = [Filter, Pagination, Sorting, MenuColumn, NewMenuColumn, MenuColumnPatch, MenuColumnList]
