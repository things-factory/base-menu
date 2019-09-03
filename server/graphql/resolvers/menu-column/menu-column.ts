import { getRepository } from 'typeorm'
import { MenuColumn } from '../../../entities'

export const menuColumnResolver = {
  async menuColumn(_: any, { id }, context: any) {
    return await getRepository(MenuColumn).findOne({
      where: { domain: context.state.domain, id },
      relations: ['domain', 'menu', 'creator', 'updater']
    })
  }
}
