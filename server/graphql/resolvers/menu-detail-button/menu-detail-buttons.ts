import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const menuDetailButtonsResolver = {
  async menuDetailButtons(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(MenuDetailButton).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('MenuDetailButton.domain', 'Domain')
      .leftJoinAndSelect('MenuDetailButton.menuDetail', 'MenuDetail')
      .leftJoinAndSelect('MenuDetailButton.creator', 'Creator')
      .leftJoinAndSelect('MenuDetailButton.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
