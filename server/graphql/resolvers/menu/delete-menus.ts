import { EntityManager, Repository, getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenusResolver = {
  async deleteMenus(_: any, { ids }, _context: any) {
    deleteMenus(ids)
  }
}

export async function deleteMenus(ids: string[], trxMgr?: EntityManager): Promise<void> {
  const menuRepo: Repository<Menu> = trxMgr?.getRepository(Menu) || getRepository(Menu)
  await menuRepo.delete(ids)
}
