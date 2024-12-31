/* ========== IMPORTS ========== */
require("../css/task.css");
let { getArchiveTasks } = require("./backEnd.js");

/* ========== ELEMENTS ========== */
const archive = document.createElement("div");
archive.className = "content";
const archiveHeader = document.createElement("h1");
archiveHeader.className = "content-header";
archiveHeader.textContent = "Archive";
const archiveContent = document.createElement("div");
archiveContent.className = "archive-content";

const archiveTasks = getArchiveTasks();
archiveTasks.forEach((task) => {
  /* ========== ELEMENTS ========== */
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.dataset.id = task.id;
  const taskTitle = document.createElement("h2");
  taskTitle.className = "task-title";
  taskTitle.textContent = "Title: " + task.title;
  const taskDescription = document.createElement("p");
  taskDescription.className = "task-description";
  taskDescription.textContent = "Description: " + task.description;
  const taskPriority = document.createElement("p");
  taskPriority.className = "task-priority";
  taskPriority.textContent = "Priority: " + task.priority;
  taskPriority.style.color = `rgb(var(--color-priority-${task.priority}))`;
  const taskButtons = document.createElement("div");
  taskButtons.className = "task-buttons";
  const taskUndoneButton = document.createElement("button");
  taskUndoneButton.className = "task-undone-button";
  taskUndoneButton.textContent = "Undone?";
  const taskRemoveButton = document.createElement("button");
  taskRemoveButton.className = "task-remove-button";
  taskRemoveButton.textContent = "Remove";
  taskButtons.append(taskUndoneButton, taskRemoveButton);

  /* ========== EVENTS ========== */

  /* ========== APPEND ========== */
  taskElement.append(taskTitle, taskDescription, taskPriority, taskButtons);
  archiveContent.append(taskElement);
});

/* ========== APPEND========== */
archive.append(archiveHeader, archiveContent);

module.exports = archive;
