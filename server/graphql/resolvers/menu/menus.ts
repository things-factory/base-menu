import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menusResolver = {
  async menus(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Menu).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
