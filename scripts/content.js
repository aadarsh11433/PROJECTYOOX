function appendContent(x,y,z,i){
     let recentData = {x,y}
    let tar1 = document.getElementById(x)
    let tar2 = document.getElementById(y)
    for(let a = 0;a<z;a++){
        
        // let tar = i[a]
        // tar.display.backgroundColor = "#333333"
        // tar.display.color = "white"
        document.getElementById(`content_element${a}`).style.display = "none"
        document.getElementById(i[a]).style.backgroundColor = "#333333"
        document.getElementById(i[a]).style.color = "white"
        
        document.getElementById(`content_element${a}`).style.pointerEvents = "none"
  
    }
 
  let recentClick = JSON.parse(localStorage.getItem("recent_click"))
  if(recentClick.x==x){
      tar1.style.backgroundColor="#333333"
      tar1.style.color="white"
      tar2.style.display = "none"
      tar2.style.pointerEvents = "none"
      localStorage.setItem("recent_click",JSON.stringify("changed"))
    
  }
  else{
      tar1.style.backgroundColor = "white"
      tar1.style.color = "black"
      tar2.style.display = "block"
      tar2.style.pointerEvents = "visible"
      localStorage.setItem("recent_click",JSON.stringify(recentData))
  }
 
  

    
    
    
 
}

function contentList(id,list,listID,func,z){
    let Link = document.createElement("script")
    Link.src ="https://kit.fontawesome.com/24c494a6b6.js"
    Link.crossOrigin = "anonymous"
    document.querySelector("head").append(Link)
    
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
        content.style.backgroundColor = "white"
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