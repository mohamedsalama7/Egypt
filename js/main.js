

let menu = document.getElementById("toggle");
let nav = document.querySelector(".side_menu")
console.log(nav);
menu.onclick = function() {
  nav.classList.toggle("active")
}

window.onresize = function(){
  if ( window.innerWidth >= 800) {
    nav.classList.remove("active")
  }
}