const images = [
  "image1.jpeg",
  "image2.jpeg",
  
  "image4.jpeg",

  "image6.jpeg",
  "image7.jpeg",
];
const randomImg = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${randomImg}')`;
