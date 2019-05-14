import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const deleteMenuDetailColumn = {
  async deleteMenuDetailColumn(_, { id }) {
    const repository = getRepository(MenuDetailColumn)

    return await repository.delete(id)
  }
}
