import { getRepository } from 'typeorm'
import { Menu, MenuDetail } from '../../../entities'

export const createMenuDetail = {
  async createMenuDetail(_: any, { menuDetail }, context: any) {
    return await getRepository(MenuDetail).save({
      domain: context.domain,
      ...menuDetail,
      menu: await getRepository(Menu).findOne({ where: { domain: context.domain, id: menuDetail.menu } }),
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
