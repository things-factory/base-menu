import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const menuDetailColumnResolver = {
  async menuDetailColumn(_: any, { id }) {
    return await getRepository(MenuDetailColumn).findOne({
      where: { id },
      relations: ['domain', 'menuDetail', 'creator', 'updater']
    })
  }
}
