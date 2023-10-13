import "./components/export"
import "./screens/dashboard"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('my-dashboard');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)