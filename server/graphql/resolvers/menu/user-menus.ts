import { Equal, getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const userMenusResolver = {
  async userMenus(_, {}, context) {
    const repository = getRepository(Menu)

    return await repository.find({
      where: {
        hiddenFlag: false,
        menuType: Equal('MENU'),
        domain: context.domain
      },
      relations: ['domain', 'parent', 'children']
    })
  }
}
