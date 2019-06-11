import { LitElement, html, css } from 'lit-element';

import '@polymer/iron-dropdown/iron-dropdown.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-custom-field/vaadin-custom-field.js'
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-custom-field/vaadin-custom-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-checkbox/vaadin-checkbox.js';
import '@vaadin/vaadin-lumo-styles/icons.js';

class MultiSelect extends LitElement {
    static get properties() {
      return {
          data: { type: Array },
          cantidad: { type: Number},
          texto: { type: String},
          value: { type: Array }
      }
    }

    setData(value) {
        this.data = value;
    }

    render() {
        return html`
        <style>
            #dropdown {
                margin-top: 25px;
                background-color: white;
            }
        </style>
        <vaadin-custom-field>
            <vaadin-text-field @change="${this._changeText}" id="baseText" clear-button-visible>
                <iron-icon @click="${this._openCombo}" icon="lumo:dropdown" slot="suffix"></iron-icon>
            </vaadin-text-field>
        </vaadin-custom-field>
        <iron-dropdown @opened-changed="${this._openChange}" id="dropdown" no-overlap>
            <vaadin-list-box slot="dropdown-content">
                ${ this.data ? this.data.map((i,index) => html`
                <vaadin-item>
                    <vaadin-custom-field>
                        <vaadin-checkbox id="combd_${index}" .value="${i.active}" theme="small">${i.talla}</vaadin-checkbox>
                        <vaadin-number-field .value="${i.cantidad}" theme="small"></vaadin-number-field>
                    </vaadin-custom-field>
                </vaadin-item>
                `) : html ``}
            </vaadin-list-box>
        </iron-dropdown>
        `
    }

    _lucas(event) {
        console.log(event);
    }

    _openChange(event) {
        if(!event.detail.value)
        {
            const comboBox = this.shadowRoot.querySelectorAll("vaadin-item");
            const comboText = this.shadowRoot.getElementById("baseText");
            if(comboBox)
            {
                this.texto = "";
                this.cantidad = 0;
                this.value = [];
                for (const co of comboBox) {
                    let chk = co.querySelector("vaadin-checkbox");
                    if(chk.checked)
                    {
                        let cant = parseInt(co.querySelector("vaadin-number-field").value, 10);
                        this.value.unshift({"talla": chk.innerText, "cantidad" : cant});
                        this.cantidad += cant;
                        this.texto += chk.innerText + ","; 
                    }
                }
                this.texto = this.texto.replace(/,$/, "");
                comboText.value = this.texto;
                event.detail["total"] = this.cantidad;
                this.dispatchEvent(new CustomEvent('totalChange', {detail: event.detail}));
            }              
        }
    }

    _openCombo() {
        const comboBox = this.shadowRoot.querySelector('#dropdown');
        comboBox.open();
    }

    _changeText(event) {
        const comboBox = this.shadowRoot.querySelectorAll("vaadin-item");
        const comboText = this.shadowRoot.getElementById("baseText");
        if(comboBox)
        {
            this.texto = "";
            this.cantidad = 0;
            for (const co of comboBox) {
                let chk = co.querySelector("vaadin-checkbox");
                if(chk.checked)
                {
                    co.querySelector("vaadin-number-field").value = 0;
                    chk.checked = false; 
                }
            }
            this.value = [];
            comboText.value = "";
            event.detail["total"] = this.cantidad;
            this.dispatchEvent(new CustomEvent('totalChange', {detail: event.detail}));
        }
    }
}

customElements.define('multi-select', MultiSelect);