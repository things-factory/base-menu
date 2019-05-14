import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const menuDetailButtonResolver = {
  async menuDetailButton(_, { id }, context, info) {
    const repository = getRepository(MenuDetailButton)

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
