import { Menu } from './menu'
import { MenuList } from './menu-list'
import { MenuPatch } from './menu-patch'
import { NewMenu } from './new-menu'

export const Mutation = `
  createMenu (
    menu: NewMenu!
  ): Menu

  updateMenu (
    id: String!
    patch: MenuPatch!
  ): Menu

  updateMultipleMenu (
    patches: [MenuPatch]!
  ): [Menu]

  deleteMenu (
    id: String!
  ): Boolean

  deleteMenus (
    ids: [String]!
  ): Boolean
`

export const Query = `
  menus(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuList
  menu(id: String): Menu
  userMenus: [Menu]
`

export const Types = [Menu, NewMenu, MenuPatch, MenuList]
