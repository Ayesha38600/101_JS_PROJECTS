// Use getBoundingClientRect() to get its dimensions and position.
// let eyes = document.querySelector(".eye");
// const rect = eyes.getBoundingClientRect();
// console.log(rect);

// clientWidth is a property that represents the inner width of an HTML element's content area


// event.pageX and event.pageY represent the current X and Y coordinates of the mouse cursor on the screen at the time of the event (e.g., a mouse click or mousemove event).


// Math.atan2(y, x) function is used to calculate the arctangent of the quotient of its two arguments, y and x

document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}



