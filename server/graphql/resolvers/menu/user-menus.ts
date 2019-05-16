import { Equal, getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const userMenusResolver = {
  async userMenus() {
    const repository = getRepository(Menu)

    return await repository.find({
      where: {
        hiddenFlag: false,
        menuType: Equal('MENU')
      },
      relations: ['domain', 'parent', 'children']
    })
  }
}
