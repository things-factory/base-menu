import { getRepository } from 'typeorm'
import { MenuDetailButton } from '../../../entities'

export const menuDetailButtonsResolver = {
  async menuDetailButtons() {
    const repository = getRepository(MenuDetailButton)

    return await repository.find()
  }
}
