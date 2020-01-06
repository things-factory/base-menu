import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menuResolver = {
  async menu(_: any, { id }, _context: any) {
    return await getRepository(Menu).findOne({
      where: { id },
      relations: ['domain', 'parent', 'childrens', 'role', 'buttons', 'columns', 'creator', 'updater']
    })
  }
}
