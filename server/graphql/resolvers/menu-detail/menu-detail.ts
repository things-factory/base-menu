import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const menuDetailResolver = {
  async menuDetail(_, { name }, context, info) {
    const repository = getRepository(MenuDetail)

    return await repository.findOne(
      { name },
      {
        relations: ['domain', 'buttons', 'columns']
      }
    )
  }
}
