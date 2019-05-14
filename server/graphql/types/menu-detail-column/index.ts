import { MenuDetailColumn } from './menu-detail-column'
import { NewMenuDetailColumn } from './new-menu-detail-column'
import { MenuDetailColumnPatch } from './menu-detail-column-patch'

export const Mutation = `
  createMenuDetailColumn (
    menuDetailColumn: NewMenuDetailColumn!
  ): MenuDetailColumn

  updateMenuDetailColumn (
    name: String!
    patch: MenuDetailColumnPatch!
  ): MenuDetailColumn

  deleteMenuDetailColumn (
    name: String!
  ): MenuDetailColumn
`

export const Query = `
  menuDetailColumns: [MenuDetailColumn]
  menuDetailColumn(name: String!): MenuDetailColumn
`

export const Types = [MenuDetailColumn, NewMenuDetailColumn, MenuDetailColumnPatch]
