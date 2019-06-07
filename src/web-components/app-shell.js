import { LitElement, html } from "lit-element";

class AppShell extends LitElement {
  render() {
    return html``;
  }
}

if (!customElements.get("app-shell")) {
  customElements.define("app-shell", AppShell);
}
