import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menuResolver = {
  async menu(_: any, { name }, context: any) {
    return await getRepository(Menu).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'parent', 'childrens', 'buttons', 'columns', 'creator', 'updater']
    })
  }
}
