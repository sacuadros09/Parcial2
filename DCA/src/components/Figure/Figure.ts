export enum AttributeFigure{
    "name"="name",
    "url"= "url"
}


export default class Figure extends HTMLElement{
    name?:string
    url?:string




static get observedAttributes(){
    const attrs: Record<AttributeFigure,null> = {
        name:null,
        url:null
    }
    return Object.keys(attrs)
}


constructor(){
    super();
    this.attachShadow({mode:"open"});
}




attributeChangedCallback(
    propName:AttributeFigure  ,
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
        this.shadowRoot.innerHTML = `
        <section>
        <h1>${this.name}</h1>
        <img src=${this.url}>
        </section>
       
        `
    }
}

}


customElements.define ("my-figure",Figure)
