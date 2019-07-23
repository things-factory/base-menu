import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const createMenu = {
  async createMenu(_: any, { menu }, context: any) {
    const repository = getRepository(Menu)
    if (menu.parent) {
      menu.parent = await repository.findOne({ where: { domain: context.domain, name: menu.parent } })
    }

    return await repository.save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...menu
    })
  }
}
