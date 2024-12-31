/* ========== IMPORTS ========== */
require("../css/navbar.css");
let { currentTab, currentDate } = require("./GlobalVariables.js");

console.log(currentTab);

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
const navbarMainIcons = document.createElement("div");
navbarMainIcons.className = "navbar-main-icons";
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
navbarInboxContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
navbarInboxContainer.style.borderRadius = "10px";
navbarInboxContainer.style.color = "rgba(var(--color-text-secondary), 1)";
const navbarInboxImage = document.createElement("img");
navbarInboxImage.src = require("../assets/inbox.svg");
navbarInboxImage.id = "icon";
navbarInboxImage.style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";
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
navbarMainIcons.append(navbarAddContainer, navbarSearchContainer, navbarInboxContainer, navbarTodayContainer, navbarUpcomingContainer, navbarFiltersContainer);

console.log(navbarFiltersContainer.className.substring(navbarFiltersContainer.className.indexOf(" ") + 1));

const navbarMainProjects = document.createElement("div");
navbarMainProjects.className = "navbar-main-projects";
const navbarMainProjectsTitleContainer = document.createElement("div");
navbarMainProjectsTitleContainer.className = "navbar-main-projects-container title";
navbarMainProjectsTitleContainer.id = "navbar-project-container";
const navbarMainProjectsTitleImage = document.createElement("img");
navbarMainProjectsTitleImage.src = require("../assets/bag-personal.svg");
navbarMainProjectsTitleImage.id = "icon";
const navbarMainProjectsTitle = document.createElement("p");
navbarMainProjectsTitle.textContent = "Projects";
navbarMainProjectsTitleContainer.append(navbarMainProjectsTitleImage, navbarMainProjectsTitle);
const navbarMainProjectsList = document.createElement("ul");
navbarMainProjectsList.className = "navbar-main-projects-list";


navbarMainProjects.append(navbarMainProjectsTitleContainer, navbarMainProjectsList);
navbarMain.append(navbarMainIcons, navbarMainProjects);


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

    for (element of document.getElementsByClassName("navbar-main-projects-container")) {
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
      element.style.backgroundColor = currentTab == element.className.substring(element.className.indexOf(" ") + 1) ?
        "rgba(var(--color-primary), 0.5)" :
        "";

      element.children[1].style.display = "";
    }

    for (element of document.getElementsByClassName("navbar-main-projects-container")) {
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

navbarAddContainer.addEventListener("click", () => {
  currentTab = "add-task";

  navbarAddContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
  navbarAddContainer.style.borderRadius = "10px";
  navbarAddContainer.style.color = "rgba(var(--color-text-secondary), 1)";
  navbarAddContainer.children[0].style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";

  navbarSearchContainer.style.backgroundColor = "";
  navbarSearchContainer.style.color = "";
  navbarSearchContainer.children[0].style.filter = "";

  navbarInboxContainer.style.backgroundColor = "";
  navbarInboxContainer.style.color = "";
  navbarInboxContainer.children[0].style.filter = "";

  navbarTodayContainer.style.backgroundColor = "";
  navbarTodayContainer.style.color = "";
  navbarTodayContainer.children[0].style.filter = "";

  navbarUpcomingContainer.style.backgroundColor = "";
  navbarUpcomingContainer.style.color = "";
  navbarUpcomingContainer.children[0].style.filter = "";

  navbarFiltersContainer.style.backgroundColor = "";
  navbarFiltersContainer.style.color = "";
  navbarFiltersContainer.children[0].style.filter = "";
});

navbarSearchContainer.addEventListener("click", () => {
  currentTab = "search";

  navbarSearchContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
  navbarSearchContainer.style.borderRadius = "10px";
  navbarSearchContainer.style.color = "rgba(var(--color-text-secondary), 1)";
  navbarSearchContainer.children[0].style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";

  navbarAddContainer.style.backgroundColor = "";
  navbarAddContainer.style.color = "";
  navbarAddContainer.children[0].style.filter = "";

  navbarInboxContainer.style.backgroundColor = "";
  navbarInboxContainer.style.color = "";
  navbarInboxContainer.children[0].style.filter = "";

  navbarTodayContainer.style.backgroundColor = "";
  navbarTodayContainer.style.color = "";
  navbarTodayContainer.children[0].style.filter = "";

  navbarUpcomingContainer.style.backgroundColor = "";
  navbarUpcomingContainer.style.color = "";
  navbarUpcomingContainer.children[0].style.filter = "";

  navbarFiltersContainer.style.backgroundColor = "";
  navbarFiltersContainer.style.color = "";
  navbarFiltersContainer.children[0].style.filter = "";
});

navbarInboxContainer.addEventListener("click", () => {
  currentTab = "inbox";

  navbarInboxContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
  navbarInboxContainer.style.borderRadius = "10px";
  navbarInboxContainer.style.color = "rgba(var(--color-text-secondary), 1)";
  navbarInboxContainer.children[0].style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";

  navbarAddContainer.style.backgroundColor = "";
  navbarAddContainer.style.color = "";
  navbarAddContainer.children[0].style.filter = "";

  navbarSearchContainer.style.backgroundColor = "";
  navbarSearchContainer.style.color = "";
  navbarSearchContainer.children[0].style.filter = "";

  navbarTodayContainer.style.backgroundColor = "";
  navbarTodayContainer.style.color = "";
  navbarTodayContainer.children[0].style.filter = "";

  navbarUpcomingContainer.style.backgroundColor = "";
  navbarUpcomingContainer.style.color = "";
  navbarUpcomingContainer.children[0].style.filter = "";

  navbarFiltersContainer.style.backgroundColor = "";
  navbarFiltersContainer.style.color = "";
  navbarFiltersContainer.children[0].style.filter = "";
});

navbarTodayContainer.addEventListener("click", () => {
  currentTab = "today";

  navbarTodayContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
  navbarTodayContainer.style.borderRadius = "10px";
  navbarTodayContainer.style.color = "rgba(var(--color-text-secondary), 1)";
  navbarTodayContainer.children[0].style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";

  navbarAddContainer.style.backgroundColor = "";
  navbarAddContainer.style.color = "";
  navbarAddContainer.children[0].style.filter = "";

  navbarSearchContainer.style.backgroundColor = "";
  navbarSearchContainer.style.color = "";
  navbarSearchContainer.children[0].style.filter = "";

  navbarInboxContainer.style.backgroundColor = "";
  navbarInboxContainer.style.color = "";
  navbarInboxContainer.children[0].style.filter = "";

  navbarUpcomingContainer.style.backgroundColor = "";
  navbarUpcomingContainer.style.color = "";
  navbarUpcomingContainer.children[0].style.filter = "";

  navbarFiltersContainer.style.backgroundColor = "";
  navbarFiltersContainer.style.color = "";
  navbarFiltersContainer.children[0].style.filter = "";
});

navbarUpcomingContainer.addEventListener("click", () => {
  currentTab = "upcoming";

  navbarUpcomingContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
  navbarUpcomingContainer.style.borderRadius = "10px";
  navbarUpcomingContainer.style.color = "rgba(var(--color-text-secondary), 1)";
  navbarUpcomingContainer.children[0].style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";

  navbarAddContainer.style.backgroundColor = "";
  navbarAddContainer.style.color = "";
  navbarAddContainer.children[0].style.filter = "";

  navbarSearchContainer.style.backgroundColor = "";
  navbarSearchContainer.style.color = "";
  navbarSearchContainer.children[0].style.filter = "";

  navbarInboxContainer.style.backgroundColor = "";
  navbarInboxContainer.style.color = "";
  navbarInboxContainer.children[0].style.filter = "";

  navbarTodayContainer.style.backgroundColor = "";
  navbarTodayContainer.style.color = "";
  navbarTodayContainer.children[0].style.filter = "";

  navbarFiltersContainer.style.backgroundColor = "";
  navbarFiltersContainer.style.color = "";
  navbarFiltersContainer.children[0].style.filter = "";
});

navbarFiltersContainer.addEventListener("click", () => {
  currentTab = "filters";

  navbarFiltersContainer.style.backgroundColor = "rgba(var(--color-primary), 0.5)";
  navbarFiltersContainer.style.borderRadius = "10px";
  navbarFiltersContainer.style.color = "rgba(var(--color-text-secondary), 1)";
  navbarFiltersContainer.children[0].style.filter = "invert(77%) sepia(74%) saturate(530%) hue-rotate(356deg) brightness(91%) contrast(107%)";

  navbarAddContainer.style.backgroundColor = "";
  navbarAddContainer.style.color = "";
  navbarAddContainer.children[0].style.filter = "";

  navbarSearchContainer.style.backgroundColor = "";
  navbarSearchContainer.style.color = "";
  navbarSearchContainer.children[0].style.filter = "";

  navbarInboxContainer.style.backgroundColor = "";
  navbarInboxContainer.style.color = "";
  navbarInboxContainer.children[0].style.filter = "";

  navbarTodayContainer.style.backgroundColor = "";
  navbarTodayContainer.style.color = "";
  navbarTodayContainer.children[0].style.filter = "";

  navbarUpcomingContainer.style.backgroundColor = "";
  navbarUpcomingContainer.style.color = "";
  navbarUpcomingContainer.children[0].style.filter = "";
});


/* ========== APPENDS && EXPORTS ========== */
navbar.append(navbarHeader, navbarMain);
module.exports = navbar;
