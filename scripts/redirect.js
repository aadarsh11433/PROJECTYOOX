function redirect(id,path){
    document.getElementById(id).addEventListener("click",()=>{
        window.location.href = path
    })
}
export {redirect}