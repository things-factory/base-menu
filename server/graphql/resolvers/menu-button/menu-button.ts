import { getRepository } from 'typeorm'
import { MenuButton } from '../../../entities'

export const menuButtonResolver = {
  async menuButton(_: any, { id }, context: any) {
    return await getRepository(MenuButton).findOne({
      where: { domain: context.domain, id },
      relations: ['domain', 'menu', 'creator', 'updater']
    })
  }
}
