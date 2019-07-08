import { Menu } from './menu'
import { NewMenu } from './new-menu'
import { MenuPatch } from './menu-patch'
import { MenuList } from './menu-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createMenu (
    menu: NewMenu!
  ): Menu

  updateMenu (
    name: String!
    patch: MenuPatch!
  ): Menu

  deleteMenu (
    name: String!
  ): Menu
`

export const Query = `
  menus(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuList
  menu(name: String): Menu
  userMenus: [Menu]
`

export const Types = [Filter, Pagination, Sorting, Menu, NewMenu, MenuPatch, MenuList]
