let hamburger = document.querySelector('.hamburger');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let mybutton = document.getElementById("myBtn");

hamburger.addEventListener('click', ()=>{  

    menu.classList.toggle('hidden');
})
burger.addEventListener('click', ()=>{  
    menu.classList.toggle('hidden');
})

AOS.init();


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}