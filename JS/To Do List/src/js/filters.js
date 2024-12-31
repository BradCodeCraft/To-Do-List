/* ========== IMPORTS ========== */
require("../css/task.css");

/* ========== ELEMENTS ========== */
const filtersPage = document.createElement("div");
filtersPage.className = "content";
const filtersHeader = document.createElement("h1");
filtersHeader.className = "content-header";
filtersHeader.textContent = "Filters";
const filtersContent = document.createElement("div");
filtersContent.className = "filters-content";

/* ========== APPENDS ========== */
filtersPage.append(filtersHeader, filtersContent);

/* ========== EXPORT ========== */
module.exports = filtersPage;
