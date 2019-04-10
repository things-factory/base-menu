import { LitElement, html, css } from 'lit-element'

export default class MenuComponent extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          box-sizing: border-box;
        }
        .nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        #main > ul {
          display: grid;
          grid-template-columns: auto auto;
          grid-auto-rows: 150px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        #main > ul > li {
          border: 1px solid #ccc;
          margin: var(--menu-list-item-margin);
        }

        @media (min-width: 600px) {
          #main > ul {
            grid-template-columns: auto auto auto;
            grid-auto-rows: 200px;
          }
        }
        @media (min-width: 1200px) {
          #main > ul {
            grid-template-columns: auto auto auto auto;
            grid-auto-rows: 225px;
          }
        }
        @media (min-width: 1800px) {
          #main > ul {
            grid-template-columns: auto auto auto auto auto;
            grid-auto-rows: 240px;
          }
        }
        @media (min-width: 2400px) {
          #main > ul {
            grid-template-columns: auto auto auto auto auto auto;
            grid-auto-rows: 250px;
          }
        }
      `
    ]
  }

  static get properties() {
    return {
      menuId: String,
      menus: Array,
      _subMenus: Array,
      routingTypes: Object
    }
  }

  constructor() {
    super()

    this.menus = []
    this._subMenus = []
  }

  render() {
    return html`
      <page-toolbar></page-toolbar>

      <ul class="nav">
        ${this.menus.map(
          (menu, idx) => html`
            <li><a href=${`/${menu.pageName || 'base-menu-main'}/${idx}`}>${menu.name}</a></li>
          `
        )}
      </ul>

      <section id="main">
        <ul>
          ${(this.menus[this.menuId || 0] || this.menus[0]).children.map(
            subMenu =>
              html`
                <li
                  class="${subMenu.class}"
                  style="grid-row: span ${subMenu.routingType.toUpperCase() === 'STATIC' ? 1 : 3}"
                >
                  ${subMenu.routingType.toUpperCase() === 'STATIC'
                    ? html`
                        <a href="${subMenu.pageName}">${subMenu.name}</a>
                      `
                    : html`
                        <a href="${this.routingTypes[subMenu.routingType]}/${subMenu.menuId}">${subMenu.name}</a>
                      `}
                </li>
              `
          )}
        </ul>
      </section>
    `
  }
}

window.customElements.define('menu-component', MenuComponent)
