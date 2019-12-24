import { Role, User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Menu } from '../../../entities'

export const createMenuResolver = {
  async createMenu(_: any, { menu }, context: any) {
    return await createMenu(menu, context.state.domain, context.state.user)
  }
}

export async function createMenu(menu: Menu, domain: Domain, user: User, trxMgr?: EntityManager): Promise<Menu> {
  const menuRepo: Repository<Menu> = trxMgr?.getRepository(Menu) || getRepository(Menu)
  const roleRepo: Repository<Role> = trxMgr?.getRepository(Role) || getRepository(Role)

  if (menu?.parent?.id) {
    menu.parent = await menuRepo.findOne(menu.parent.id)
  }

  if (menu?.role?.id) {
    menu.role = await roleRepo.findOne(menu.role.id)
  }

  return await menuRepo.save({
    ...menu,
    domain,
    creator: user,
    updater: user
  })
}
