import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenu = {
  async deleteMenu(_: any, { id }, _context: any) {
    await getRepository(Menu).delete(id)
  }
}
