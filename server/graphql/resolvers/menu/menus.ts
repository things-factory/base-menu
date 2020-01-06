import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const menusResolver = {
  async menus(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.domain = context.state.domain

    var [items, total] = await getRepository(Menu).findAndCount({
      ...convertedParams,
      relations: ['domain', 'parent', 'role', 'childrens', 'buttons', 'columns', 'creator', 'updater'],
      order: {
        rank: 'ASC'
      }
    })

    // items = items
    //   .map((groupMenu: Menu) => {
    //     return {
    //       ...groupMenu,
    //       childrens: groupMenu.childrens
    //         .filter((subMenu: Menu) => !subMenu.hiddenFlag && !subMenu.category)
    //         .sort((a: Menu, b: Menu) => a.rank - b.rank)
    //     }
    //   })
    //   .filter((groupMenu: Menu) => groupMenu.childrens && groupMenu.childrens.length)

    return { items, total }
  }
}
