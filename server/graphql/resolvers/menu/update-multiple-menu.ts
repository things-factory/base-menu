import { EntityManager, getManager } from 'typeorm'
import { createMenu, updateMenu } from './'

export const updateMultipleMenu = {
  async updateMultipleMenu(_: any, { patches }, context: any) {
    return await getManager().transaction(async (trxMgr: EntityManager) => {
      let results = []
      const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
      const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')

      if (_createRecords.length > 0) {
        for (let i = 0; i < _createRecords.length; i++) {
          const newRecord = _createRecords[i]
          const result = await createMenu(newRecord, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: '+' })
        }
      }

      if (_updateRecords.length > 0) {
        for (let i = 0; i < _updateRecords.length; i++) {
          const newRecord = _updateRecords[i]
          const result = await updateMenu(newRecord.id, newRecord, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: 'M' })
        }
      }

      return results
    })
  }
}
