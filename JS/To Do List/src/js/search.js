/* ========== ELEMENTS ========== */
const searchPage = document.createElement("div");
searchPage.className = "content";
const searchPageHeader = document.createElement("h1");
searchPageHeader.className = "content-header";
searchPageHeader.textContent = "Search";
const searchPageContent = document.createElement("div");
searchPageContent.className = "search-content";

/* ========== APPENDS ========== */
searchPage.append(searchPageHeader, searchPageContent);

/* ========== EXPORT ========== */
module.exports = searchPage;
