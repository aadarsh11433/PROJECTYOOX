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


let designers = ['BOTTEGA VENETA', 'JAQUEMUS', 'OFF-WHITE', 'MARNI', 'FENDI', 'NEW BALANCE', 'DRIES VAN NOTEN', 'VANS', 'STELLA McCARTNEY MEN', 'GUCCI', 'BRUNELLO CUCINELLI', 'GIVENCHY', 'Versace', 'VALENTINO GARAVANI', 'BURBERRY', 'MAISON MARGIELA', 'ERMENEGILDO ZEGNA', 'DUNHILL', '8 by YOOX CASHMERE KNIT GLOVES']
let Category = []
men_data.mens_new_arrivals.forEach((ele)=>{
   
        Category.push(ele.category)
    
})
console.log(Category)










