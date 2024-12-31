/* ========== IMPORTS ========== */
const today = require("./today.js");
const upcoming = require("./upcoming.js");

/* ========== GLOBAL VARIABLES ========== */
let currentTab = "today";
let currentDate = new Date();

/* ========== GLOBAL FUNCTIONS ========== */
function setCurrentTab(newTab) {
  currentTab = newTab;

  const content = document.querySelector(".content");
  if (content) {
    content.remove()
  };
  switch (currentTab) {
    case "addTask":
      break;
    case "search":
      break;
    case "inbox":
      break;
    case "today":
      document.body.append(today);
      break;
    case "upcoming":
      document.body.append(upcoming);
      break;
    case "filters":
      break;
    default:
      document.body.append(today);
      break;
  }

}

module.exports = { currentTab, currentDate, setCurrentTab };
