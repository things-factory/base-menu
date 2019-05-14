import { menuDetailButtonResolver } from './menu-detail-button'
import { menuDetailButtonsResolver } from './menu-detail-buttons'

import { updateMenuDetailButton } from './update-menu-detail-button'
import { createMenuDetailButton } from './create-menu-detail-button'
import { deleteMenuDetailButton } from './delete-menu-detail-button'

export const Query = {
  ...menuDetailButtonResolver,
  ...menuDetailButtonsResolver
}

export const Mutation = {
  ...updateMenuDetailButton,
  ...createMenuDetailButton,
  ...deleteMenuDetailButton
}
