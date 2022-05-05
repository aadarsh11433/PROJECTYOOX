let men_data = JSON.parse(localStorage.getItem("mens_data"))||[]

import { moveToDiv,appendRecent } from "./moveToDiv.js"

moveToDiv(men_data.mens_new_arrivals,"new_arrivals")

moveToDiv(men_data.OOAK,"OOAK")
appendRecent("recentView")
