import { moveToDiv,appendRecent } from "../../scripts/moveToDiv.js"
appendRecent("recent")
let details = JSON.parse(localStorage.getItem("mens_data"))
import {contentList} from "/./scripts/content.js"
var menContentList = ["NEW ARRIVALS","DESIGNERS","CLOTHING","SHOES","ACCESSORIES","8 BY YOOX",]
var menContentIDList = ["menNewArrivals","menDesigners","menClothing","menShoes","menAccessories","men8ByNoox",]
import {menFunctions} from "/./scripts/contentFunctions.js"

// for contentList(id of black strip,array of innerText of LI,array of idname for li,array of functions of innerdiv,number of elements in array)
contentList("content",menContentList,menContentIDList,menFunctions,6)
import { moveToDiv } from "/./scripts/moveToDiv.js"
let access = [details.menAccessories[1],details.menAccessories[8],details.menAccessories[16]]
moveToDiv(access,"8byYooxContent",3)


moveToDiv(details.mens_new_arrivals,"ContentDivRight1",4)
import { navbar, openForm, closeForm, checkLogin, opencc, closecc } from "../component/navbar1.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("open").addEventListener("click",openForm);

document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);
document.getElementById("custc").addEventListener("click",opencc);