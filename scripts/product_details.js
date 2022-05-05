let details =JSON.parse(localStorage.getItem("detailed_product"))
let mainImg = document.createElement("img")
mainImg.src = details.img
document.getElementById("topleft").append(mainImg)
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
addToBag.innerText = "ADD TO SHOPPING BAG"
let addToDream = document.createElement("button")
addToDream.innerText = "ADD TO DREAM BOX"
let br = document.createElement("br")

document.getElementById("topright").append(addToBag,br,addToDream)

import { appendRecent } from "./moveToDiv.js"
appendRecent("recentView")





