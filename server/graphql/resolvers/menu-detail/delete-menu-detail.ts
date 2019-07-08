import { getRepository } from 'typeorm'
import { MenuDetail } from '../../../entities'

export const deleteMenuDetail = {
  async deleteMenuDetail(_: any, { name }, context: any) {
    return await getRepository(MenuDetail).delete({ domain: context.domain, name })
  }
}
