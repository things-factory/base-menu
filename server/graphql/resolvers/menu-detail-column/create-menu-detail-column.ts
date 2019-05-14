import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { MenuDetailColumn } from '../../../entities'

export const createMenuDetailColumn = {
  async createMenuDetailColumn(_, { menuDetailColumn: attrs }) {
    const repository = getRepository(MenuDetailColumn)
    const newMenuDetailColumn = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newMenuDetailColumn)
  }
}
