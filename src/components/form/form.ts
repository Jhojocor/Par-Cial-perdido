
export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const container = this.ownerDocument.createElement('div');
        const Name = this.ownerDocument.createElement('input');
        Name.textContent = "Nombre de la receta";
        const Ingredientes = this.ownerDocument.createElement('input');
        Ingredientes.textContent = "Lista de ingredientes";
        const Instrucciones = this.ownerDocument.createElement('input');
        Instrucciones.textContent = "Instrucciones";
        const Img = this.ownerDocument.createElement('input');
        Img.textContent = "Aquí va el link de la imagen";
        this.shadowRoot?.appendChild(container);
    }
}

customElements.define('app-Form', Form)