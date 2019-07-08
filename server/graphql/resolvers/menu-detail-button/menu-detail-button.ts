import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const menuDetailButtonResolver = {
  async menuDetailButton(_: any, { id }) {
    return await getRepository(MenuDetailButton).findOne({
      where: { id },
      relations: ['domain', 'menuDetail', 'creator', 'updater']
    })
  }
}
