function appendContent(id,divID,x,firstClass,secondClass){
    
    document.getElementById(divID).innerHTML = ""
    document.getElementById(divID).innerHTML = fillContent(x)
    document.getElementById(divID).classList.add(firstClass)
    
    document.getElementById(id).addEventListener("click",()=>{
        if(document.getElementById(divID).classList.contains(secondClass)){
            document.getElementById(divID).classList.remove(secondClass)
        }
        else{
            document.getElementById(divID).classList.add(secondClass)
        }

    })

}

function contentList(id,list,idList,z){
    let newList = list
    
    let List = document.getElementById(id)
    for(var x=0;x<z;x++){
        let p = document.createElement("p")
        p.innerText = list[x]
        p.id = idList[x]
        List.append(p)
    }

}

export {appendContent,contentList}