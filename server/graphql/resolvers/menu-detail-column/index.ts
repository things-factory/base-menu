import { menuDetailColumnResolver } from './menu-detail-column'
import { menuDetailColumnsResolver } from './menu-detail-columns'

import { updateMenuDetailColumn } from './update-menu-detail-column'
import { createMenuDetailColumn } from './create-menu-detail-column'
import { deleteMenuDetailColumn } from './delete-menu-detail-column'

export const Query = {
  ...menuDetailColumnResolver,
  ...menuDetailColumnsResolver
}

export const Mutation = {
  ...updateMenuDetailColumn,
  ...createMenuDetailColumn,
  ...deleteMenuDetailColumn
}
