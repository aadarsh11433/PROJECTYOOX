

let dreamboxarr = JSON.parse(localStorage.getItem("dreamBox")) || [];

let bagdata = JSON.parse(localStorage.getItem("addToCart")) || [];

 console.log(dreamboxarr)
function create(ia){
    return document.createElement(ia);
}

function showdreamdata(dreamboxarr){


    document.getElementById("dreamcontent").innerHTML =null;

    if(dreamboxarr.length == 0){


        document.getElementById("dreamcontent").style.display = "Block"

      let gifimg =create("img");
      gifimg.src ="https://www.yoox.com/media/yoox16/myooxnew/emptypages/dreambox.gif"
      gifimg.setAttribute("class","gifimg")
      let heading = create("h3")
      heading.setAttribute("class","empty")
      heading.innerText = "YOUR DREAM BOX IS EMPTY"

      let para = create("p")
      para.innerText = "Let's change that right away by clicking on the heart icon to save your favorite items! This way you can always be up to date on their availability, be notified when they are about to sell out and add them directly to your Shopping Bag."
      para.setAttribute("class","empty")
      let statrtdreaming = create("button")
      statrtdreaming.innerText = "START DREAMING"
      statrtdreaming.setAttribute("class","starbutton")
      document.getElementById("dreamcontent").append(gifimg,heading,para,statrtdreaming)

    }


    dreamboxarr.forEach(({category,name,price,finalPrice,img,off,color},index)=>{
      
console.log(category,name,price,finalPrice,img,off,color,index)

     let mainbox =   create("div");
     let imgbox =    create("div");
     let image  =  create("img")
     let cross =       create("button")
     let brand  =create("div");
     let cat =create ("div")
     
     let fprice  =create("div");
    
     let offdiv  = create("div");
     let pr = create("span");
     let offf = create("span");
      
     cross.setAttribute("class","xbtn")
     image.src =  img;
     brand.innerText = name;
     cat.innerText =category;      
     fprice.innerText =  finalPrice;
     pr.innerText = `$${price}`
      offf.innerText = ` ${off} Off`;
       offdiv.append(pr,offf)
       cross.innerText ="X"
      imgbox.append(cross,image)
      image.setAttribute("class","proimg")
      

      let bagbtn =create("button")
      bagbtn.innerText = "ADD TO SHOPPING BAG"

      bagbtn.addEventListener("click",()=>{
           
          movetobag({name,category,price,off,finalPrice,img,color},index)
      })

      cross.addEventListener("click",()=>{
           
        deleteitem(index)
    })

      mainbox.append(imgbox,brand,cat,offdiv,fprice,bagbtn)

     document.getElementById("dreamcontent").append(mainbox)

    })
}

showdreamdata(dreamboxarr)


function movetobag (el,index) {

 bagdata.unshift(el);
 localStorage.setItem("addToCart",JSON.stringify(bagdata))
 dreamboxarr.splice(index,1)
 localStorage.setItem("dreamBox",JSON.stringify(dreamboxarr))

 showdreamdata(dreamboxarr)

}


function deleteitem (index){
    dreamboxarr.splice(index,1)
    localStorage.setItem("dreamBox",JSON.stringify(dreamboxarr))
   
    showdreamdata(dreamboxarr)
   

}

// category: "Casual pants"
// color: "Beige"
// finalPrice: 489
// img: "https://www.yoox.com/images/items/13/13723856NF_14_f.jpg?impolicy=crop&width=306&height=390"
// name: "JAQUEMUS"
// off: 30
// price: 708