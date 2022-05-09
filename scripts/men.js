let men_data = JSON.parse(localStorage.getItem("mens_data"))||[]


import {navbar ,openForm, closeForm,checkLogin ,closecc,opencc} from "../component/navbar1.js";
document.getElementById("navbar").innerHTML = navbar()  

//    window.addEventListener("load",closecc) ;

   closecc()


document.getElementById("open").addEventListener("click",openForm);
document.getElementById("custc").addEventListener("click",opencc);
document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);










import { moveToDiv,appendRecent } from "./moveToDiv.js"
appendRecent("recentView")
moveToDiv(men_data.mens_new_arrivals,"new_arrivals")
import footer from "/./component/footer1.js"
document.getElementById("footer").innerHTML=footer()

moveToDiv(men_data.OOAK,"OOAK")
import { redirect } from "./redirect.js"

import {navbar ,openForm, closeForm,checkLogin ,closecc,opencc} from "../component/navbar1.js";
document.getElementById("navbar").innerHTML = navbar()  

let designers = ['BOTTEGA VENETA', 'JAQUEMUS', 'OFF-WHITE', 'MARNI', 'FENDI', 'NEW BALANCE', 'DRIES VAN NOTEN', 'VANS', 'STELLA McCARTNEY MEN', 'GUCCI', 'BRUNELLO CUCINELLI', 'GIVENCHY', 'Versace', 'VALENTINO GARAVANI', 'BURBERRY', 'MAISON MARGIELA', 'ERMENEGILDO ZEGNA', 'DUNHILL', '8 by YOOX CASHMERE KNIT GLOVES']
let Category=['Sweater', 'Coat', 'Turtleneck', 'Denim pants', 'Hooded sweatshirt', 'Sweatshirt', 'SNEAKERS', 'Patterned Shirt', 'Casual pants', 'Backpack & fanny pack', 'Jackets', 'Boots', 'T-shirt', 'Sandals',"Hats"]
let shoesCategory=['Sneakers', 'Loafers', 'Sandals']
let shoesDesigners = ['DIEMMEca', 'SAINT LAURENT', 'GUCCI', 'VALENTINO GARAVANI', 'ETRO', 'DRIES VAN NOTEN', 'JIL SANDER', 'AMBUSH', 'SUICOKE', 'BIRKENSTOCK', 'DOLCE & GABBANA', 'GIVENCHY']
let OOAK = men_data.OOAK
let newArrivals = men_data.mens_new_arrivals
let menHats = men_data.menHats
let menShoes = men_data.menShoes
let menPants = men_data.menPants
let menTshirts = men_data.menTshirts
let accessories = men_data.menAccessories
let slider = document.querySelectorAll(".slider")
let slidePrice = document.querySelectorAll(".slider>h")

let accessCat = ['Sunglasses', 'Wrist watches', 'Wallets']


