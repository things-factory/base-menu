import { getRepository } from 'typeorm'
import { MenuButton, Menu } from '../../../entities'

export const updateMenuButton = {
  async updateMenuButton(_: any, { id, patch }, context: any) {
    const repository = getRepository(MenuButton)
    const menuButton = await repository.findOne({
      where: { domain: context.domain, id },
      relations: ['menu']
    })

    if (patch.menu) {
      patch.menu = await getRepository(Menu).findOne({ domain: context.domain, id: patch.menu })
    }

    return await repository.save({
      ...menuButton,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
