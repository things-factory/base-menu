import { store } from '@things-factory/shell'
import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import '../components/menu'

class BaseMenuMain extends connect(store)(LitElement) {
  static get properties() {
    return {
      baseMenu: String
    }
  }
  render() {
    return html`
      <section>
        <h2>BaseMenu</h2>
        <menu-component></menu-component>
      </section>
    `
  }

  stateChanged(state) {
    this.baseMenu = state.baseMenu.state_main
  }
}

window.customElements.define('base-menu-main', BaseMenuMain)
