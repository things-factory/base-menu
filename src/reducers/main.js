import { UPDATE_BASE_MENU } from '../actions/main'

const INITIAL_STATE = {
  menus: []
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_BASE_MENU:
      return {
        ...state,
        menus: action.menus
      }

    default:
      return state
  }
}

export default main
