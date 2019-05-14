import { MenuDetail } from './menu-detail'
import { NewMenuDetail } from './new-menu-detail'
import { MenuDetailPatch } from './menu-detail-patch'

export const Mutation = `
  createMenuDetail (
    menu: NewMenuDetail!
  ): MenuDetail

  updateMenuDetail (
    name: String!
    patch: MenuDetailPatch!
  ): MenuDetail

  deleteMenuDetail (
    name: String!
  ): MenuDetail
`

export const Query = `
  menus: [MenuDetail]
  menu(name: String!): MenuDetail
`

export const Types = [MenuDetail, NewMenuDetail, MenuDetailPatch]
