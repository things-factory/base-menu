import { getRepository } from 'typeorm'
import { Menu, MenuDetail } from '../../../entities'

export const createMenuDetail = {
  async createMenuDetail(_: any, { menuDetail }, context: any) {
    return await getRepository(MenuDetail).save({
      domain: context.state.domain,
      ...menuDetail,
      menu: await getRepository(Menu).findOne({ where: { domain: context.state.domain, id: menuDetail.menu } }),
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
