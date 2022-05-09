import {navbar} from "../component/navbar1.js"


import {openForm, closeForm,checkLogin ,closecc,opencc} from "../component/navbar1.js";


document.querySelector("#navbar").innerHTML=navbar();
closecc();

document.getElementById("open").addEventListener("click",openForm);
document.getElementById("custc").addEventListener("click",opencc);
document.querySelector("#login").addEventListener("click",checkLogin);
document.getElementById("close").addEventListener("click",closeForm);
document.getElementById("ccclose").addEventListener("click",closecc);







let checkout11=    JSON.parse(localStorage.getItem("addToCart")) ||[];

 function create(a){
     return document.createElement(a);
 }

 let dreamarr = JSON.parse(localStorage.getItem("dreamBox")) ||[];

function append12(checkout11)
{

    document.getElementById("container").innerHTML =null;
    // let sum = 0;
   checkout11.forEach(function({img,name,category,price,off,finalPrice},index){
    
   let mainbox  =create("div")

    let div1 =create("div");
    let div1a =create("div")
     let image  =create("img");

     image.src = img;
     let brand = create("p");
     brand.innerText = name;
     let cat = create("p");
     cat.innerText = category;
     div1a.append(brand,cat)

     div1.append(image,div1a)

     let div2 =create("div");
     let div2a =create("div")
     let input  = create("input");
     let plus =create("i");
     let minus = create("i");

     plus.setAttribute("class","fa-solid fa-circle-plus");
      minus.setAttribute("class","fa-solid fa-circle-minus")
     input.setAttribute("placeholder","1");

      
       let div2b = create("div");
      
       let remove =create("i");
       remove.setAttribute("class","fa-solid fa-xmark");
 
       let removetext =create("span");
       removetext.innerText = "REMOVE";
       div2b.append(remove,removetext)
 
       let div2c = create("div");
      
       let heart =create("i");
       heart.setAttribute("class","fa-thin fa-heart");
 
       let hearttext =create("span");
       hearttext.innerText = "MOVE TO YOUR DREAMBOX";
       

     div2a.append(minus,input,plus)
     div2b.append(remove,removetext)
     div2b.addEventListener("click",()=>{
         removefrombag(index)
     })
     div2c.append(heart,hearttext)
     div2c.addEventListener("click",()=>{
         
        let data ={name,category,finalPrice,price,off,img}
        movetodream(data,index)
     })
     div2.append(div2a, div2b,div2c)

     let div3 = create("div");
     let pri  =create("p");
     let dis = create("p");
     let fpri =create("p");
     fpri.setAttribute("class","addit")

     pri.innerText = `US$${price}`
     pri.style.color = "gray"
        fpri.innerText = `US$${finalPrice }`

     plus.addEventListener("click",()=>{
        input.value = +(input.value) +1;
        pri.innerText = `US$${price* (+(input.value))}`
        fpri.innerText = `US$${finalPrice *(+(input.value))}`

        // sum =0 ;
        // sum = sum + (+(fpri.innerText))
        total()

        document.getElementById("amounttopay").innerText =`US$${26+(+localStorage.getItem("totalamount"))}`

       })
  
       minus.addEventListener("click",()=>{
           if (+(input.value) >1){
          input.value = +(input.value) -1;
          pri.innerText = `US$${price* (+(input.value))}`
          fpri.innerText = `US$${finalPrice *(+(input.value))}`

          total()

          document.getElementById("amounttopay").innerText =`US$${26+(+localStorage.getItem("totalamount"))}`
        }
         })




     input.addEventListener("input",()=>{
         pri.innerText =  `US$${price* (+(input.value))}`
         fpri.innerText =  `US$${finalPrice *(+(input.value))}`
         total()
         document.getElementById("amounttopay").innerText =`US$${26+(+localStorage.getItem("totalamount"))}`
     })
     dis.innerText =off

      div1.setAttribute("class","boxone")
      div2.setAttribute("class","boxtwo")
      div3.setAttribute("class","boxthree")

      div3.append(pri,dis,fpri)

    mainbox.append(div1,div2,div3)
     
//    sum = sum + (+fpri.innerText);

//    localStorage.setItem("totalamount",JSON.stringify(sum))
     
// console.log(sum)
document.querySelector("#container").append(mainbox) 
   })
  
}
append12(checkout11)

console.log(localStorage.getItem("totalamount"))



function total(){


    let sum = 0;
      let  pricetosum   = document.querySelectorAll(".addit")

     for(let a=0;a<pricetosum.length;a++){
        //  console.log(pricetosum[a].innerText)
         sum = sum + (+(pricetosum[a].innerText.split("$")[1]))
     }
     
     console.log(sum) ;
     localStorage.setItem("totalamount",JSON.stringify(sum))
}
total();



function removefrombag(index){
    checkout11.splice(index,1);
    localStorage.setItem("addToCart",JSON.stringify(checkout11));
    append12(checkout11)
    document.getElementById("itemcount").innerText =checkout11.length;
    total()
    document.getElementById("amounttopay").innerText =`US$${26+(+localStorage.getItem("totalamount"))}`
}

function movetodream(data,index){
    dreamarr.unshift(data);
    localStorage.setItem("dreamBox",JSON.stringify(dreamarr))
    checkout11.splice(index,1);
    localStorage.setItem("addToCart",JSON.stringify(checkout11));
    append12(checkout11)
    document.getElementById("itemcount").innerText =checkout11.length;
total()
    document.getElementById("amounttopay").innerText =`US$${26+(+localStorage.getItem("totalamount"))}`
}
document.getElementById("itemcount").innerText =checkout11.length;



document.getElementById("idiv1").addEventListener("click",()=>{
    window.location.href = "payment.html"

})

document.querySelector(".placeorderbutton").addEventListener("click",()=>{
    window.location.href = "payment.html"
    
})

document.getElementById("amounttopay").innerText =`US$${26+(+localStorage.getItem("totalamount"))}`