let mens_new_arrivals = [
    {img:"https://www.yoox.com/images/items/12/12701727HA_14_f.jpg?impolicy=crop&width=306&height=390",img1:"https://www.yoox.com/images/items/12/12701727HA_10_r.jpg",img2:"https://www.yoox.com/images/items/12/12701727HA_10_d.jpg",img3:"https://www.yoox.com/images/items/12/12701727HA_10_a.jpg",
name:"BOTTEGA VENETA",
category:"Patterned Shirt",
price:1150,
off:29,
finalPrice:816},
{
    img:"https://www.yoox.com/images/items/13/13723856NF_14_f.jpg?impolicy=crop&width=306&height=390",name:"JAQUEMUS",category:"Casual pants",price:708,off:30,finalPrice:489
},
{
    img:"https://www.yoox.com/images/items/45/45653325JS_14_f.jpg?impolicy=crop&width=306&height=390",name:"OFF-WHITE",category:"Backpack & fanny pack",price:860,off:23,finalPrice:662
},
{
    img:"https://www.yoox.com/images/items/16/16102560VA_14_f.jpg?impolicy=crop&width=306&height=390",name:"MARNI",category:"Jackets",price:822,off:52,finalPrice:387
},
{
    img:"https://www.yoox.com/images/items/17/17199055SD_14_f.jpg?impolicy=crop&width=306&height=390",name:"BOTTEGA VENETA",category:"Boots",price:1208,off:26,finalPrice:862
},
{
    img:"https://www.yoox.com/images/items/45/45649416BE_14_f.jpg?impolicy=crop&width=306&height=390",name:"FENDI",category:"Backpack & fanny pack",price:1969,off:22,finalPrice:1535
},
{
    img:"https://www.yoox.com/images/items/12/12781445FW_14_f.jpg?impolicy=crop&width=306&height=390",name:"NEW BALANCE",category:"T-shirt",finalPrice:42,
},
{
    img:"https://www.yoox.com/images/items/17/17223165XI_14_f.jpg?impolicy=crop&width=306&height=390",name:"DRIES VAN NOTEN",category:"Sandals",price:880,off:26,finalPrice:644
},
{
    img:"https://www.yoox.com/images/items/13/13757132DI_14_f.jpg?impolicy=crop&width=306&height=390",name:"VANS",category:"Casual pants",finalPrice:99
},
]
let OOAK = [
    {img:"https://www.yoox.com/images/items/14/14193255PC_14_f.jpg?impolicy=crop&width=306&height=390",name:"OFF-WHITE",category:"Sweater",price:2061,off:46,finalPrice:1093},
    {img:"https://www.yoox.com/images/items/41/41946235CN_14_f.jpg?impolicy=crop&width=306&height=390",name:"STELLA McCARTNEY MEN",category:"Coat",price:1832,off:38,finalPrice:1120},
    {img:"https://www.yoox.com/images/items/14/14189081CP_14_f.jpg?impolicy=crop&width=306&height=390",name:"GUCCI",category:"Sweater",price:4903,off:47,finalPrice:2552},
    {img:"https://www.yoox.com/images/items/14/14201392TF_14_f.jpg?impolicy=crop&width=306&height=390",name:"FENDI",category:"Turtleneck",price:1062,off:42,finalPrice:611},
    {img:"https://www.yoox.com/images/items/14/14195648MB_14_f.jpg?impolicy=crop&width=306&height=390",name:"GUCCI",category:"Sweater",price:4220,off:38,finalPrice:2616},
    {img:"https://www.yoox.com/images/items/13/13693721NB_14_f.jpg?impolicy=crop&width=306&height=390",name:"BRUNELLO CUCINELLI",category:"Denim pants",price:1489,off:42,finalPrice:852},
    {img:"https://www.yoox.com/images/items/12/12735363LF_14_f.jpg?impolicy=crop&width=306&height=390",name:"GIVENCHY",category:"Hooded sweatshirt",price:2110,off:41,finalPrice:1225},
    {img:"https://www.yoox.com/images/items/12/12695025HJ_14_f.jpg?impolicy=crop&width=306&height=390",name:"Versace",category:"Sweatshirt",price:843,off:40,finalPrice:498},
    {img:"https://www.yoox.com/images/items/17/17170515GQ_14_f.jpg?impolicy=crop&width=306&height=390",name:"VALENTINO GARAVANI",category:"SNEAKERS",price:1065,off:33,finalPrice:707},
]

let data = {mens_new_arrivals,OOAK}

localStorage.setItem("mens_data",JSON.stringify(data))