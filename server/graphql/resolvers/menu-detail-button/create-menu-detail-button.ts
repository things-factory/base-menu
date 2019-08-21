import { getRepository } from 'typeorm'
import { MenuDetail, MenuDetailButton } from '../../../entities'

export const createMenuDetailButton = {
  async createMenuDetailButton(_: any, { menuDetailButton }, context: any) {
    return await getRepository(MenuDetailButton).save({
      domain: context.domain,
      ...menuDetailButton,
      menuDetail: await getRepository(MenuDetail).findOne({
        where: { domain: context.domain, id: menuDetailButton.menu }
      }),
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
