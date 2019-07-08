import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const menuDetailResolver = {
  async menuDetail(_: any, { name }, context: any) {
    return await getRepository(MenuDetail).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'menu', 'buttons', 'columns', 'creator', 'updater']
    })
  }
}
