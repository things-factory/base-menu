import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const updateMenuDetail = {
  async updateMenuDetail(_, { id, patch }) {
    const repository = getRepository(MenuDetail)

    const menuDetail = await repository.findOne(
      { id },
      {
        relations: ['domain', 'buttons', 'columns']
      }
    )

    return await repository.save({
      ...menuDetail,
      ...patch
    })
  }
}
