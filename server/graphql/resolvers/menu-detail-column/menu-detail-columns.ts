import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const menuDetailColumnsResolver = {
  async menuDetailColumns() {
    const repository = getRepository(MenuDetailColumn)

    return await repository.find()
  }
}
