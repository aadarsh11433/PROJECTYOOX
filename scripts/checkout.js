import navbar from "../component/navbar1.js"
document.querySelector("#navbar").innerHTML=navbar();


let checkout11=[
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
    }
]
function append12(checkout11)
{
   checkout11.forEach(function({img,name,category,price,off,finalPrice}){
    let small=document.createElement("div")
    small.setAttribute("id","iidiv")
 
    let img1=document.createElement("img");
    img1.setAttribute("class","img1")
    let span1 =document.createElement("span")
    span1.setAttribute("id","span1")
    let p1=document.createElement("p")
    p1.setAttribute("id","ip1")
       img1.src=img;
       span1.innerText=name;
       p1.innerText=category
    //    span1.append(p1)
 small.append(img1,span1,p1)
document.querySelector("#idiv21").append(small) 
   })
  
}
append12(checkout11)
