function appendContent(x,y,z,i){
     
    let tar1 = document.getElementById(x)
    let tar2 = document.getElementById(y)
    for(var a=0;a<z;a++){
        let tar = `content_element${a}`
        let Clear = document.getElementById(tar)
        let tarCon = i[a]
        let clearTarcon = document.getElementById(tarCon)
        if(clearTarcon.style.backgroundColor!="#333333"){
            clearTarcon.style.backgroundColor = "#333333"
            clearTarcon.style.color = "white"
        }
        
        if(Clear.innerHTML!=""){
            
            Clear.style.display = "none"
            Clear.style.pointerEvents = "none"
        }
    }
    if(tar1.style.backgroundColor!="white"){
        tar1.style.backgroundColor = "white"
        tar1.style.color = "#333333"
        tar2.style.display = "flex"
        tar2.style.pointerEvents = "visible"
    }
    else{
        tar1.style.backgroundColor = "#333333"
        tar1.style.color = "white"
        tar2.style.display = "none"
        tar2.style.pointerEvents = "none"
    }
    
    tar2.classList.add = ".hidecontent"
    
    
 
}

function contentList(id,list,listID,func,z){
    let UL = document.createElement("ul")
    UL.style.listStyle = "none"
    UL.style.display = "inline-flex"
    UL.style.height = "100%"
    UL.style.marginTop = "0"
    UL.style.marginBottom = "0"

// console.log(div)
    

    let List = document.getElementById(id)
    for(var x=0;x<z;x++){
        let Div = func[x]
        let li = document.createElement("li")
        li.style.padding = "10px"
        li.id = listID[x]
        let content = document.createElement("div")
        content.id = `content_element${x}`
        content.className = "showcontent"
        content.innerHTML = Div
        document.getElementById("fixed").append(content)
        li.onclick = ()=>{
            
         appendContent(li.id,content.id,z,listID)
        }
    
        
        
        
        // li.style.backgroundColor ="green"
        li.style.height = "100%"
        let div = document.createElement("div")
        UL.append(li)
        li.innerText = list[x]

        
    }
    
    List.append(UL)
}

export {appendContent,contentList}