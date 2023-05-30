
export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('input');
        something.textContent = "hola";
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-Form', Form)