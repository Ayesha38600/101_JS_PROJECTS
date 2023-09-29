// JavaScript for the interactive story
const choiceAButton = document.getElementById("choiceA");
const choiceBButton = document.getElementById("choiceB");
const resultText = document.getElementById("result");

choiceAButton.addEventListener("click", () => {
    resultText.textContent = "You chose to go left. You discover a hidden treasure!";

    const img = new Image();

img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xZwOX1nVk1z4-rBZvTCrixC8F5K4pDxrYw&usqp=CAU'; 
// Append the image to the body
document.body.appendChild(img);

  
    choiceBButton.style.display = "none";
});

choiceBButton.addEventListener("click", () => {
    resultText.textContent = "You chose to go right. You encounter a fierce dragon!";
   // Create a new image element
const image = new Image();

image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqKpT0dz87HHxMFpzEEZ2QeVm8XSvOqcdvg&usqp=CAU'; 
// Append the image to the body
document.body.appendChild(image);

    choiceAButton.style.display = "none";
 
});
