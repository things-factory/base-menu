import * as Menu from './menu'
import * as MenuButton from './menu-button'
import * as MenuColumn from './menu-column'

export const queries = [
  Menu.Query,
  MenuButton.Query,
  MenuColumn.Query
]

export const mutations = [
  Menu.Mutation,
  MenuButton.Mutation,
  MenuColumn.Mutation
]

export const types = [
  ...Menu.Types,
  ...MenuButton.Types,
  ...MenuColumn.Types
]
