import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'
import { ListParam, buildQuery } from '@things-factory/shell'

export const menuDetailsResolver = {
  async menuDetails(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(MenuDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
