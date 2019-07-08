import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { MenuDetailButton } from './menu-detail-button'
import { MenuDetailButtonList } from './menu-detail-button-list'
import { MenuDetailButtonPatch } from './menu-detail-button-patch'
import { NewMenuDetailButton } from './new-menu-detail-button'

export const Mutation = `
  createMenuDetailButton (
    menuDetailButton: NewMenuDetailButton!
  ): MenuDetailButton

  updateMenuDetailButton (
    id: String!
    patch: MenuDetailButtonPatch!
  ): MenuDetailButton

  deleteMenuDetailButton (
    id: String!
  ): MenuDetailButton
`

export const Query = `
  menuDetailButtons(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuDetailButtonList
  menuDetailButton(id: String!): MenuDetailButton
`

export const Types = [
  Filter,
  Pagination,
  Sorting,
  MenuDetailButton,
  NewMenuDetailButton,
  MenuDetailButtonPatch,
  MenuDetailButtonList
]
