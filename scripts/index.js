document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".main-nav__toggle"),n=document.querySelector(".main-nav__list");t.addEventListener("click",function(){n.classList.toggle("main-nav__list--open")}),document.addEventListener("click",function(e){!n.contains(e.target)&&!t.contains(e.target)&&n.classList.contains("main-nav__list--open")&&n.classList.remove("main-nav__list--open")})});
