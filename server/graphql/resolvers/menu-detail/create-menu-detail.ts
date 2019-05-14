import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const createMenuDetail = {
  async createMenuDetail(_, { menuDetail: attrs }) {
    const repository = getRepository(MenuDetail)
    const newMenuDetail = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newMenuDetail)
  }
}
