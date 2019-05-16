import { store } from '@things-factory/shell'
import { client } from '@things-factory/provider-base-gql'
import gql from 'graphql-tag'
import menu from './reducers/menu'
import { updateMenu } from './actions/menu'

async function getMenus() {
  const response = await client.query({
    query: gql`
      query {
        menus: userMenus {
          id
          name
          children {
            id
            name
            routingType
            idField
          }
        }
      }
    `
  })

  return response.data.menus
}

export default async function bootstrap() {
  store.addReducers({
    menu
  })

  const menus = await getMenus()
  store.dispatch(updateMenu(menus))
}
