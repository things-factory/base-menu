import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { MenuButton } from '../../../entities'

export const menuButtonsResolver = {
  async menuButtons(_: any, params: ListParam) {
    const queryBuilder = getRepository(MenuButton).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('MenuButton.domain', 'Domain')
      .leftJoinAndSelect('MenuButton.menu', 'Menu')
      .leftJoinAndSelect('MenuButton.creator', 'Creator')
      .leftJoinAndSelect('MenuButton.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
