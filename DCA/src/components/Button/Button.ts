export enum AttributeButton{
    "text_button"="text_button",
}


export default class Button extends HTMLElement{
    text_button?:string




static get observedAttributes(){
    const attrs: Record<AttributeButton,null> = {
        text_button:null,
    }
    return Object.keys(attrs)
}


constructor(){
    super();
    this.attachShadow({mode:"open"});
}




attributeChangedCallback(
    propName:AttributeButton  ,
    _:unknown,
    newValue:string
){
    switch (propName) {
        default:
            this[propName] = newValue
            break;
    }
}


connectedCallback(){
    this.render()
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = ``


        const button = this.ownerDocument.createElement("button")
        button.innerText = `${this.text_button}`

        this.shadowRoot?.appendChild(button)
    }
}

}


customElements.define ("my-button",Button)


