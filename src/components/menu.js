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
    return {}
  }

  render() {
    return html`
      <ul class="nav">
        ${this._menus.map(
          menu => html`
            <li><a href=${menu.pageName}>${menu.name}</a></li>
          `
        )}
      </ul>
    `
  }

  stateChanged(state) {
    var m = []
    for (var i = 0; i < 5; i++) {
      m.push({
        name: `Menu ${i + 1}`,
        pageName: `menu_${i + 1}`
      })
    }
    this._menus = state.baseMenu.menus
    if (!state.baseMenu.menus || state.baseMenu.menus.length === 0) this._menus = m
  }
}

window.customElements.define('menu-component', MenuComponent)
