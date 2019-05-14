import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const deleteMenuDetailButton = {
  async deleteMenuDetailButton(_, { id }) {
    const repository = getRepository(MenuDetailButton)

    return await repository.delete(id)
  }
}
