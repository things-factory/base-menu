import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menuResolver = {
  async menu(_, { name, id }, context, info) {
    const repository = getRepository(Menu)
    const domain = context.domain
    const where: any = {}
    if (domain) where.domain = domain
    if (name) where.name = name
    if (id) where.id = id

    return await repository.findOne({
      where,
      relations: ['domain', 'parent', 'children', 'buttons', 'columns']
    })
  }
}
