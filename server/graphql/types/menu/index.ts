import { Menu } from './menu'
import { NewMenu } from './new-menu'
import { MenuPatch } from './menu-patch'
import { MenuList } from './menu-list'

export const Mutation = `
  createMenu (
    menu: NewMenu!
  ): Menu

  updateMenu (
    name: String!
    patch: MenuPatch!
  ): Menu

  updateMultipleMenu (
    patches: [MenuPatch]!
  ): [Menu]

  deleteMenu (
    name: String!
  ): Boolean

  deleteMenus (
    names: [String]!
  ): Boolean
`

export const Query = `
  menus(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuList
  menu(name: String): Menu
  userMenus: [Menu]
`

export const Types = [Menu, NewMenu, MenuPatch, MenuList]
