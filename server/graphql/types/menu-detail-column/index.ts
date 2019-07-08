import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { MenuDetailColumn } from './menu-detail-column'
import { MenuDetailColumnList } from './menu-detail-column-list'
import { MenuDetailColumnPatch } from './menu-detail-column-patch'
import { NewMenuDetailColumn } from './new-menu-detail-column'

export const Mutation = `
  createMenuDetailColumn (
    menuDetailColumn: NewMenuDetailColumn!
  ): MenuDetailColumn

  updateMenuDetailColumn (
    id: String!
    patch: MenuDetailColumnPatch!
  ): MenuDetailColumn

  deleteMenuDetailColumn (
    id: String!
  ): MenuDetailColumn
`

export const Query = `
  menuDetailColumns(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuDetailColumnList
  menuDetailColumn(id: String!): MenuDetailColumn
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  MenuDetailColumn,
  NewMenuDetailColumn,
  MenuDetailColumnPatch,
  MenuDetailColumnList
]
