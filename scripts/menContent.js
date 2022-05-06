import {contentList} from "./content.js"
var menContentList = ["NEW ARRIVALS","DESIGNERS","CLOTHING","SHOES","ACCESSORIES","8 BY YOOX","YOOXYGEN","COLLABORATIONS","BEST OFFERS"]
var menContentIDList = ["menNewArrivals","menDesigners","menClothing","menShoes","menAccessories","men8ByNoox","menYooxygen","menCollaborations","menBestOffers"]
import {menFunctions} from "./contentFunctions.js"

// for contentList(id of black strip,array of innerText of LI,array of idname for li,array of functions of innerdiv,number of elements in array)
contentList("content",menContentList,menContentIDList,menFunctions,9)