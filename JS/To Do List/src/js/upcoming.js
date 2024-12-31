/* ========== IMPORTS ============ */
let { tasks, getTasks, getTodayTasks } = require("./backEnd.js");

/* ========== content ========== */
const upcoming = document.createElement("div");
upcoming.className = "content";
const upcomingHeader = document.createElement("h1");
upcomingHeader.className = "content-header";
upcomingHeader.textContent = "Upcoming";
const upcomingContent = document.createElement("div");
upcomingContent.className = "upcoming-content";


/* ========== EVENTS ========== */


/* ========== APPEND ========== */
upcoming.append(upcomingHeader, upcomingContent);

module.exports = upcoming;
