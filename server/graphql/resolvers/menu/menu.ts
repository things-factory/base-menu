import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menuResolver = {
  async menu(_, { name, domain }, context, info) {
    const repository = getRepository(Menu)

    return await repository.findOne(
      { name, domain },
      {
        relations: ['domain', 'parent', 'children', 'buttons', 'columns']
      }
    )
  }
}
