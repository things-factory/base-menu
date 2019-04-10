import { UPDATE_BASE_MENU, ADD_ROUTING_TYPE } from '../actions/main'

const INITIAL_STATE = {
  menus: [],
  routingTypes: {
    RESOURCE: 'resource-form-main'
  }
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_BASE_MENU:
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

    default:
      return state
  }
}

export default main
