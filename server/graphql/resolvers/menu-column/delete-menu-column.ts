import { getRepository } from 'typeorm'
import { MenuColumn } from '../../../entities'

export const deleteMenuColumn = {
  async deleteMenuColumn(_: any, { id }, context: any) {
    return await getRepository(MenuColumn).delete({ domain: context.domain, id })
  }
}
