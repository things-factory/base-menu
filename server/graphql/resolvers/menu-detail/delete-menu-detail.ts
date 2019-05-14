import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const deleteMenuDetail = {
  async deleteMenuDetail(_, { id }) {
    const repository = getRepository(MenuDetail)

    return await repository.delete(id)
  }
}
