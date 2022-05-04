function moveToDiv(a,b){

    a.forEach(({img,name,price,finalPrice,off,category})=>{
    
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
        let Data = {
            img,name,price,finalPrice,off,category
        }
        div.onclick = ()=>{
            moveTo(Data)
        }
        div.append(image,Pname,p_category,p,FPrice)
        document.getElementById(b).append(div)
        
    })
}
function moveTo(data){
    
    window.location.href = "product_details.html"
    localStorage.setItem("detailed_product",JSON.stringify(data))
}






export {moveToDiv, moveTo}