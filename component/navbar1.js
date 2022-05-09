function navbar() {
    return `<div id="options">
    
    <div class="div1">
                   
       <h4><a href="" class="hover1">INDIA</a></h4>
          <i class="fas fa-caret-down  icon1" id="selecticon"></i>
                   
         <h4><button id="custc">CUSTOMER CARE</button></h4>
    </div>
     

 
     <div class="div2">
         <h4><a href="register.html" class="hover1" id="reg"><i class="fa-solid fa-pen" id="pen"></i>REGISTER</a></h4>
         <h4><button class="hover1" id="open"><i class="fa-solid fa-lock-open" id="lock"></i>LOGIN</button></h4>
     </div>

     </div>
<div id="main">
    <div id="custo-box">
         <button id="ccclose">X</button>
        <p id="custo-top-name">Can we help you?</p>
        <div id="custo-top-name2">GO TO THE CUSTOMER CARE AREA</div>
        <div class="custo-top-name3">TRACK YOUR ORDER</div>
        <div class="custo-top-name3">COMPLETE THE RETURN FORM</div>
        <div class="custo-top-name3">TRACK YOUR RETURN</div>
        <div id="custo-cont-box">
            <h2 id="custo-cont-name">CONTACT US</h2>
            <P class="custo-cont-p">M-F 9am-9pm Sydney Time</P>
        </div>
        <div id="custo-email-box">
            <span><i class="fa-solid fa-envelope fa-2x"></i></span>
            <p class="custo-cont-p">[E-mail]</p>
        </div>
    </div>
        
              
         <div class="form-popup" id="myForm">
                <button id="close" class="btn cancel">X</button>
            <form class="form-container" id="loginf>
                <h4>It’s great to see you again.</h4>
                <hr style="border: 0.1px dashed rgb(201, 201, 201);">
                     <p>Log in with</p>
    
                <div>
                 <a href="#" class="fa fa-facebook"></a>
                <button id="gog"><img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in"
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
 <div id="options2">
   <div class="div3">
   <h4><a href="womens.html">WOMEN</a></h4>
   <h4><a href="men.html">MEN</a></h4>
   <h4><a href="kids.html">KIDS</a></h4>
   <h4>/</h4>
   <h4><a href="design
   .html">DESIGN+ART</a></h4>
   </div>
   
   <h2 id="logo"><a href="index.html"><img src="logo.jpg" alt="" id="logoo"></a></h2>
   <div>
    <a href=""><i class="fas fa-search  icon" id="searchicon" ></i></a>
    <a href="dreambox.html"><i class="far fa-heart  icon" style="font-weight: normal;" id="hearticon"></i></a>
    <a href="checkout.html"><i class="fas fa-shopping-bag  icon" id="bagicon"></i></a>
    
   </div>
   
   </div>`
}


function openForm() {
    console.log("openform");
    document.getElementById("myForm").style.display = "block";

}
function opencc() {
    document.getElementById("custo-box").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";

}
function closecc() {
    document.getElementById("custo-box").style.display = "none";
}

function checkLogin() {
    event.preventDefault();
    console.log("hii");
    let checkusr = JSON.parse(localStorage.getItem("UserDetails")) || [];
    let email = document.getElementById("e-mail").value;
    let psw = document.getElementById("psw").value;
    let f = 0; let name;
    for (let i = 0; i < checkusr.length; i++) {
        if (checkusr[i].email_id == email && checkusr[i].pass == psw) {
            f = 1;
            name = checkusr[i].first_name;
            break;
        }
    }

    if (f == 1) {
        localStorage.setItem("loginUsr", JSON.stringify(email))
        // window.location.reload();
        alert("Login Successfully");
        document.getElementById("open").innerText = name;
        document.getElementById("reg").innerText = "MYOOX";
        closeForm();
    } else {
        openForm();
        document.getElementById("err").innerText = "Somthing went wrong...";
    }

}
export { navbar, openForm, closeForm, checkLogin, opencc, closecc };