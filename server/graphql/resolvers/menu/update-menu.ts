import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const updateMenu = {
  async updateMenu(_: any, { name, patch }, context: any) {
    const repository = getRepository(Menu)
    const menu = await repository.findOne({
      where: { domain: context.state.domain, name },
      relations: ['childrens']
    })

    const childrenIds = menu.childrens.map(children => children.id)
    if (patch.childrens && patch.childrens.length) {
      patch.childrens.forEach((childrenId: string) => {
        if (!childrenIds.includes(childrenId)) {
          childrenIds.push(childrenId)
        }
      })
    }

    if (patch.parent) {
      patch.parent = await getRepository(Menu).findOne({ id: patch.parent })
    }

    return await repository.save({
      ...menu,
      ...patch,
      childrens: await getRepository(Menu).findByIds(childrenIds),
      updater: context.state.user
    })
  }
}
