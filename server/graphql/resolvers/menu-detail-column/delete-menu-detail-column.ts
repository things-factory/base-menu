import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const deleteMenuDetailColumn = {
  async deleteMenuDetailColumn(_: any, { id }) {
    return await getRepository(MenuDetailColumn).delete(id)
  }
}
