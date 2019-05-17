import { getRepository } from 'typeorm'
import { MenuColumn } from '../../../entities'

export const menuColumnsResolver = {
  async menuColumns(_, { menuId }, context) {
    const repository = getRepository(MenuColumn)
    const where: any = {}
    const domain = context.domain
    if (menuId) where.menu = menuId
    if (domain) where.domain = domain

    return await repository.find({
      where,
      order: {
        rank: 'ASC'
      }
    })
  }
}
