import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenu = {
  async deleteMenu(_: any, { name }, context: any) {
    await getRepository(Menu).delete({ domain: context.state.domain, name })
    return true
  }
}
