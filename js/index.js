// create a reference to our element
var element = document.querySelector('#kramer1');
// create our Motio sprite
var sprite = new Motio(element, {fps: 4, frames: 4});
// start animation
sprite.play();

// distance to be traveled
var distance = window.innerWidth;

// how many pixels per iteration to travel
var speed = 4;

// variable to hold our element's position
var position = 0;

function animate() {
    // increment the position
    position += speed;
  
    // apply the position to our element
    element.style.left = position + "px";
  
    // check if element has gone offscreen 
    // and move him back, if necessary
    if (Math.abs(position) >= distance) {
      position = -150;
    }
    
    // tell the browser to update our animation
    requestAnimationFrame(animate);
}

// call our animation initially
animate();

// create a reference to our element
var element2 = document.querySelector('#kramer2');
// create our Motio sprite
var sprite2 = new Motio(element2, {fps: 8, frames: 4});
// start animation
sprite2.play();

// distance to be traveled
var distance2 = window.innerWidth;

// how many pixels per iteration to travel
var speed2 = 8;

// variable to hold our element's position
var position2 = 0;

function animate2() {
    // increment the position
    position2 += speed2;
  
    // apply the position to our element
    element2.style.left = position2 + "px";
  
    // check if element has gone offscreen 
    // and move him back, if necessary
    if (Math.abs(position2) >= distance2) {
      position2 = -150;
    }
    
    // tell the browser to update our animation
    requestAnimationFrame(animate2);
}

// call our animation initially
animate2();