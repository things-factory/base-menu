import { UPDATE_MENU, UPDATE_MENU_PROVIDER, ADD_ROUTING_TYPE } from '../actions/menu'

const INITIAL_STATE = {
  menus: [],
  routingTypes: {}
}

const menu = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return {
        ...state,
        menus: action.menus
      }

    case ADD_ROUTING_TYPE:
      return {
        ...state,
        routingTypes: {
          ...state.routingTypes,
          [action.routingType]: action.page
        }
      }

    case UPDATE_MENU_PROVIDER:
      return {
        ...state,
        provider: action.provider
      }

    default:
      return state
  }
}

export default menu
