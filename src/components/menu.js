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
          padding:10px
        }
        li.text a{
          color:#fff;
          text-decoration:none
        }
        li.text:nth-child(7n+1){
          background-color:#4397DE
        }
        li.text:nth-child(7n+2){
          background-color:#33B8D0
        }
        li.text:nth-child(7n+3){
          background-color:#4AB75F
        }
        li.text:nth-child(7n+4){
          background-color:#93796F
        }
        li.text:nth-child(7n+5){
          background-color:#F1AC42
        }
        li.text:nth-child(7n+6){
          background-color:#EA6361
        }
        li.text:nth-child(7n+7){
          background-color:#7386C3
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
            <li><a href=${`/${menu.routing || 'base-menu-main'}/${idx}`}>${menu.name}</a></li>
          `
        )}
      </ul>

      <section id="main">
        <ul>
          ${(this.menus[this.menuId || 0] || this.menus[0]).children.map(
            subMenu =>
              html`
                <li
                  class="${subMenu.class} text"
                  style="grid-row: span ${subMenu.routing_type.toUpperCase() === 'STATIC' ? 1 : 3}"
                >
                  ${subMenu.routing_type.toUpperCase() === 'STATIC'
                    ? html`
                        <a href="${subMenu.routing}">${subMenu.name}</a>
                      `
                    : html`
                        ${subMenu.id_field
                          ? html`
                              <a href="${this.routingTypes[subMenu.routing_type]}/${subMenu[subMenu.id_field]}"
                                >${subMenu.name}</a
                              >
                            `
                          : html`
                              <a href="${this.routingTypes[subMenu.routing_type]}">${subMenu.name}</a>
                            `}
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
