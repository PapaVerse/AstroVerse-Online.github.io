// get the css variables
let root = window.getComputedStyle(document.documentElement);
let magnifier_width = root.getPropertyValue("--magnifer-width");
let magnifier_height = root.getPropertyValue("--magnifer-height");

let container = document.querySelector(".container");

// create the magnifier
var magnifier = document.createElement("div");
container.append(magnifier);

// run the function on mouse move.
container.addEventListener("mousemove", (e) => {
  magnifier.setAttribute("class", "magnifier");

  // get mouse position
  var rect = container.getBoundingClientRect();
  var x = e.pageX - rect.left;
  var y = e.pageY - rect.top;

  // take page scrolling into account
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;

  //prevent magnifier from exiting the container
  // then set top and left values of magnifier

  if (x >= 0 && x <= container.clientWidth - magnifier_width) {
    magnifier.style.left = x + "px";
  }
  if (y >= 0 && y <= container.clientHeight - magnifier_height) {
    magnifier.style.top = y + "px";
  }

  // magnifier background image calculations
  const magnify = 2;
  const imgWidth = 500;
  const imgHeight = 400;

  magnifier.style.backgroundSize =
    imgWidth * magnify + "px " + imgHeight * magnify + "px";

  // the x and y positions of the magnifier image
  var magnify_x = x * magnify + 15;
  var magnify_y = y * magnify + 15;

  // set backgroundPosition for magnifier if it is within image
  if (
    x <= container.clientWidth - magnifier_width &&
    y <= container.clientHeight - magnifier_height
  ) {
    magnifier.style.backgroundPosition = -magnify_x + "px " + -magnify_y + "px";
  }
});