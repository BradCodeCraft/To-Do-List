/* ========== ELEMENTS ========== */
const inboxPage = document.createElement("div");
inboxPage.className = "content";
const inboxPageHeader = document.createElement("h1");
inboxPageHeader.className = "content-header";
inboxPageHeader.textContent = "Inbox";
const inboxPageContent = document.createElement("div");
inboxPageContent.className = "inbox-content";

/* ========== APPENDS ========== */
inboxPage.append(inboxPageHeader, inboxPageContent);

/* ========== EXPORT ========== */
module.exports = inboxPage;
