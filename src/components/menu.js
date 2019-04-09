import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '@things-factory/shell'

export default class MenuComponent extends connect(store)(LitElement) {
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
        #main {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
        #main > ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          width: var(--menu-list-column-width);
          margin: var(--menu-list-column-margin);
        }
        #main > ul > li {
          border: 1px solid #ccc;
          margin: var(--menu-list-item-margin);
        }
      `
    ]
  }

  static get properties() {
    return {
      _menuId: String,
      _menus: Array,
      _currentMenu: Object,
      columnWidth: Number,
      columnCount: Number,
      items: Array,
      _columnCount: Number,
      _columns: Array
    }
  }

  constructor() {
    super()

    this._menus = []
    this._currentMenu = {
      children: []
    }

    this.columnWidth = 320
    this.maxColumnCount = 5
    this.columnGap = 5
    this.itemGap = 5
    this.items = []
    this._columnCount = 1

    this._columns = []
  }

  firstUpdated() {
    var ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        const cr = entry.contentRect
        this.calculateColumnCount()
        this.distributeColumnItems()
      }
    })

    // Observe one or multiple elements
    ro.observe(this.shadowRoot.getElementById('main'))
  }

  render() {
    return html`
      <style>
        :host {
          --menu-list-item-margin: ${this.itemGap}px 0;
          --menu-list-column-margin: 0 ${this.columnGap}px;
          --menu-list-column-width: ${this.columnWidth}px;
        }
      </style>
      <page-toolbar></page-toolbar>

      <ul class="nav">
        ${this._menus.map(
          (menu, idx) => html`
            <li><a href=${`/${menu.pageName || 'base-menu-main'}/${idx}`}>${menu.name}</a></li>
          `
        )}
      </ul>

      <section id="main">
        ${this._columns.map(
          c => html`
            <ul>
              ${c.map(
                (item, idx) =>
                  html`
                    <li class="${item.class}">
                      ${c[idx].routingType.toUpperCase() === 'RESOURCE'
                        ? html`
                            <a href="/resource-form-main/${c[idx].menuId}">${c[idx].name}</a>
                          `
                        : html`
                            <a href="${c[idx].pageName}">${c[idx].name}</a>
                          `}
                    </li>
                  `
              )}
            </ul>
          `
        )}
      </section>
    `
  }

  distributeColumnItems() {
    var columns = []

    this.items.forEach((item, idx) => {
      if (!columns[idx % this._columnCount]) columns[idx % this._columnCount] = []

      columns[idx % this._columnCount].push(item)
    })

    this._columns = columns
    this.requestUpdate()
  }

  calculateColumnCount() {
    var mainEl = this.shadowRoot.getElementById('main')
    if (!mainEl) return
    this._columnCount = Math.min(
      Math.floor(mainEl.clientWidth / (this.columnWidth + this.columnGap * 2)),
      this.maxColumnCount
    )
  }

  stateChanged(state) {
    this._menuId = state.app.resourceId
    this._menus = state.baseMenu.menus
    this._currentMenu = this._menus[this._menuId || 0] || {
      children: []
    }

    this.items = this._currentMenu.children || []
    if (this.items.length > 0) {
      this.items.forEach((item, idx) => (item.class = ['image', 'text'][Math.random() > 0.5 ? 0 : 1])) // TODO: 데이터를 기반으로 클래스를 초기화 하도록 수정
      this.calculateColumnCount()
      this.distributeColumnItems()
    }
  }
}

window.customElements.define('menu-component', MenuComponent)
