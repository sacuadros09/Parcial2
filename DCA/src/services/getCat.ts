export async function getData(){
    try{
        const category = await fetch ("https://catfact.ninja/fact").then(res=>res.json())
        return category
    }catch (error){
        console.log(error)
    
    }



    
    }

    
export async function getImage(category:any){
    try{
        const category = await fetch ("https://cataas.com/#/").then(res=>res.json())
        return category
    }catch (error){
        console.log(error)
    
    }



    
    }

    
    