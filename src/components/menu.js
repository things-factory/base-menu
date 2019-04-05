import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '@things-factory/shell'

export default class MenuComponent extends connect(store)(LitElement) {
  static get styles() {
    return [
      css`
        .nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: row;
        }
      `
    ]
  }

  static get properties() {
    return {
      _menuId: String,
      _menus: Array,
      _currentMenu: Object
    }
  }

  constructor() {
    super()

    this._menus = []
    this._currentMenu = {
      children: []
    }
  }

  render() {
    return html`
      <ul class="nav">
        ${this._menus.map(
          (menu, idx) => html`
            <li><a href=${`/${menu.pageName || 'base-menu-main'}/${idx}`}>${menu.name}</a></li>
          `
        )}
      </ul>

      <ul>
          ${this._currentMenu.children.map(c => {
            return html`
              <li>
                <a href=${`/${c.pageName}`}>${c.name}</a>
              </li>
            `
          })}
      </ul>
      
    `
  }

  stateChanged(state) {
    this._menuId = state.app.resourceId
    this._menus = state.baseMenu.menus
    this._currentMenu = this._menus[this._menuId || 0] || {
      children: []
    }
  }
}

window.customElements.define('menu-component', MenuComponent)
