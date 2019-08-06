import { buildQuery, ListParam } from '@things-factory/shell'
import { MenuColumn } from '../../../entities'
import { getRepository } from 'typeorm'

export const menuColumnsResolver = {
  async menuColumns(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(MenuColumn).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('MenuColumn.domain', 'Domain')
      .leftJoinAndSelect('MenuColumn.menu', 'Menu')
      .leftJoinAndSelect('MenuColumn.creator', 'Creator')
      .leftJoinAndSelect('MenuColumn.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
