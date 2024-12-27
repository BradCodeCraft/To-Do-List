require("./styles.css");
const menu = require("./menu.js");
const home = require("./home.js");
let currentContent = home;

const content = document.getElementById('content');
content.append(currentContent);
