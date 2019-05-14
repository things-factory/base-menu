import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const menuDetailColumnResolver = {
  async menuDetailColumn(_, { id }, context, info) {
    const repository = getRepository(MenuDetailColumn)

    return await repository.findOne(
      {
        id
      },
      {
        relations: ['menuDetail']
      }
    )
  }
}
