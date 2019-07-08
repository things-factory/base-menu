import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenu = {
  async deleteMenu(_: any, { name }, context: any) {
    return await getRepository(Menu).delete({ domain: context.domain, name })
  }
}
