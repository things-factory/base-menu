import { Equal, IsNull, getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const customerMenusResolver = {
  async customerMenus(_, {}, context: any) {
    //TODO get required priviledge from array

    return await getRepository(Menu).find({
      where: [
        {
          hiddenFlag: false,
          category: Equal('customer'),
          menuType: Equal('MENU'),
          domain: context.state.domain
        },
        {
          hiddenFlag: false,
          category: IsNull(),
          menuType: Equal('MENU'),
          domain: context.state.domain
        }
      ],
      order: {
        rank: 'ASC'
      },
      relations: ['domain', 'parent', 'childrens']
    })
  }
}
