import { Role, User } from '@things-factory/auth-base'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Menu } from '../../../entities'

export const updateMenuResolver = {
  async updateMenu(_: any, { id, patch }, context: any) {
    return await updateMenu(id, patch, context.state.user)
  }
}

export async function updateMenu(id: string, patch: Menu, user: User, trxMgr?: EntityManager): Promise<Menu> {
  const menuRepo: Repository<Menu> = trxMgr?.getRepository(Menu) || getRepository(Menu)
  const roleRepo: Repository<Role> = trxMgr?.getRepository(Role) || getRepository(Role)

  const menu: Menu = await menuRepo.findOne({
    where: { id },
    relations: ['childrens', 'parent', 'role']
  })

  if (patch?.parent?.id) {
    patch.parent = await menuRepo.findOne(patch.parent.id)
  }

  if (patch?.childrens?.length) {
    const childrenIds: string[] = patch.childrens.map((children: Menu) => children.id)
    patch.childrens = await menuRepo.findByIds(childrenIds)
  }

  if (patch?.role?.id) {
    patch.role = await roleRepo.findOne(patch.role.id)
  }

  return await menuRepo.save({
    ...menu,
    ...patch,
    updater: user
  })
}
