import { MenuButton } from './menu-button'
import { NewMenuButton } from './new-menu-button'
import { MenuButtonPatch } from './menu-button-patch'
import { MenuButtonList } from './menu-button-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createMenuButton (
    menuButton: NewMenuButton!
  ): MenuButton

  updateMenuButton (
    id: String!
    patch: MenuButtonPatch!
  ): MenuButton

  deleteMenuButton (
    id: String!
  ): MenuButton
`

export const Query = `
  menuButtons(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuButtonList
  menuButton(id: String!): MenuButton
`

export const Types = [Filter, Pagination, Sorting, MenuButton, NewMenuButton, MenuButtonPatch, MenuButtonList]
