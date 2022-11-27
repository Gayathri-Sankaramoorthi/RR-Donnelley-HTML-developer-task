const wheels = document.querySelectorAll(".wheel");
const images = document.getElementsByTagName('img');

for (let i = 0; i < wheels.length; i++) {
  wheels[i].addEventListener("click", function() {
   
  const active = document.querySelector(".active");
  if (active) { 
    active.classList.remove("active");
  }
  else {
    wheels[i].classList.add("active");
  }
  });
}

function slide() {
  const active = document.querySelector(".active");
  if (active) { 
    active.classList.remove("active");
  }
}

let first = document.getElementById("first");
first.addEventListener("click", function slideLeft() {
  wheels[3].style.marginRight="-370px";
  wheels[0].style.marginLeft="5px";
  
})

let last = document.getElementById("last");
last.addEventListener("click", function slideRight() {
  wheels[3].style.marginRight="2px";
  wheels[0].style.marginLeft="-370px";
  wheels[1].style.marginLeft="30px";
})

const arrows = document.querySelectorAll(".fa-solid");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function() {
  const disable = document.querySelector(".disable");
if (disable) { 
  disable.classList.remove("disable");
}
else {
   arrows[i].classList.toggle("disable");
}
  }
)}


