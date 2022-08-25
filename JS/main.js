//Header Section
let formSearch=document.querySelector(".search-form");
let shoppingCart=document.querySelector(".shopping-carts");
let closeShoppingCart=document.getElementById("close")
let navbar=document.querySelector("nav");
let closeNav=navbar.querySelector(".fa-times");
let allLinks=document.querySelectorAll("nav a");
let loginForem=document.querySelector(".login-form");

let searchBtn=document.getElementById("search-btn");
let menu=document.getElementById("menu-btn");
let cart=document.getElementById("cart-btn");
let user=document.getElementById("login-btn");

menu.onclick=function(){
    navbar.classList.toggle("active");
    
    shoppingCart.classList.remove("active");
    formSearch.classList.remove("show")
    loginForem.classList.remove("active");
}

closeNav.onclick=function(){
    navbar.classList.remove("active");
}

allLinks.forEach((e)=>{
    e.addEventListener("click",()=>{
        navbar.classList.remove("active");
        allLinks.forEach((e)=>{e.classList.remove("active")})
        e.classList.add("active");
    })
})


searchBtn.onclick=function(){
    formSearch.classList.toggle("show")
    navbar.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForem.classList.remove("active");
}

cart.onclick=function(){
    shoppingCart.classList.toggle("active");
    navbar.classList.remove("active");
    formSearch.classList.remove("show")
    loginForem.classList.remove("active");
}

closeShoppingCart.onclick=function(){
    shoppingCart.classList.remove("active");
}

user.onclick=function(){
    loginForem.classList.toggle("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
    formSearch.classList.remove("show");
}


window.onscroll=function(){
    loginForem.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
    formSearch.classList.remove("show");
}






var swiper = new Swiper(".slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


var swiper = new Swiper(".reviews-content", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  let year=document.querySelector(".cridet .year");
  year.innerHTML=new Date().getFullYear();