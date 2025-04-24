// Create a new GSAP timeline for animations
var tl = new TimelineLite();

// Animate each element with the class "topics" by scaling them from 0 to full size
// while bringing them into position with a bounce effect (Elastic ease)
tl.staggerFrom(".topics", 3, {
  css: { transform: "scale(0)", top: "60%", left: "50%" },
  ease: Elastic.easeOut
}, 0.3); // 0.3 seconds between each animation start

// Grab references to each religious icon element by ID
var js = document.getElementById("js");
var sass = document.getElementById("sass");
var php = document.getElementById("php");
var css3 = document.getElementById("css3");
var html5 = document.getElementById("html5");
var topics = document.getElementsByClassName("topics");

// Add hover and touch event listeners to each icon
// These trigger animations that move the SVG retina (eye) toward the hovered icon
js.addEventListener("mouseover", jsretina, false);
js.addEventListener("touchstart", jsretina, false);

html5.addEventListener("mouseover", html5retina, false);
html5.addEventListener("touchstart", html5retina, false);

sass.addEventListener("mouseover", sassretina, false);
sass.addEventListener("touchstart", sassretina, false);

php.addEventListener("mouseover", phpretina, false);
php.addEventListener("touchstart", phpretina, false);

css3.addEventListener("mouseover", css3retina, false);
css3.addEventListener("touchstart", css3retina, false);

// Define individual functions to move the retina to different positions based on hovered icon
function jsretina(event) {
  TweenMax.to("#retina", 0.2, { left: "51%", top: "59.5%" });
}

function html5retina(event) {
  TweenMax.to("#retina", 0.2, { left: "49%", top: "59.5%" });
}

function css3retina(event) {
  TweenMax.to("#retina", 0.2, { left: "49%", top: "60.5%" });
}

function phpretina(event) {
  TweenMax.to("#retina", 0.2, { left: "51%", top: "60.5%" });
}

function sassretina(event) {
  TweenMax.to("#retina", 0.2, { left: "50%", top: "59%" });
}

// Reset retina to center when mouse leaves any of the icon elements
for (var i = 0; i < topics.length; i++) {
  topics[i].addEventListener("mouseout", retinaout);
}

function retinaout(event) {
  TweenMax.to("#retina", 0.2, { left: "50%", top: "60%" });
}
