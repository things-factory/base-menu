import { getRepository } from 'typeorm'
import { MenuButton } from '../../../entities'

export const deleteMenuButton = {
  async deleteMenuButton(_: any, { id }, context: any) {
    return await getRepository(MenuButton).delete({ domain: context.state.domain, id })
  }
}
