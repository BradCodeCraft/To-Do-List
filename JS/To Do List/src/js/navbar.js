/* ========== IMPORTS ========== */
require("../css/navbar.css");
const user = require("../json/buttersStotch.json");

const navbar = document.createElement("nav");

/* ========== COMPONENTS ========== */
const navbarHeader = document.createElement("header");
const navbarUserImage = document.createElement("img");
navbarUserImage.classList.add("navbar-header-user-image");
navbarUserImage.src = user.image;
navbarUserImage.alt = "User Image";
const navbarUserName = document.createElement("p");
navbarUserName.className = "navbar-header-user-name";
navbarUserName.textContent = user.name.substring(0, user.name.indexOf(" "));
const navbarNotificationImage = document.createElement("img");
let navbarNotificationStatus = "on";
navbarNotificationImage.id = "icon";
navbarNotificationImage.className = "navbar-header-notification-image";
navbarNotificationImage.src = require("../assets/notification_on.svg");
const navbarExpandImage = document.createElement("img");
let navbarExpandSource = require("../assets/side_navigation.svg");
let navbarExpandStatus = "expanded";
navbarExpandImage.id = "icon";
navbarExpandImage.className = "navbar-header-expand-image";
navbarExpandImage.src = navbarExpandSource;
navbarHeader.append(navbarUserImage, navbarUserName, navbarNotificationImage, navbarExpandImage);



/* ========== EVENTS ========== */
navbarUserImage.addEventListener("click", () => {
  console.log("Go to user profile");
});
navbarNotificationImage.addEventListener("click", () => {
  navbarNotificationStatus = navbarNotificationStatus == "on" ? "off" : "on";

  navbarNotificationImage.src = navbarNotificationStatus == "off" ?
    require("../assets/notification_off.svg") :
    require("../assets/notification_on.svg");


  console.log("Toggling notification");
});
navbarExpandImage.addEventListener("click", () => {
  navbarExpandStatus = navbarExpandStatus == "expanded" ? "collapsed" : "expanded";

  navbarExpandImage.src = navbarExpandStatus == "collapsed" ?
    require("../assets/expand_circle_right.svg") :
    require("../assets/side_navigation.svg");

  navbarUserName.textContent = navbarExpandStatus == "collapsed" ?
    "" :
    user.name.substring(0, user.name.indexOf(" "));

  navbarNotificationImage.style.display = navbarExpandStatus == "collapsed" ? "none" : "";

  document.getElementsByTagName("body")[0].style.gridTemplateColumns = navbarExpandStatus == "expanded" ?
    "minmax(250px, 1fr) 10fr" :
    "82.5px 1fr";


  console.log("Go to user profile");
});


/* ========== APPENDS && EXPORTS ========== */
navbar.append(navbarHeader);
module.exports = navbar;
