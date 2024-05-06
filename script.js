
let cartIcon= document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closecart= document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closecart.onclick = () => {
    cart.classList.remove("active");
};



if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
    var removecartbutton = document.getElementsByClassName("cart-remove")
    console.log(removecartbutton)
    for (var i = 0;i< removecartbutton.length; i++){
        var button = removecartbutton[i]
        button.addEventListener("click", removecartitem)
    }

    var quantityinputs = document.getElementsByClassName("cart-quantity");
    for  (var i = 0;i< quantityinputs.length; i++){
        var input = quantityinputs[i]
        input.addEventListener("change", quantitychanged);

    }

    var addcart = document.getElementsByClassName("add-cart")
    for  (var i = 0;i< addcart.length; i++){
        var button= addcart[i]
        button.addEventListener("click",addcartclicked);
    }
    document.getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonclicked)

}

function buyButtonclicked(){
    alert('your order is placed');
    var cartcontent = document.getElementsByClassName("cart-content")[0];
    while (cartcontent.hasChildNodes()){
        cartcontent.removeChild(cartcontent.firstChild);
    }
    updatetotal();
}


function removecartitem(event){
    var buttonclicked = event.target;
    var parentElement = buttonclicked.parentElement;
    if (parentElement){
        parentElement.remove();
    updatetotal();
    }
}

function quantitychanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function addcartclicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addproductTocart(title,price,productImg);
    updatetotal();
}
function addproductTocart(title,price,productImg){
    var cartShopBox= document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    var productExist = false;
    for   (var i = 0;i< cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText === title) {
            productExists = true;
            break;
        }

    }

 
if (!productExist){ 
var cartboxcontent = `
                        <img src="${productImg}" alt="" class="cart-img">
                                <div class="detail-box">
                                    <div class="cart-product-title">${title}</div>
                                        <div class="cart-price">${price}</div>
                                        <input type="number" value="1" class="cart-quantity">

                                            </div>
                                            <i class='bx bxs-trash-alt cart-remove'></i>`;


cartShopBox.innerHTML = cartboxcontent
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName("cart-remove")[0]
.addEventListener("click",removecartitem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change",quantitychanged);

}else{
    var cartBoxes = cartItems.getElementsByClassName("cart-box");
        for (var i = 0; i < cartBoxes.length; i++) {
            if (cartBoxes[i].getElementsByClassName("cart-product-title")[0].innerText === title) {
                var quantityInput = cartBoxes[i].getElementsByClassName("cart-quantity")[0];
                quantityInput.value = parseInt(quantityInput.value) + 1;
                break;
}
        }

    }
}


function updatetotal(){
    var cartcontent = document.getElementsByClassName("cart-content")[0];
    var cartboxes = cartcontent.getElementsByClassName("cart-box");
    var total =0;
    for (var i = 0;i< cartboxes.length; i++){
        var cartbox = cartboxes[i];
        var priceElement = cartbox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total= total + (price * quantity);
    }

        total= Math.round(total * 100) /100;

        document.getElementsByClassName("total-price")[0].innerText = '$' + total;
     
}

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navbars');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navmenu.classList.remove('open');
}


 




