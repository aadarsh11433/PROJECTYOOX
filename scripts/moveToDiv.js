function moveToDiv(a,b){

    a.forEach(({img,name,price,finalPrice,off,category,color})=>{
    
        let div = document.createElement("div")
        
        let image = document.createElement("img")
        image.src = img
        let Pname = document.createElement("h4")
        
        Pname.innerText = name
        let p_category = document.createElement("p")
        p_category.innerText = category
        let p = document.createElement("div")
        let Price = document.createElement("p")
        
        
        
        
        
        let Off = document.createElement("p")
        
        
        if(price!=undefined && off!=undefined){
            
            Price.innerText = `US$${price},00`
            Off.innerText = `${off}% OFF`
        }
        Price.style.textDecoration = "line-through"
        p.append(Price,Off)
        let FPrice = document.createElement("p")
        FPrice.innerText = `US$${finalPrice},00`
        let today = new Date()
        let date = today.getDate()
        let month = today.getMonth()+1
        let Data = {
            img,name,price,finalPrice,off,category,date,month,color
        }
        
        div.onclick = ()=>{
            moveTo(Data)
        }
        div.append(image,Pname,p_category,p,FPrice)
        document.getElementById(b).append(div)
        
    })
}
function moveTo(data){
    recentView(data)
    window.location.href = "product_details.html"
    localStorage.setItem("detailed_product",JSON.stringify(data))
}
function recentView(data){
    let recentViewed = JSON.parse(localStorage.getItem("recentView"))||[]
    recentViewed.push(data)
    localStorage.setItem("recentView",JSON.stringify(recentViewed))
}
function appendRecent(id){
    
    let recentViewed = JSON.parse(localStorage.getItem("recentView"))||[]
    
    let length = recentViewed.length
    
    
    if(length!=0){
        let h2 = document.createElement("h2")
    h2.innerText = "RECENTLY VIEWED"
    let an = document.createElement("a")
    let div = document.createElement("div")
    an.href = "recentview.html"
    an.innerText = "VIEW ALL"
    div.id = "recentProduct"
    
    document.getElementById(id).append(h2,an,div)
        
        for(var x=recentViewed.length-1;x>=recentViewed.length-3;x--){
            
           
            
            
            if(recentViewed[x]!=undefined){
                
                let name = recentViewed[x].name
                let category=recentViewed[x].category
                let img = recentViewed[x].img
                let price = recentViewed[x].price
                let off = recentViewed[x].off
                let finalPrice = recentViewed[x].finalPrice
                let color = recentViewed[x].color
                let obj = {name,category,img,price,off,finalPrice,color}
                let box = document.createElement("div")
                let h3 = document.createElement("h3")
                h3.innerText = name
                let Category = document.createElement("p")
                Category.innerText =category
                let Img = document.createElement("img")
                Img.src = img
                let Price = document.createElement("p")
                let Off = document.createElement("p")
                
                if(recentViewed[x].price!=undefined && recentViewed[x].off!=undefined){
                Price.innerText = `US$${recentViewed[x].price},00`
                    
                    Off.innerText =`${recentViewed[x].off}% OFF` 
                }
                let fPrice = document.createElement("p")
                fPrice.innerText = `US$${recentViewed[x].finalPrice},00`
                box.onclick = ()=>{

                    recentDetailedProduct(obj)

                }
                box.append(Img,h3,Category,Price,Off,fPrice)
                div.append(box)
            }
        }
    }
   
}
function recentDetailedProduct(data){
        
    window.location.href = "/product_details.html"
    localStorage.setItem("detailed_product",JSON.stringify(data))
}





export {moveToDiv,appendRecent,recentDetailedProduct}