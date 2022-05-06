let productarr = [
    {
        img:"https://www.yoox.com/images/items/34/34755517AE_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"GUCCI",category:"Midi dresses",
        price:7284,
        off:"41% OFF",
        finalPrice:4228,
        hoverimg:"https://www.yoox.com/images/items/34/34755517ae_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center"    
    },
    {
        img:"https://www.yoox.com/images/items/15/15177370EC_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"GUCCI",category:"Long dresses",
        price:10907,
        off:"50% OFF",
        finalPrice:5453,
        hoverimg:"https://www.yoox.com/images/items/15/15177370ec_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center"    
    },
    {
        img:"https://www.yoox.com/images/items/17/17167316BP_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"DOLCE & GABBANA",category:"Sandals",
        price:2530,
        off:"41% OFF",
        finalPrice:1474,
        hoverimg:"https://www.yoox.com/images/items/17/17167316bp_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center"    
    },
    {
        img:"https://www.yoox.com/images/items/49/49708324UP_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"PACO RABANNE",category:"Blazers",
        price:1504,
        off:"59% OFF",
        finalPrice:605,
        hoverimg:"https://www.yoox.com/images/items/49/49708324up_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center"    
    },
    {
        img:"https://www.yoox.com/images/items/15/15194559IX_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"ETRO",category:"Midi dresses",
        price:3024,
        off:"48% OFF",
        finalPrice:1551,
        hoverimg:"https://www.yoox.com/images/items/15/15194559IX_14_e.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/50/50221161QM_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"TOUS",category:"Rings",
        price:250,
        off:"50% OFF",
        finalPrice:125,
        hoverimg:"https://www.yoox.com/images/items/50/50221161QM_14_e.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/15/15192156SN_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"ALBERTA FERRETTI",category:"Elegant dresses",
        price:6831,
        off:"47% OFF",
        finalPrice:3556,
        hoverimg:"https://www.yoox.com/images/items/15/15192156SN_14_r.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/13/13752581XO_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"GUCCI",category:"Casual pants",
        price:1246,
        off:"36% OFF",
        finalPrice:792,
        hoverimg:"https://www.yoox.com/images/items/13/13752581XO_14_r.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/54/54181844HW_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"ENRICO STELLA",category:"Jumpsuits/one pieces",
        price:662,
        off:"48% OFF",
        finalPrice:343,
        hoverimg:"https://www.yoox.com/images/items/54/54181844HW_14_r.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/12/12761171BX_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"ETRO",category:"Tunics and kaftans",
        price:1149,
        off:"44% OFF",
        finalPrice:637,
        hoverimg:"https://www.yoox.com/images/items/12/12761171BX_14_r.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/12/12754692JH_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"CATERINA GATTA x YOOX",category:"Tops",
        price:270,
        off:"30% OFF",
        finalPrice:180,
        hoverimg:"https://www.yoox.com/images/items/12/12754692JH_14_r.jpg?impolicy=crop&width=387&height=490"    
    },
    {
        img:"https://www.yoox.com/images/items/15/15183344AK_14_f.jpg?impolicy=crop&width=387&height=490",
        name:"CHLOÉ",category:"Modest fashion",
        price:"2,750.00",
        off:"46% OFF",
        finalPrice:"1,458.00",
        hoverimg:"https://www.yoox.com/images/items/15/15183344AK_14_r.jpg?impolicy=crop&width=387&height=490"    
    },
   ];

   import { moveTo } from "../scripts/moveToDiv.js";
   import {filteroptions } from "../scripts/filter.js"

     
function create (a)
{
    return document.createElement(a);
}
   function read (a){
       return (document.getElementById(a));
   }

   read("filters").innerHTML =filteroptions();
   
   productarr.forEach(({img,hoverimg,name,category,price,finalPrice,off})=>{

     let mainbox =create("div");
     let imgdiv = create("div");
     let image = create("img");
     image.src = img;
     imgdiv.append(image);
     imgdiv.addEventListener("mouseenter",()=>{
         image.src = hoverimg;
     })
     imgdiv.addEventListener("mouseleave",()=>{
        image.src = img;
    })
    let itemname = create("div");
    itemname.innerText =name;

    let catname = create("div");
    catname.innerText =category;

    let pricenoff =create("div");
    let strprice =create("span");
    let discount =create("span");
    strprice.innerText = `$ ${price}`;
    strprice.style.textDecoration = "line-through";
    discount.innerText = off
    pricenoff.append(strprice,discount);
    

    let pricediv =create("div");
    pricediv.innerText =`$ ${finalPrice}`
    

    let data ={
        img,hoverimg,name,category,price,finalPrice,off
    }
    mainbox.addEventListener("click",()=>{
        moveTo(data)
    })

   mainbox.append(imgdiv,itemname,catname,pricenoff,pricediv);
   document.getElementById("products").append(mainbox)

   })

   
   document.getElementById("categories_filter").addEventListener("click",()=>{
    document.getElementById("li_in_category").style.display = "Block";
    document.getElementById("li_in_designers").style.display = "none"
    document.getElementById("li_in_size").style.display ="none"
    document.getElementById("textinsize").style.display ="none";
    document.getElementById("li_in_colors").style.display ="none";
    read("li_in_material").style.display ="none";
    read("li_in_price").style.display="none";
    read("li_in_shopby_cat").style.display="none";
   })
   
   document.getElementById("designers_filter").addEventListener("click",()=>{
    document.getElementById("li_in_designers").style.display = "Block"
    document.getElementById("li_in_category").style.display = "none"
    document.getElementById("li_in_size").style.display ="none";
    document.getElementById("textinsize").style.display ="none";
    document.getElementById("li_in_colors").style.display ="none"
    read("li_in_material").style.display ="none";
    read("li_in_price").style.display="none";
    read("li_in_shopby_cat").style.display="none";
   })
   
   document.getElementById("price_filter").addEventListener("click",()=>{
   
    document.getElementById("li_in_price").style.display ="Block"
   
    document.getElementById("li_in_designers").style.display = "none"
    document.getElementById("li_in_category").style.display = "none"
    document.getElementById("li_in_size").style.display ="none"
    document.getElementById("textinsize").style.display ="none";
    document.getElementById("li_in_colors").style.display ="none";
    read("li_in_material").style.display="none";
    read("li_in_shopby_cat").style.display="none";
   }) 
   
   
   document.getElementById("color_filter").addEventListener("click",()=>{
   
    document.getElementById("li_in_colors").style.display ="Block"
   
    document.getElementById("li_in_designers").style.display = "none"
    document.getElementById("li_in_category").style.display = "none"
    document.getElementById("li_in_size").style.display ="none"
    document.getElementById("textinsize").style.display ="none";
     read("li_in_material").style.display ="none";
    read("li_in_price").style.display="none";
    read("li_in_shopby_cat").style.display="none";
   })   
   
   
   
   read("material_filter").addEventListener("click",()=>{
   
   read("li_in_material").style.display = "Block"
    read("li_in_designers").style.display = "none"
    read("li_in_category").style.display = "none"
    read("li_in_size").style.display ="none"
    read("textinsize").style.display ="none";
    read("li_in_price").style.display="none";
    read("li_in_colors").style.display ="none"
    read("li_in_shopby_cat").style.display="none";
   })
   
   read("shopbycat").addEventListener("click",()=>{
   
    read("li_in_shopby_cat").style.display = "Block"
        read("li_in_designers").style.display = "none"
        read("li_in_category").style.display = "none"
        read("li_in_price").style.display="none";
        read("li_in_size").style.display ="none"
        read("textinsize").style.display ="none";
        read("li_in_colors").style.display ="none"
        read("li_in_material").style.display ="none";
    
    })
   //    function closecolorfilter(){
   //     document.getElementById("li_in_colors").style.display ="None"
   //     document.getElementById("color_filter").addEventListener("click",()=>{
           
   //     })
   //    }
   
   
   
   document.getElementById("size_filter").addEventListener("click",()=>{
    
    read("textinsize").style.display ="block";
    document.getElementById("li_in_size").style.display = "Grid"
   
    document.getElementById("li_in_category").style.display = "none"
    read("li_in_designers").style.display="none";
    read("li_in_price").style.display="none";
    read("li_in_colors").style.display="none";
    read("li_in_shopby_cat").style.display="none";
    read("li_in_material").style.display = "none"
   
   
   });
