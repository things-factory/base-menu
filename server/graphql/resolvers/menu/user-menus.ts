import { Equal, getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const userMenusResolver = {
  async userMenus(_, {}, context) {
    return await getRepository(Menu).find({
      where: {
        hiddenFlag: false,
        menuType: Equal('MENU'),
        domain: context.state.domain
      },
      order: {
        rank: 'ASC'
      },
      relations: ['domain', 'parent', 'childrens']
    })
  }
}
