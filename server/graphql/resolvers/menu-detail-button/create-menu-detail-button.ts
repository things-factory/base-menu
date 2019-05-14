import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const createMenuDetailButton = {
  async createMenuDetailButton(_, { menuDetailButton: attrs }) {
    const repository = getRepository(MenuDetailButton)
    const newMenuDetailButton = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newMenuDetailButton)
  }
}
