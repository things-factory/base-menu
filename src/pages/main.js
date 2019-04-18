import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import '../components/menu'

class BaseMenuMain extends connect(store)(PageView) {
  static get properties() {
    return {
      menuId: String,
      menus: Array,
      routingTypes: Object
    }
  }
  render() {
    return html`
      <section>
        <h2>BaseMenu</h2>
        <menu-component
          .menus="${this.menus}"
          .routingTypes="${this.routingTypes}"
          .menuId="${this.menuId}"
        ></menu-component>
      </section>
    `
  }

  stateChanged(state) {
    this.menus = state.baseMenu.menus
    this.routingTypes = state.baseMenu.routingTypes
    this.menuId = state.app.resourceId
  }
}

window.customElements.define('base-menu-main', BaseMenuMain)
