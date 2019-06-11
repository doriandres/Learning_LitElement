import {
    LitElement,
    html,
    css
} from 'lit-element';

export default class AppFooter extends LitElement {
    constructor() {
        super();
    }
    static get name() {
        return 'app-footer';
    }
    static get styles() {
        return css `
            footer{
                width: 100%;                    
                height: 100px;
                background-color: grey;
            }
        `;
    }
    render() {
        return html `
            <style>
                                
            </style>
            <footer>

            </footer>
            `;
    }
}

if (!customElements.get(AppFooter.name)) {
    customElements.define(AppFooter.name, AppFooter);
}