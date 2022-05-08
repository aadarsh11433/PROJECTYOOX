import { navbar, openForm, closeForm, checkLogin, opencc, closecc } from "../component/navbar1.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("open").addEventListener("click",openForm);

document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);
document.getElementById("custc").addEventListener("click",opencc);
let details =JSON.parse(localStorage.getItem("detailed_product"))
let mainImg = document.createElement("img")
mainImg.style.width = "100%"
mainImg.style.height = "100%"

mainImg.src = details.img
let imgDiv = document.getElementById("topleftImg")
imgDiv.style.margin ="auto"
imgDiv.style.width = "250px"
imgDiv.style.height = "350px"
imgDiv
imgDiv.append(mainImg)
document.getElementById("name").innerText = details.name
document.getElementById("category").innerText = details.category
document.getElementById("price").innerText = `US$${details.price},00`
document.getElementById("price").style.textDecoration = "line-through"
document.getElementById("off").innerText = `${details.off}% OFF`
document.getElementById("fPrice").innerText = `US$${details.finalPrice},00`
if(details.color!=undefined){
    document.getElementById("color").innerText=details.color
    if(details.color=="Black"){
        document.querySelector("#color_radio").style.accentColor = "black"
    }
    else if(details.color=="Black"){
        document.querySelector("#color_radio").style.accentColor = "black"
    }
}
else{
    document.getElementById("color").innerText= "Black"
    document.getElementById("color_radio").style.accentColor = "black"
}
let addToBag = document.createElement("button")
addToBag.style.width = "100%"
addToBag.style.color = "white"
addToBag.onmouseenter = ()=>{
    addToBag.style.color = "grey"
}
addToBag.onmouseleave=()=>{
    addToBag.style.color = "white"
}

addToBag.onclick=()=>{
    let cartData = JSON.parse(localStorage.getItem("addToCart"))||[]
    
    cartData.push(details)
    localStorage.setItem("addToCart",JSON.stringify(cartData))
}


document.querySelector("head>title").innerText=details.name
addToBag.style.height = "50px"
addToBag.style.backgroundColor = "#333333"
addToBag.innerText = "ADD TO SHOPPING BAG"
let addToDream = document.createElement("button")
addToDream.style.width="100%"
addToDream.style.height="50px"
addToDream.style.marginTop = "10px"
addToDream.innerText = "ADD TO DREAM BOX"
let br = document.createElement("br")
addToDream.onclick=()=>{
    let DreamData = JSON.parse(localStorage.getItem("dreamBox"))||[]
    let flag 
    for(let x =0;x<DreamData.length;x++){
       if(DreamData[x].img==details.img){
           flag=true
       }
    }
    
    if(flag!=true){
        DreamData.push(details)
    }
    localStorage.setItem("dreamBox",JSON.stringify(DreamData))
}

document.getElementById("topright").append(addToBag,br,addToDream)


import { appendRecent } from "./moveToDiv.js"
appendRecent("recentView")





import footer from "../component/footer1.js"
document.getElementById("footer").innerHTML=footer();