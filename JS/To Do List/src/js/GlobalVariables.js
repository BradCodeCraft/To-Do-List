/* ========== IMPORTS ========== */
const today = require("./today.js");
const addTask = require("./addTask.js");
const upcoming = require("./upcoming.js");
const archive = require("./archive.js");
const filters = require("./filters.js");
const search = require("./search.js");
const inbox = require("./inbox.js");

/* ========== GLOBAL VARIABLES ========== */
let currentTab = "today";

/* ========== GLOBAL FUNCTIONS ========== */
function setCurrentTab(newTab) {
  currentTab = newTab;

  const content = document.querySelector(".content");
  if (content) {
    content.remove()
  };
  switch (currentTab) {
    case "addTask":
      document.body.append(addTask);
      break;
    case "search":
      document.body.append(search);
      break;
    case "inbox":
      document.body.append(inbox);
      break;
    case "today":
      document.body.append(today);
      break;
    case "upcoming":
      document.body.append(upcoming);
      break;
    case "filters":
      document.body.append(filters);
      break;
    case "archive":
      document.body.append(archive);
      break;
    default:
      document.body.append(today);
      break;
  }

}

module.exports = { currentTab, setCurrentTab };
