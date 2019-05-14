import { menuDetailResolver } from './menu-detail'
import { menuDetailsResolver } from './menu-details'

import { updateMenuDetail } from './update-menu-detail'
import { createMenuDetail } from './create-menu-detail'
import { deleteMenuDetail } from './delete-menu-detail'

export const Query = {
  ...menuDetailsResolver,
  ...menuDetailResolver
}

export const Mutation = {
  ...updateMenuDetail,
  ...createMenuDetail,
  ...deleteMenuDetail
}
