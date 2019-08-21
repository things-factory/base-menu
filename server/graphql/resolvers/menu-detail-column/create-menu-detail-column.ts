import { getRepository } from 'typeorm'
import { MenuDetail, MenuDetailColumn } from '../../../entities'

export const createMenuDetailColumn = {
  async createMenuDetailColumn(_: any, { menuDetailColumn }, context: any) {
    return await getRepository(MenuDetailColumn).save({
      domain: context.domain,
      ...menuDetailColumn,
      menuDetail: await getRepository(MenuDetail).findOne({ id: menuDetailColumn.menuDetail }),
      createrId: context.state.user.id,
      updater: context.state.user
    })
  }
}
