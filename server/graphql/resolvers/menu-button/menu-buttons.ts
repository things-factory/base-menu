import { getRepository } from 'typeorm'
import { MenuButton } from '../../../entities'

export const menuButtonsResolver = {
  async menuButtons(_, { menuId }, context) {
    const repository = getRepository(MenuButton)
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
