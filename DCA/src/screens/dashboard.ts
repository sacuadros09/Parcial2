import "../components/export"
import { AttributeButton } from "../components/Button/Button"
import { AttributeFigure } from "../components/Figure/Figure"
import { getData } from "../services/getCat"
import { getImage } from "../services/getCat"


class Dashboard extends HTMLElement{
constructor(){
    super()
    this.attachShadow({mode:"open"})
}

async connectedCallback(){
    const category = await getData()
    this.render(category)
}


render(category:any){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=`
        <h1 class="tittle">Cat Facts sin imagen porque no lo pude separar :(</h1>
        `
        
            const button = this.ownerDocument.createElement("my-button")
            button.setAttribute(AttributeButton.text_button,'Traer gato')


            button.addEventListener("click",async ()=>{
                const cat= await getData()
                console.log(cat)
               
            
                const Figure = this.ownerDocument.createElement("my-figure")
                Figure.setAttribute(AttributeFigure.name,category.fact)
                Figure.setAttribute(AttributeFigure.url,category.fact)
                this.shadowRoot?.appendChild(Figure)


            })
            this.shadowRoot?.appendChild(button)


    }
}
}


customElements.define ("my-dashboard",Dashboard)
