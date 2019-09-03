import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menusResolver = {
  async menus(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.domain = context.state.domain

    const [items, total] = await getRepository(Menu).findAndCount({
      ...convertedParams,
      relations: ['domain', 'parent', 'childrens', 'buttons', 'columns', 'creator', 'updater']
    })

    return { items, total }
  }
}
