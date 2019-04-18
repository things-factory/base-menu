import { store } from '@things-factory/shell'
import menu from './reducers/menu'

export default function bootstrap() {
  store.addReducers({
    menu
  })
}
