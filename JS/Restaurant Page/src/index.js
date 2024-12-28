require("./styles.css");
const menu = require("./menu.js");
const home = require("./home.js");
const about = require("./about.js");
let currentContent = home;

const content = document.getElementById('content');
content.append(currentContent);

const homeButton = document.getElementById('home');
homeButton.classList.add('active-button');
homeButton.addEventListener('click', () => {
  if (currentContent !== home) {
    content.removeChild(currentContent);
    currentContent = home;
    content.append(currentContent);

    homeButton.classList.add('active-button');
    menuButton.classList.remove('active-button');
    aboutButton.classList.remove('active-button');
  }
});
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
  if (currentContent !== menu) {
    content.removeChild(currentContent);
    currentContent = menu;
    content.append(currentContent);

    menuButton.classList.add('active-button');
    homeButton.classList.remove('active-button');
    aboutButton.classList.remove('active-button');
  }
});
const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', () => {
  if (currentContent !== about) {
    content.removeChild(currentContent);
    currentContent = about;
    content.append(currentContent);

    aboutButton.classList.add('active-button');
    homeButton.classList.remove('active-button');
    menuButton.classList.remove('active-button');
  }
});
