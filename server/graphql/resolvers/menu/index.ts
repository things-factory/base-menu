import { menuResolver } from './menu'
import { menusResolver } from './menus'
import { userMenusResolver } from './user-menus'
import { ownerMenusResolver } from './owner-menus'
import { customerMenusResolver } from './customer-menus'

import { updateMenu } from './update-menu'
import { createMenu } from './create-menu'
import { deleteMenu } from './delete-menu'
import { deleteMenus } from './delete-menus'
import { updateMultipleMenu } from './update-multiple-menu'

export const Query = {
  ...menusResolver,
  ...menuResolver,
  ...userMenusResolver,
  ...ownerMenusResolver,
  ...customerMenusResolver
}

export const Mutation = {
  ...updateMenu,
  ...createMenu,
  ...deleteMenu,
  ...deleteMenus,
  ...updateMultipleMenu
}
