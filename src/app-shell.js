import { LitElement, html } from "lit-element";

class AppShell extends LitElement {
  render() {
    return html`
      <p>Hello Gary! From my-element</p>
    `;
  }
}

if (!customElements.get("app-shell")) {
  customElements.define("app-shell", AppShell);
}
