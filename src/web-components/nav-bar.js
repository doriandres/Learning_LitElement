import {
  LitElement,
  html,
  css
} from 'lit-element';

export default class NavBar extends LitElement {
  constructor() {
    super();
  }  
  static get name() {
    return 'nav-bar';
  }
  static get styles() {
    return css `
      nav{
        width: 100%;
        text-align: center;
        height: 60px;          
        position: relative;
        box-shadow: 0 4px 2px -2px #cecece;
      }
      .title{          
        font-size : 24px;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        top : 50%;
        transform : translateY(-50%);
      }
    `;
  }
  render() {
    return html `
      <nav>
        <span class="title">Nezumi</span>
      </nav>
      `;
  }
}

if (!customElements.get(NavBar.name)) {
  customElements.define(NavBar.name, NavBar);
}