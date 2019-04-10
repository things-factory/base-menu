export const UPDATE_BASE_MENU = 'UPDATE_BASE_MENU'
export const ADD_ROUTING_TYPE = 'ADD_ROUTING_TYPE'

export const updateBaseMenu = menus => {
  return { type: UPDATE_BASE_MENU, menus }
}

export const addRoutingType = (routingType, page) => {
  return { type: ADD_ROUTING_TYPE, routingType, page }
}
