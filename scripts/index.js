import {navbar ,openForm, closeForm,checkLogin ,closecc,opencc} from "../component/navbar1.js";
document.getElementById("navbar").innerHTML=navbar();

import footer from "../component/footer1.js"

closecc();
document.getElementById("open").addEventListener("click",openForm);

document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);
document.getElementById("custc").addEventListener("click",opencc);

document.getElementById("footer").innerHTML=footer();




let images = document.querySelectorAll("img")

for(let a =1;a<images.length;a++){
    images[a].addEventListener("click",()=>{
        // window.location.href = "womens.html"
        console.log("gfdsgfdg")
    })
}