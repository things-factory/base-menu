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
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
