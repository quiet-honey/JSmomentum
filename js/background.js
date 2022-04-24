const images = [
  "image/light1.jpg",
  "image/light2.jpg",
  "image/light3.jpg",
  "image/light4.jpg",
];
const darkImages = [
  "image/dark1.jpg",
  "image/dark2.jpg",
  "image/dark3.jpg",
  "image/dark4.jpg",
];

function normalImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = "url('" + chosenImage + "')";
}
function darkImage() {
  const chosenDarkImage =
    darkImages[Math.floor(Math.random() * darkImages.length)];
  document.body.style.backgroundImage = "url('" + chosenDarkImage + "')";
}

normalImage();
