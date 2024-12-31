/* ========== IMPORTS ========== */
require("../css/navbar.css");

const navbar = document.createElement("nav");

/* ========== COMPONENTS ========== */
const navbarHeader = document.createElement("header");
const navbarCompanyImage = document.createElement("img");
navbarCompanyImage.classList.add("navbar-header-user-image");
navbarCompanyImage.src = require("../assets/tasktidy.png");
navbarCompanyImage.alt = "Logo";
const navbarName = document.createElement("p");
navbarName.className = "navbar-header-user-name";
navbarName.textContent = "TaskTidy";
const navbarNotificationImage = document.createElement("img");
let navbarNotificationStatus = "on";
navbarNotificationImage.id = "icon";
navbarNotificationImage.className = "navbar-header-notification-image";
navbarNotificationImage.src = require("../assets/bell.svg");
const navbarExpandImage = document.createElement("img");
let navbarExpandSource = require("../assets/arrow-expand-left.svg");
let navbarExpandStatus = "expanded";
navbarExpandImage.id = "icon";
navbarExpandImage.className = "navbar-header-expand-image";
navbarExpandImage.src = navbarExpandSource;
navbarHeader.append(navbarCompanyImage, navbarName, navbarNotificationImage, navbarExpandImage);

const navbarMain = document.createElement("main");
// Add Task
const navbarAddContainer = document.createElement("div");
navbarAddContainer.className = "navbar-main-icon-container add-task";
navbarAddContainer.id = "navbar-icon-container";
const navbarAddImage = document.createElement("img");
navbarAddImage.src = require("../assets/plus.svg");
navbarAddImage.id = "icon";
const navbarAddText = document.createElement("p");
navbarAddText.textContent = "Add Task";
navbarAddContainer.append(navbarAddImage, navbarAddText);
// Search
const navbarSearchContainer = document.createElement("div");
navbarSearchContainer.className = "navbar-main-icon-container search";
navbarSearchContainer.id = "navbar-icon-container";
const navbarSearchImage = document.createElement("img");
navbarSearchImage.src = require("../assets/magnify.svg");
navbarSearchImage.id = "icon";
const navbarSearchText = document.createElement("p");
navbarSearchText.textContent = "search";
navbarSearchContainer.append(navbarSearchImage, navbarSearchText);
// Inbox
const navbarInboxContainer = document.createElement("div");
navbarInboxContainer.className = "navbar-main-icon-container inbox";
navbarInboxContainer.id = "navbar-icon-container";
const navbarInboxImage = document.createElement("img");
navbarInboxImage.src = require("../assets/inbox.svg");
navbarInboxImage.id = "icon";
const navbarInboxText = document.createElement("p");
navbarInboxText.textContent = "Inbox";
navbarInboxContainer.append(navbarInboxImage, navbarInboxText);
// Today
const navbarTodayContainer = document.createElement("div");
navbarTodayContainer.className = "navbar-main-icon-container today";
navbarTodayContainer.id = "navbar-icon-container";
const navbarTodayImage = document.createElement("img");
navbarTodayImage.src = require("../assets/calendar-today.svg");
navbarTodayImage.id = "icon";
const navbarTodayText = document.createElement("p");
navbarTodayText.textContent = "Today";
navbarTodayContainer.append(navbarTodayImage, navbarTodayText);
// Upcoming
const navbarUpcomingContainer = document.createElement("div");
navbarUpcomingContainer.className = "navbar-main-icon-container upcoming";
navbarUpcomingContainer.id = "navbar-icon-container";
const navbarUpcomingImage = document.createElement("img");
navbarUpcomingImage.src = require("../assets/calendar-month.svg");
navbarUpcomingImage.id = "icon";
const navbarUpcomingText = document.createElement("p");
navbarUpcomingText.textContent = "Upcoming";
navbarUpcomingContainer.append(navbarUpcomingImage, navbarUpcomingText);
// Filters
const navbarFiltersContainer = document.createElement("div");
navbarFiltersContainer.className = "navbar-main-icon-container filters";
navbarFiltersContainer.id = "navbar-icon-container";
const navbarFiltersImage = document.createElement("img");
navbarFiltersImage.src = require("../assets/filter.svg");
navbarFiltersImage.id = "icon";
const navbarFiltersText = document.createElement("p");
navbarFiltersText.textContent = "Filters";
navbarFiltersContainer.append(navbarFiltersImage, navbarFiltersText);

navbarMain.append(navbarAddContainer, navbarSearchContainer, navbarInboxContainer, navbarTodayContainer, navbarUpcomingContainer, navbarFiltersContainer);



/* ========== EVENTS ========== */
navbarCompanyImage.addEventListener("click", () => {
  console.log("Go to company page");
});

navbarNotificationImage.addEventListener("click", () => {
  if (navbarNotificationStatus == "on") {
    navbarNotificationStatus = "off";
    navbarNotificationImage.src = require("../assets/bell-off.svg");
  } else {
    navbarNotificationStatus = "on";
    navbarNotificationImage.src = require("../assets/bell.svg");
  }
});
navbarExpandImage.addEventListener("click", () => {
  if (navbarExpandStatus == "expanded") {
    navbarExpandStatus = "collapsed";
    navbarExpandImage.src = require("../assets/arrow-expand-right.svg");
    navbarName.textContent = "";
    navbarNotificationImage.style.display = "none";

    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "50px 1fr";

    document.getElementsByTagName("header")[0].style.display = "flex";
    document.getElementsByTagName("header")[0].style.flexDirection = "column";
    document.getElementsByTagName("header")[0].style.justifyContent = "center";
    document.getElementsByClassName("navbar-header-expand-image")[0].style.marginTop = "5px";


    for (element of document.getElementsByClassName("navbar-main-icon-container")) {
      element.style.display = "flex";
      element.style.justifyContent = "center";
      element.style.paddingLeft = "0px";
      element.style.backgroundColor = "transparent";

      element.children[1].style.display = "none";
    }

  } else {
    navbarExpandStatus = "expanded";
    navbarExpandImage.src = require("../assets/arrow-expand-left.svg");
    navbarName.textContent = "TaskTidy";
    navbarNotificationImage.style.display = "";

    document.getElementsByTagName("body")[0].style.gridTemplateColumns = "minmax(250px, 1fr) 10fr";

    document.getElementsByTagName("header")[0].style.display = "grid";
    document.getElementsByTagName("header")[0].style.flexDirection = "";

    for (element of document.getElementsByClassName("navbar-main-icon-container")) {
      element.style.display = "grid";
      element.style.justifyContent = "";
      element.style.gridTemplateColumns = "36px 1fr";
      element.style.alignItems = "center";
      element.style.paddingLeft = "5px";
      element.style.backgroundColor = "";

      element.children[1].style.display = "";
    }

  }
});


/* ========== APPENDS && EXPORTS ========== */
navbar.append(navbarHeader, navbarMain);
module.exports = navbar;
