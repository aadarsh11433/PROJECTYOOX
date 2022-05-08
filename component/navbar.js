function navbar() {
    return `
    <div id="nav1">
    

        
            <div>
                <select name="" id="countries">
                    <option value="">INDIA</option>
                </select>
                <a href="#">CUSTOMER CARE</a>
            </div>
            <div>
                <a href="register.html">REGISTER</a>
                <button id="open">LOGIN</button>
                </div>
                </div>

<div id="main">
         <div id="t"></div>
              
         <div class="form-popup" id="myForm">
                <button id="close" class="btn cancel">X</button>
                <form class="form-container" id="loginf>
                <h4>It’s great to see you again.</h4>
                <hr style="border: 0.1px dashed rgb(201, 201, 201);">
                     <p>Log in with</p>
    
                <div>
                 <a href="#" class="fa fa-facebook"></a>
                <button id="gog"><img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in id="img22""
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /></button>
                </div>
             <hr style="border: 0.1px dashed rgb(201, 201, 201);">
                <p> or with your e-mail address</p>
        
                <input type="text" placeholder="E-MAIL" id="e-mail" required>
                <input type="password" placeholder="PASSWORD" id="psw" required><br>
                <p id="err" style="color:red"></p>
                <div style="color : grey";><input type="checkbox" required/>REMEMBER ME</div>
                <a href="">Forgot your password?</a><br>
                <button id="login">LOG IN</button>
        
                <p style="font-size: 12px;">For more information, please consult the Privacy Policy</p>
                <p style="font-size: 13px;">ARE YOU NEW TO YOOX?<a href="register.html">REGISTER NOW</a></p>
            </form>
        </div>
                
</div>
        
<div id="nav2">
        <div id="d1">
        <a href="">WOMEN</a>
        <a href="">MEN</a>
            <a href="">KIDS /</a>
            <a href="designart.html">DESIGN+ART</a>
            </div>
           <div id="d2">
            <a href="index.html"><img src="https://pbs.twimg.com/profile_images/1500895073965416449/ynLa9JCR_400x400.jpg" alt="logo" style="width: 100p%;height: 100%;">
           </a></div>
            <div id="d3">
            <i class="fa-regular fa-heart"></i>
            <img src="bag-check-fill.svg">
            </div>
</div>
            
            
                
                `;
}

// document.getElementById("open").addEventListener("click",hello);



function openForm() {
    console.log("openform");
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function checkLogin(){
    event.preventDefault();
    console.log("hii");
    let checkusr = JSON.parse(localStorage.getItem("UserDetails")) || [];
    let email = document.getElementById("e-mail").value;
    let psw =document.getElementById("psw").value;
  let f=0; let name;
    for (let i = 0; i < checkusr.length; i++) {
        if (checkusr[i].email_id == email && checkusr[i].pass == psw) {
            f=1; 
            name=checkusr[i].first_name;
            break;
        } 
    }

    if(f==1){
        localStorage.setItem("loginUsr",JSON.stringify(email))
        document.getElementById("open").innerText=name;
        window.location.href="/index.html";
    }else{
        openForm();
        document.getElementById("err").innerText="Somthing went wrong...";
    }

}
export { navbar, openForm, closeForm,checkLogin };