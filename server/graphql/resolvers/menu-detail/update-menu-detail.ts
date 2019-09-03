import { getRepository } from 'typeorm'
import { Menu, MenuDetail } from '../../../entities'

export const updateMenuDetail = {
  async updateMenuDetail(_: any, { name, patch }, context: any) {
    const repository = getRepository(MenuDetail)
    const menuDetail = await repository.findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'menu']
    })

    if (patch.menu) {
      patch.menu = await getRepository(Menu).findOne({
        where: { domain: context.state.domain, id: menuDetail.menu }
      })
    }

    return await repository.save({
      ...menuDetail,
      ...patch,
      updater: context.state.user
    })
  }
}
