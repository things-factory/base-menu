import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const updateMenuDetailColumn = {
  async updateMenuDetailColumn(_, { id, patch }) {
    const repository = getRepository(MenuDetailColumn)

    const menuDetailColumn = await repository.findOne(
      {
        id
      },
      { relations: ['menuDetail'] }
    )

    return await repository.save({
      ...menuDetailColumn,
      ...patch
    })
  }
}
