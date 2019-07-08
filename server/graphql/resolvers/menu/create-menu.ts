import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const createMenu = {
  async createMenu(_: any, { menu }, context: any) {
    return await getRepository(Menu).save({
      domain: context.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...menu
    })
  }
}
