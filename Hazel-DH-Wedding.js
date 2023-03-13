
let arrayOfImages = [
    "https://i.imgur.com/7QtU8VF.jpg",
    "https://i.imgur.com/xolg4JT.jpg",
    "https://i.imgur.com/9sSwibn.jpg",
    "https://i.imgur.com/tmQIivs.jpg",
    "https://i.imgur.com/Ps8QY2L.jpg",
];


const randomImageIndex = Math.floor(Math.random() * arrayOfImages.length);
featured.src = arrayOfImages[randomImageIndex];
