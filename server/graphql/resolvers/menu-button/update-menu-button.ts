import { getRepository } from 'typeorm'
import { MenuButton, Menu } from '../../../entities'

export const updateMenuButton = {
  async updateMenuButton(_: any, { id, patch }, context: any) {
    const repository = getRepository(MenuButton)
    const menuButton = await repository.findOne({
      where: { domain: context.state.domain, id },
      relations: ['menu']
    })

    if (patch.menu) {
      patch.menu = await getRepository(Menu).findOne({ domain: context.state.domain, id: patch.menu })
    }

    return await repository.save({
      ...menuButton,
      ...patch,
      updater: context.state.user
    })
  }
}
