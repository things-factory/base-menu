import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menusResolver = {
  async menus(_: any, params: ListParam) {
    const queryBuilder = getRepository(Menu).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Menu.domain', 'Domain')
      .leftJoinAndSelect('Menu.parent', 'Parent')
      .leftJoinAndSelect('Menu.childrens', 'Childrens')
      .leftJoinAndSelect('Menu.buttons', 'Buttons')
      .leftJoinAndSelect('Menu.columns', 'Columns')
      .leftJoinAndSelect('Menu.creator', 'Creator')
      .leftJoinAndSelect('Menu.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
