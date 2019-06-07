import { LitElement, html } from "lit-element";

class NavBar extends LitElement {
  render() {
    return html``;
  }
}

if (!customElements.get("nav-bar")) {
  customElements.define("nav-bar", NavBar);
}
