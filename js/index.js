let bg = document.getElementById("bg");
let stars = document.getElementById("stars");
let earth = document.getElementById("earth");
let mars = document.getElementById("mars");
let Gargantua = document.getElementById("Gargantua");
let MyGoal = document.getElementById("MyGoal");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  bg.style.top = value * 0.5 + "px";
  stars.style.left = -value * 0.25 + "px";
  earth.style.left = value * 0.15 + "px";
  mars.style.left = value * 0.15 + "px";
  Gargantua.style.top = -value * 0.15 + "px";
  MyGoal.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
});
