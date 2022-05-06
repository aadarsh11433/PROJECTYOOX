import { contentList,appendContent } from "../../scripts/content.js"

var menContentList = ["NEW ARRIVALS","DESIGNERS","CLOTHING","SHOES","ACCESSORIES","8 BY NOOX","YOOXYGEN","COLLABORATIONS","BEST OFFERS"]
var menContentIDList = ["menNewArrivals","menDesigners","menClothing","menShoes","menAccessories","men8ByNoox","menYooxygen","menCollaborations","menBestOffers"]

contentList("content",menContentList,menContentIDList,9)
import { moveToDiv,appendRecent } from "../../scripts/moveToDiv.js"
appendRecent("recentView")