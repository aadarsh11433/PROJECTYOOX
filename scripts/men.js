let men_data = JSON.parse(localStorage.getItem("mens_data"))||[]

import { moveToDiv,appendRecent } from "./moveToDiv.js"
appendRecent("recentView")
moveToDiv(men_data.mens_new_arrivals,"new_arrivals")

moveToDiv(men_data.OOAK,"OOAK")
import {appendContent,contentList} from "./content.js"



var menContentList = ["NEW ARRIVALS","DESIGNERS","CLOTHING","SHOES","ACCESSORIES","8 BY NOOX","YOOXYGEN","COLLABORATIONS","BEST OFFERS"]
var menContentIDList = ["menNewArrivals","menDesigners","menClothing","menShoes","menAccessories","men8ByNoox","menYooxygen","menCollaborations","menBestOffers"]

contentList("content",menContentList,menContentIDList,9)




import { redirect } from "./redirect.js"
