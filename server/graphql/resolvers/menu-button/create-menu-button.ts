import { getRepository } from 'typeorm'
import { Menu, MenuButton } from '../../../entities'

export const createMenuButton = {
  async createMenuButton(_: any, { menuButton }, context: any) {
    return await getRepository(MenuButton).save({
      domain: context.state.domain,
      ...menuButton,
      menu: await getRepository(Menu).findOne({ where: { domain: context.state.domain, id: menuButton.menu } }),
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
