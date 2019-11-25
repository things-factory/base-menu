import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenus = {
  async deleteMenus(_: any, { ids }, _context: any) {
    await getRepository(Menu).delete(ids)
  }
}
