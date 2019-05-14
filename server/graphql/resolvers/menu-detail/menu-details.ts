import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const menuDetailsResolver = {
  async menuDetails() {
    const repository = getRepository(MenuDetail)

    return await repository.find({
      relations: ['domain', 'buttons', 'columns']
    })
  }
}
