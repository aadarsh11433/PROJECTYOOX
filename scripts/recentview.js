import { navbar, openForm, closeForm, checkLogin, opencc, closecc } from "../component/navbar1.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("open").addEventListener("click",openForm);

document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);
document.getElementById("custc").addEventListener("click",opencc);
let data = JSON.parse(localStorage.getItem("recentView"))||[]
import { recentDetailedProduct } from "./moveToDiv.js"
let today = new Date()
let TodayDate = today.getDate()
let currentMonth = today.getMonth()+1
let todayName = document.createElement("h2")
    let previousName = document.createElement("h2")
    document.getElementById("today").append(todayName)
    document.getElementById("previous").append(previousName)
data.forEach(({name,category,img,price,off,finalPrice,date,month})=>{
    
    
    let obj = {name,category,img,price,off,finalPrice}
    if(date==TodayDate && month==currentMonth){
        todayName.innerText = "TODAY's VIEWED"
        let box = document.createElement("div")
        let image = document.createElement("img")
        image.src = img
        box.append(image)
        box.onclick = ()=>{
            recentDetailedProduct(obj)
        }
        document.getElementById("today").append(box)
    }
    else {
        previousName.innerText = "PREVIOUSLY VIEWED"
        let box = document.createElement("div")
        let image = document.createElement("img")
        image.src = img
        box.append(image)
        box.onclick = ()=>{
            recentDetailedProduct(obj)
        }
        document.getElementById("previous").append(box)
    }

})