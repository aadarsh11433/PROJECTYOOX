function navbar(){
    return `<div id="options">
    
    <div class="div1">
                   
       <h4><a href="" class="hover1">INDIA</a></h4>
          <i class="fas fa-caret-down  icon1" id="selecticon"></i>
                   
         <h4><a href=""  class="hover1">CUSTOMER CARE</a></h4>
    </div>
     
     <!-- <div><p>Free standards shipping on orders over $1500</p> </div> -->
 
     <div class="div2">
         <h4><a href="register.html" class="hover1"><i class="fa-solid fa-pen" id="pen"></i>REGISTER</a></h4>
         <h4><a href="login.html" class="hover1"><i class="fa-solid fa-lock-open" id="lock"></i>LOGIN</a></h4>
     </div>
     
 </div>
 <div id="options2">
   <div class="div3">
   <h4><a href="womens.html">WOMEN</a></h4>
   <h4><a href="mens.html">MEN</a></h4>
   <h4><a href="kids.html">KIDS</a></h4>
   <h4>/</h4>
   <h4><a href="design.html">DESIGN+ART</a></h4>
   </div>
   
   <h2 id="logo"><a href=""><img src="logo.jpg" alt="" id="logoo"></a></h2>
   <div>
    <a href=""><i class="fas fa-search  icon" id="searchicon" ></i></a>
    <a href=""><i class="far fa-heart  icon" style="font-weight: normal;" id="hearticon"></i></a>
    <a href="cart.html"><i class="fas fa-shopping-bag  icon" id="bagicon"></i></a>
    
   </div>
   
   </div>`
}

export default navbar;