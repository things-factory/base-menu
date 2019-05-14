import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const updateMenuDetailButton = {
  async updateMenuDetailButton(_, { id, patch }) {
    const repository = getRepository(MenuDetailButton)

    const menuDetailButton = await repository.findOne(
      {
        id
      },
      { relations: ['menuDetail'] }
    )

    return await repository.save({
      ...menuDetailButton,
      ...patch
    })
  }
}
