import { store } from '@things-factory/shell'
import baseMenu from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    baseMenu
  })
}
