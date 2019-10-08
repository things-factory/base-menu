import { createMenu } from './create-menu'
import { deleteMenu } from './delete-menu'
import { deleteMenus } from './delete-menus'
import { menuResolver } from './menu'
import { menusResolver } from './menus'
import { updateMenu } from './update-menu'
import { updateMultipleMenu } from './update-multiple-menu'
import { userMenusResolver } from './user-menus'

export const Query = {
  ...menusResolver,
  ...menuResolver,
  ...userMenusResolver
}

export const Mutation = {
  ...updateMenu,
  ...createMenu,
  ...deleteMenu,
  ...deleteMenus,
  ...updateMultipleMenu
}
