let details = JSON.parse(localStorage.getItem("mens_data"))
import {contentList} from "./content.js"
var menContentList = ["NEW ARRIVALS","DESIGNERS","CLOTHING","SHOES","ACCESSORIES","8 BY YOOX","YOOXYGEN","COLLABORATIONS","BEST OFFERS"]
var menContentIDList = ["menNewArrivals","menDesigners","menClothing","menShoes","menAccessories","men8ByNoox","menYooxygen","menCollaborations","menBestOffers"]
import {menFunctions} from "./contentFunctions.js"

// for contentList(id of black strip,array of innerText of LI,array of idname for li,array of functions of innerdiv,number of elements in array)
contentList("content",menContentList,menContentIDList,menFunctions,9)
import { moveToDiv } from "./moveToDiv.js"


moveToDiv(details.mens_new_arrivals,"ContentDivRight1",4)
import { navbar, openForm, closeForm, checkLogin, opencc, closecc } from "../component/navbar1.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("open").addEventListener("click",openForm);

document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);
document.getElementById("custc").addEventListener("click",opencc);