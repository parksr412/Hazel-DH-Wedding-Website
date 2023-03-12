
let arrayOfImages = [];

arrayOfImages.push("https://i.imgur.com/7QtU8VF.jpg");
arrayOfImages.push("https://i.imgur.com/xolg4JT.jpg");
arrayOfImages.push("https://i.imgur.com/9sSwibn.jpg");
arrayOfImages.push("https://i.imgur.com/tmQIivs.jpg");
arrayOfImages.push("https://i.imgur.com/Ps8QY2L.jpg");

let imagesLength = arrayOfImages.length;
let randomNumber = Math.random();
randomNumber = randomNumber*imagesLength;
randomNumber = Math.floor(randomNumber);
let chosenImage = arrayOfImages[randomNumber];
featured.src = chosenImage;
