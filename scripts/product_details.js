let details =JSON.parse(localStorage.getItem("detailed_product"))
let mainImg = document.createElement("img")
mainImg.src = details.img
document.getElementById("topleft").append(mainImg)
document.getElementById("name").innerText = details.name
document.getElementById("category").innerText = details.category
document.getElementById("price").innerText = `US$${details.price},00`
document.getElementById("price").style.textDecoration = "line-through"
document.getElementById("off").innerText = `${details.off}%`
document.getElementById("fPrice").innerText = `US$${details.finalPrice},00`





