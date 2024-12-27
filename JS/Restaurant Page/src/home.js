const homeContainer = document.createElement('div');

const home = document.createElement('div');
home.classList.add('home');
const homeText = document.createElement('h1');
homeText.textContent = 'A Generic Restaurant';
const homeImage = document.createElement('img');
homeImage.classList.add('home-image');
homeImage.src = "https://static.vecteezy.com/system/resources/previews/027/536/034/non_2x/restaurant-food-restaurant-food-top-view-ai-generative-free-png.png"

home.append(homeText, homeImage);
homeContainer.appendChild(home);

module.exports = homeContainer;
