export const UPDATE_BASE_MENU = 'UPDATE_BASE_MENU'

export const updateBaseMenu = menus => dispatch => {
  return { type: UPDATE_BASE_MENU, menus }
}
