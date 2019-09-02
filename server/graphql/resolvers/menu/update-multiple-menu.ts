import { getRepository } from 'typeorm'
import { Menu } from '../../../entities'

export const updateMultipleMenu = {
  async updateMultipleMenu(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const menuRepo = getRepository(Menu)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        if (newRecord.parent && newRecord.parent.id) {
          newRecord.parent = await menuRepo.findOne(newRecord.parent.id)
        }

        const result = await menuRepo.save({
          domain: context.domain,
          creator: context.state.user,
          updater: context.state.user,
          ...newRecord
        })

        results.push({ ...result, cuFlag: '+' })
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const newRecord = _updateRecords[i]
        const menu = await menuRepo.findOne(newRecord.id)

        if (newRecord.parent && newRecord.parent.id) {
          newRecord.parent = await menuRepo.findOne(newRecord.parent.id)
        }

        const result = await menuRepo.save({
          ...menu,
          ...newRecord,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
