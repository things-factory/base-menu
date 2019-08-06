import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const menuDetailColumnsResolver = {
  async menuDetailColumns(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(MenuDetailColumn).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('MenuDetailColumn.domain', 'Domain')
      .leftJoinAndSelect('MenuDetailColumn.menuDetail', 'MenuDetail')
      .leftJoinAndSelect('MenuDetailColumn.creator', 'Creator')
      .leftJoinAndSelect('MenuDetailColumn.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
