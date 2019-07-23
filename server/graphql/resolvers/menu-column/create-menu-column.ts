import { getRepository } from 'typeorm'
import { Menu, MenuColumn } from '../../../entities'

export const createMenuColumn = {
  async createMenuColumn(_: any, { menuColumn }, context: any) {
    return await getRepository(MenuColumn).save({
      domain: context.domain,
      ...menuColumn,
      menu: await getRepository(Menu).findOne({ where: { domain: context.domain, name: menuColumn.menu } }),
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
