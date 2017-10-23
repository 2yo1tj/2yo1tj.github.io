// create a reference to our element
var element = document.querySelector('#sprite-test1');
// create our Motio sprite
var sprite = new Motio(element, {fps: 4, frames: 2});
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
var element2 = document.querySelector('#sprite-test2');
// create our Motio sprite
var sprite2 = new Motio(element2, {fps: 8, frames: 2});
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

// create a reference to our element
var element_test = document.querySelector('#sprite-test');
// create our Motio sprite
var sprite_test = new Motio(element_test, {fps: 4, frames: 2});
// start animation
sprite_test.play();

// distance to be traveled
var distance_test = window.innerWidth;

// how many pixels per iteration to travel
var speed_test = 2;

// variable to hold our element's position
var position_test = 0;

function animate_test() {
    // increment the position
    position_test += speed_test;
  
    // apply the position to our element
    element_test.style.left = position_test + "px";
  
    // check if element has gone offscreen 
    // and move him back, if necessary
    if (Math.abs(position_test) >= distance_test) {
      position_test = -150;
    }
    
    // tell the browser to update our animation
    requestAnimationFrame(animate_test);
}

// call our animation initially
animate_test();


// create a reference to our element
var element1 = document.querySelector('#sprite1');
// create our Motio sprite
var sprite1 = new Motio(element1, {fps: 4, frames: 2});
// start animation
sprite1.play();

// distance to be traveled
var distance1 = window.innerWidth;

// how many pixels per iteration to travel
var speed1 = 2;

// variable to hold our element's position
var position1 = 0;

function animate1() {
    // increment the position
    position1 += speed1;
  
    // apply the position to our element
    element1.style.left = position1 + "px";
  
    // check if element has gone offscreen 
    // and move him back, if necessary
    if (Math.abs(position1) >= distance1) {
      position1 = -150;
    }
    
    // tell the browser to update our animation
    requestAnimationFrame(animate1);
}

// call our animation initially
animate1();