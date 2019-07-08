import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const deleteMenuDetailButton = {
  async deleteMenuDetailButton(_: any, { id }) {
    return await getRepository(MenuDetailButton).delete(id)
  }
}
