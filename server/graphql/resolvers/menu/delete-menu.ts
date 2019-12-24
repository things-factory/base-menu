import { EntityManager, getRepository, Repository } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenuResolver = {
  async deleteMenu(_: any, { id }, _context: any) {
    await deleteMenu(id)
  }
}

export async function deleteMenu(id: string, trxMgr?: EntityManager): Promise<void> {
  const menuRepo: Repository<Menu> = trxMgr?.getRepository(Menu) || getRepository(Menu)
  await menuRepo.delete(id)
}
