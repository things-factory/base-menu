import { getRepository } from 'typeorm'
import { MenuDetail, MenuDetailColumn } from '../../../entities'

export const updateMenuDetailColumn = {
  async updateMenuDetailColumn(_: any, { id, patch }, context: any) {
    const repository = getRepository(MenuDetailColumn)
    const menuDetailColumn = await repository.findOne({
      where: { id },
      relations: ['menuDetail']
    })

    if (patch.menuDetail) {
      patch.menuDetail = await getRepository(MenuDetail).findOne({ where: { id: patch.menuDetail } })
    }

    return await repository.save({
      ...menuDetailColumn,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
