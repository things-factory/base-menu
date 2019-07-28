export const UPDATE_MENU = 'UPDATE_MENU'
export const UPDATE_MENU_PROVIDER = 'UPDATE_MENU_PROVIDER'
export const ADD_ROUTING_TYPE = 'ADD_ROUTING_TYPE'

export const updateMenu = menus => {
  return { type: UPDATE_MENU, menus }
}

export const addRoutingType = (routingType, page) => {
  return { type: ADD_ROUTING_TYPE, routingType, page }
}

export const updateMenuProvider = provider => {
  if (provider && typeof provider === 'function') {
    return { type: UPDATE_MENU_PROVIDER, provider }
  }
}
