import { MenuDetailButton } from './menu-detail-button'
import { NewMenuDetailButton } from './new-menu-detail-button'
import { MenuDetailButtonPatch } from './menu-detail-button-patch'

export const Mutation = `
  createMenuDetailButton (
    menuDetailButton: NewMenuDetailButton!
  ): MenuDetailButton

  updateMenuDetailButton (
    name: String!
    patch: MenuDetailButtonPatch!
  ): MenuDetailButton

  deleteMenuDetailButton (
    name: String!
  ): MenuDetailButton
`

export const Query = `
  menuDetailButtons: [MenuDetailButton]
  menuDetailButton(name: String!): MenuDetailButton
`

export const Types = [MenuDetailButton, NewMenuDetailButton, MenuDetailButtonPatch]
