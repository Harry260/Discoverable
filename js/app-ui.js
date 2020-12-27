
const slider = document.querySelector("#root");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});


function fadeRemove(element){
  $(element).fadeOut();
}

function fadeAdd(element){
  $('#' + element).fadeIn();
}

function add_efect(element, calssName){
  elem = document.getElementById(element)
  elem.classList.add('animate__animated', 'animate__'  + calssName);

  elem.addEventListener('animationend', () => {
  elem.classList.remove('animate__animated',  'animate__'  + calssName);
  });
}

var cursor = $( '#cursor' );

$(document).mousemove(function(event){
  var x = event.clientX;
  var y = event.clientY;
  $(cursor).css({"left": x +  "px", "top": y + "px"})
});

$(document).mousedown(function(event){

  $(cursor).css(
  {
    "-ms-transform": "scale(2)", 
    "transform": "scale(2)"
  })

});

$(document).mouseup(function(event){

  $(cursor).css(
  {
    "-ms-transform": "scale(0)", 
    "transform": "scale(0)"
  })

});


$(".content-image").mousemove(function(e) {
  if(e.buttons === 1) {
      mouseX = e.offsetX;
      mouseY = e.offsetY;
      traX = mouseX + 1640;
      traY = mouseY + 200;
      //console.log(traX, traY);
      $("content-image").css({"background-position": traX + "px " + traY + "px"});
  }
});

function turnOutLoad(){
  setTheme();
  $('#load-pane').fadeOut('slow');
}

