import {
  LitElement,
  html,
  css
} from 'lit-element';

import './nav-bar';
import './app-footer';
import './multi-select'

export default class AppShell extends LitElement {
  constructor() {
    super();
    this.values = [];
  }
  static get name() {
    return 'app-shell';
  }
  static get styles() {
    return css `
          :host {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          main {
            flex: 1 0 auto;
          }
      `;
  }
  static get properties() {
    return {
      values : { type: Array }
    };
  }

  get multiSelectField(){
    return this.shadowRoot.querySelector('multi-select');
  }

  get multiSelectValue(){
    return  this.multiSelectField ? Array.isArray(this.multiSelectField.value) ? this.multiSelectField.value : [] : [];
  }

  add(){    
    this.values = this.multiSelectValue;
  }

  render() {
    return html `
      <nav-bar></nav-bar>
      <main>
      <div>
          ${
            this.values.map((v)=> html`
              <div>${v.talla}</div>
            `)
          }
        </div>
        <!-- <button @click=${this.add}>Data</button> -->
        <multi-select @totalChange=${this.add} .data="${[
          {
            talla : 'Gary',
            cantidad : 1
          }, 
          {
            talla : 'Natalia',
            cantidad : 1
          }
          ,
          {
            talla : 'Hector',
            cantidad : 1
          }
        ]}">          
        </multi-select>
        
      </main>          
      <app-footer></app-footer>
    `;
  }
}

if (!customElements.get(AppShell.name)) {
  customElements.define(AppShell.name, AppShell);
}