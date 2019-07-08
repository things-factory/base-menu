import { getRepository } from 'typeorm'
import { Menu, MenuColumn } from '../../../entities'

export const updateMenuColumn = {
  async updateMenuColumn(_: any, { id, patch }, context: any) {
    const repository = getRepository(MenuColumn)

    const menuColumn = await repository.findOne({
      where: { id },
      relations: ['menu']
    })

    if (patch.menu) {
      patch.menu = await getRepository(Menu).findOne({ where: { domain: context.domain, id: patch.menu } })
    }

    return await repository.save({
      ...menuColumn,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
