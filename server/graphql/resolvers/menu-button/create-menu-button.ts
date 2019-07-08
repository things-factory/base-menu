import { getRepository } from 'typeorm'
import { Menu, MenuButton } from '../../../entities'

export const createMenuButton = {
  async createMenuButton(_: any, { menuButton }, context: any) {
    return await getRepository(MenuButton).save({
      domain: context.domain,
      ...menuButton,
      menu: await getRepository(Menu).findOne({ where: { domain: context.domain, id: menuButton.menu } }),
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
