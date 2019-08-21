import { getRepository } from 'typeorm'
import { MenuDetail, MenuDetailButton } from '../../../entities'

export const updateMenuDetailButton = {
  async updateMenuDetailButton(_: any, { id, patch }, context: any) {
    const repository = getRepository(MenuDetailButton)
    const menuDetailButton = await repository.findOne({
      where: { id },
      relations: ['menuDetail']
    })

    if (patch.menuDetail) {
      patch.menuDetail = await getRepository(MenuDetail).findOne({ where: { id: patch.menuDetail } })
    }

    return await repository.save({
      ...menuDetailButton,
      ...patch,
      updater: context.state.user
    })
  }
}
