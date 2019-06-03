import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'
import { ListParams, buildQuery } from '@things-factory/shell'

export const menuDetailsResolver = {
  async menuDetails(_: any, params: ListParams, context: any) {
    const queryBuilder = getRepository(MenuDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
