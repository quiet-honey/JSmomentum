const images = ["light1.jpg", "light2.jpg", "light3.jpg", "light4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;
document.body.appendChild(bgImage);
