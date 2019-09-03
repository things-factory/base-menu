import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const createMenu = {
  async createMenu(_: any, { menu }, context: any) {
    if (menu.parent) {
      menu.parent = await getRepository(Menu).findOne({ where: { domain: context.state.domain, name: menu.parent } })
    }

    return await getRepository(Menu).save({
      ...menu,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
