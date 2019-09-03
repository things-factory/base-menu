import { getRepository, In } from 'typeorm'
import { Menu } from '../../../entities'

export const deleteMenus = {
  async deleteMenus(_: any, { names }, context: any) {
    await getRepository(Menu).delete({
      domain: context.state.domain,
      name: In(names)
    })

    return true
  }
}
