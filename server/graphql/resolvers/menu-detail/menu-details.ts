import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const menuDetailsResolver = {
  async menuDetails(_: any, params: ListParam) {
    const queryBuilder = getRepository(MenuDetail).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('MenuDetail.domain', 'Domain')
      .leftJoinAndSelect('MenuDetail.menu', 'Menu')
      .leftJoinAndSelect('MenuDetail.buttons', 'Buttons')
      .leftJoinAndSelect('MenuDetail.columns', 'Columns')
      .leftJoinAndSelect('MenuDetail.creator', 'Creator')
      .leftJoinAndSelect('MenuDetail.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
