import { createMenu, createMenuResolver } from './create-menu'
import { deleteMenu, deleteMenuResolver } from './delete-menu'
import { deleteMenus, deleteMenusResolver } from './delete-menus'
import { menuResolver } from './menu'
import { menusResolver } from './menus'
import { updateMenu, updateMenuResolver } from './update-menu'
import { updateMultipleMenu } from './update-multiple-menu'

export const Query = {
  ...menusResolver,
  ...menuResolver
}

export const Mutation = {
  ...createMenuResolver,
  ...updateMenuResolver,
  ...createMenuResolver,
  ...deleteMenuResolver,
  ...deleteMenusResolver,
  ...updateMultipleMenu
}

export { createMenu, deleteMenu, deleteMenus, updateMenu }
