import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { MenuDetail } from './menu-detail'
import { MenuDetailList } from './menu-detail-list'
import { MenuDetailPatch } from './menu-detail-patch'
import { NewMenuDetail } from './new-menu-detail'

export const Mutation = `
  createMenuDetail (
    menuDetail: NewMenuDetail!
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
  menuDetails(filters: [Filter], pagination: Pagination, sortings: [Sorting]): MenuDetailList
  menuDetail(name: String!): MenuDetail
`

export const Types = [Filter, Pagination, Sorting, MenuDetail, NewMenuDetail, MenuDetailPatch, MenuDetailList]
