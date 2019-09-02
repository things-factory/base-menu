import * as Menu from './menu'
import * as MenuButton from './menu-button'
import * as MenuColumn from './menu-column'

import * as MenuDetail from './menu-detail'
import * as MenuDetailColumn from './menu-detail-column'
import * as MenuDetailButton from './menu-detail-button'

import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const queries = [
  Menu.Query,
  MenuButton.Query,
  MenuColumn.Query,
  MenuDetail.Query,
  MenuDetailColumn.Query,
  MenuDetailButton.Query
]

export const mutations = [
  Menu.Mutation,
  MenuButton.Mutation,
  MenuColumn.Mutation,
  MenuDetail.Mutation,
  MenuDetailColumn.Mutation,
  MenuDetailButton.Mutation
]

export const types = [
  Filter,
  Pagination,
  Sorting,
  ...Menu.Types,
  ...MenuButton.Types,
  ...MenuColumn.Types,
  ...MenuDetail.Types,
  ...MenuDetailColumn.Types,
  ...MenuDetailButton.Types
]
