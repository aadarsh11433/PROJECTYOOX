function filteroptions(){
    return ` <div id="categories_filter">CATEGORIES
    <ul id="li_in_category">
        <li>
            <input type="checkbox" id="Accessories">
            Accessories</li>
        <li>
            <input type="checkbox" id="Coats_Jackets">
            Coats & Jackets</li>
        <li>
            <input type="checkbox" id="Dresses">
            Dresses</li>
        <li>
            <input type="checkbox" id="Footwear">
            Footwear</li>
        <li>
            <input type="checkbox" id="Handbags">
            Handbags</li>
        <li>
            <input type="checkbox" id="Jwellery">
            Jwellery</li>
        <li>
            <input type="checkbox" id="Jumpsuits_Overall">
            Jumpsuits and Overalls</li>
        <li>
            <input type="checkbox" id="Modestwear">
            Modestwear</li>
        <li>
            <input type="checkbox" id="Pants">
            Pants</li>
        <li>
            <input type="checkbox" id="Shirts">
            Shirts</li>
        <li>
            <input type="checkbox" id="Skirts">
            Skirts</li>
        <li>
            <input type="checkbox" id="Small_Lather">
            Small Leather Goods</li>
        <li>
            <input type="checkbox" id="Suits_Blazer">
            Suits and Blazers</li>
        <li>
            <input type="checkbox" id="Tshirt_Top">
            T-Shirts and Tops</li>
        <li>
            <input type="checkbox" id="Watches">
            Watches</li>
     </ul>
    
         </div>
          <div id="designers_filter">DESIGNERS
            <ul id="li_in_designers">
                <li>
                    <input type="checkbox" id="ALBERTA_FERRETTI">
                    ALBERTA FERRETTI</li>
                <li>
                    <input type="checkbox" id="AMEN">
                    AMEN</li>
                <li>
                    <input type="checkbox" id="ANIYE_BY">
                    ANIYE BY</li>
                <li>
                    <input type="checkbox" id="AASPESI">
                    AASPESI</li>
                <li>
                    <input type="checkbox" id="BLUMARINE">
                    BLUMARINE</li>
                <li>
                    <input type="checkbox" id="BERNADETTE">
                    BERNADETTE</li>
                <li>
                    <input type="checkbox" id="CHLOE">
                    CHLOE</li>
                <li>
                    <input type="checkbox" id="CRUCIANI">
                    CRUCIANI</li>
                <li>
                    <input type="checkbox" id="DOLCE_GABBANA">
                    DOLCE & GABBANA</li>
                <li>
                    <input type="checkbox" id="ETRO">
                    ETRO</li>
                <li>
                    <input type="checkbox" id="FENDI">
                    FENDI</li>
                <li>
                    <input type="checkbox" id="GUCCI">
                    GUCCI</li>
                <li>
                    <input type="checkbox" id="MARNI">
                    MARNI</li>
                <li>
                    <input type="checkbox" id="MUGLER">
                    MUGLER</li>
                <li>
                    <input type="checkbox" id="NINA_RICCI">
                    NINA RICCI</li>
                <li>
                    <input type="checkbox" id="PACO_RABANNE">
                    PACO RABANNE</li>
                <li>
                    <input type="checkbox" id="TOUS">
                    TOUS</li>
                <li>
                    <input type="checkbox" id="TIBI">
                    TIBI</li>
                <li>
                    <input type="checkbox" id="TWINSET">
                    TWINSET</li>
                <li>
                    <input type="checkbox" id="VIVIENNE_WESTWOOD">
                    VIVIENNE WESTWOOD</li>
                <li>
                    <input type="checkbox" id="VINCE">
                    VINCE</li>
            </ul>
          </div>
    
          <div id="price_filter"> PRICE RANGE
              <ul id="li_in_price">
                  <li>
                    <input type="checkbox" id="utpo75">  
                    UP TO $75.00</li>
                  <li>
                    <input type="checkbox" id="utpo150">    
                    UP TO $150.00</li>
                  <li>
                    <input type="checkbox" id="upto200">    
                    UP TO $200.00</li>
                  <li>
                    <input type="checkbox" id="utpo300">    
                    UP TO $300.00</li>
    
                    <li>
                        <input type="checkbox" id="manualprice">
                        <span>FROM $:</span> <span>TO $:</span><br>
                        <input type="number" id="startprice" class="pricefill">
                        <input type="number"  id="endprice" class="pricefill">
                    </li>
              </ul>
          </div>
          <div id="size_filter">SIZES
                <div id="textinsize">Browse just the items with the perfect fit for you and save your preferences for next time.</div>
                <ul id="li_in_size">
                    <li>XXS</li>
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                    <li>XXXL</li>
                </ul>
          </div>
          <div id="color_filter">COLORS
    
            <ul id="li_in_colors">
                <li>
                    <input type="checkbox" id="Azure">
                    Azure</li>
                <li>
                    <input type="checkbox" id="Black">
                    Black</li>
                <li>
                    <input type="checkbox" id="Blue">
                    Blue</li>
                <li>
                    <input type="checkbox" id="Brown">
                    Brown</li>
                <li>
                    <input type="checkbox" id="Gold">
                    Gold</li>
                <li>
                    <input type="checkbox" id="Green">
                    Green</li>
                <li>
                    <input type="checkbox" id="Grey">
                    Grey</li>
                <li>
                    <input type="checkbox" id="Orange">
                    Orange</li>
                <li>
                    <input type="checkbox" id="Pink">
                    Pink</li>
                <li>
                    <input type="checkbox" id="Purple">
                    Purple</li>
                <li>
                    <input type="checkbox" id="Red">
                    Red</li>
                <li>
                    <input type="checkbox" id="Silver">
                    Silver</li>
                <li>
                    <input type="checkbox" id="White">
                    White</li>
                <li>
                    <input type="checkbox" id="Yellow">
                    Yellow</li>
            </ul>
          </div>
          <div id="material_filter">MATERIALS
              <ul id="li_in_material">
                  <li>
                    <input type="checkbox" id="Cotton">  
                    Cotton</li>
                  <li>
                    <input type="checkbox" id="Crystals">  
                    Crystals</li>
                  <li>
                    <input type="checkbox" id="Gems">  
                    Gems</li>
                  <li>
                    <input type="checkbox" id="Leather">  
                    Leather</li>
                  <li>
                    <input type="checkbox" id="Linen">  
                    Linen</li>
                  <li>
                    <input type="checkbox" id="Metals">  
                    Metals</li>
                  <li>
                    <input type="checkbox" id="Organic">  
                    Organic Materials</li>
                  <li>
                    <input type="checkbox" id="Plastic">  
                    Plastic</li>
                  <li>
                    <input type="checkbox" id="Recyled">  
                    Recyled Materials</li>
                  <li>
                    <input type="checkbox" id="Silk"> 
                    Silk</li>
                  <li>
                    <input type="checkbox" id="Silver">
                      Silver</li>
                  <li>
                    <input type="checkbox" id="Wool">  
                    Wool</li>
              </ul>
          </div>
          <div id="shopbycat">SHOP BY CATEGORY
              <ul id="li_in_shopby_cat">
                  <li>
                    <input type="checkbox" id="Accessories_only">  
                    ACCESSORIES</li>
                  <li>
                    <input type="checkbox" id="clothing_only">    
                    CLOTHING</li>
                  <li>
                    <input type="checkbox" id="Shoes_only">    
                    SHOES</li>
              </ul>
          </div>`
}

 let filterfunctions = ()=>
{
    `
    document.getElementById("categories_filter").addEventListener("click",()=>{
     document.getElementById("li_in_category").style.display = "Block";
     document.getElementById("li_in_designers").style.display = "none"
     document.getElementById("li_in_size").style.display ="none"
     document.getElementById("textinsize").style.display ="none";
     document.getElementById("li_in_colors").style.display ="none";
     read("li_in_material").style.display ="none";
     read("li_in_price").style.display="none";
     read("li_in_shopby_cat").style.display="none";
    })
    
    document.getElementById("designers_filter").addEventListener("click",()=>{
     document.getElementById("li_in_designers").style.display = "Block"
     document.getElementById("li_in_category").style.display = "none"
     document.getElementById("li_in_size").style.display ="none";
     document.getElementById("textinsize").style.display ="none";
     document.getElementById("li_in_colors").style.display ="none"
     read("li_in_material").style.display ="none";
     read("li_in_price").style.display="none";
     read("li_in_shopby_cat").style.display="none";
    })
    
    document.getElementById("price_filter").addEventListener("click",()=>{
    
     document.getElementById("li_in_price").style.display ="Block"
    
     document.getElementById("li_in_designers").style.display = "none"
     document.getElementById("li_in_category").style.display = "none"
     document.getElementById("li_in_size").style.display ="none"
     document.getElementById("textinsize").style.display ="none";
     document.getElementById("li_in_colors").style.display ="none";
     read("li_in_material").style.display="none";
     read("li_in_shopby_cat").style.display="none";
    }) 
    
    
    document.getElementById("color_filter").addEventListener("click",()=>{
    
     document.getElementById("li_in_colors").style.display ="Block"
    
     document.getElementById("li_in_designers").style.display = "none"
     document.getElementById("li_in_category").style.display = "none"
     document.getElementById("li_in_size").style.display ="none"
     document.getElementById("textinsize").style.display ="none";
      read("li_in_material").style.display ="none";
     read("li_in_price").style.display="none";
     read("li_in_shopby_cat").style.display="none";
    })   
    
    
    
    read("material_filter").addEventListener("click",()=>{
    
    read("li_in_material").style.display = "Block"
     read("li_in_designers").style.display = "none"
     read("li_in_category").style.display = "none"
     read("li_in_size").style.display ="none"
     read("textinsize").style.display ="none";
     read("li_in_price").style.display="none";
     read("li_in_colors").style.display ="none"
     read("li_in_shopby_cat").style.display="none";
    })
    
    read("shopbycat").addEventListener("click",()=>{
    
     read("li_in_shopby_cat").style.display = "Block"
         read("li_in_designers").style.display = "none"
         read("li_in_category").style.display = "none"
         read("li_in_price").style.display="none";
         read("li_in_size").style.display ="none"
         read("textinsize").style.display ="none";
         read("li_in_colors").style.display ="none"
         read("li_in_material").style.display ="none";
     
     })
    //    function closecolorfilter(){
    //     document.getElementById("li_in_colors").style.display ="None"
    //     document.getElementById("color_filter").addEventListener("click",()=>{
            
    //     })
    //    }
    
    
    
    document.getElementById("size_filter").addEventListener("click",()=>{
     
     read("textinsize").style.display ="block";
     document.getElementById("li_in_size").style.display = "Grid"
    
     document.getElementById("li_in_category").style.display = "none"
     read("li_in_designers").style.display="none";
     read("li_in_price").style.display="none";
     read("li_in_colors").style.display="none";
     read("li_in_shopby_cat").style.display="none";
     read("li_in_material").style.display = "none"
    
    
    })`;

}


export {filteroptions ,filterfunctions};