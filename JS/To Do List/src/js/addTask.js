/* ========== IMPORTS ========== */
require("../css/addTasks.css");
let { addTask } = require("./backEnd.js");


/* ========== ELEMENTS ========== */
const addTaskPage = document.createElement("div");
addTaskPage.className = "content add-task-page";
const addTaskHeader = document.createElement("h1");
addTaskHeader.className = "content-header";
addTaskHeader.textContent = "Add Task";
const addTaskContent = document.createElement("div");
addTaskContent.className = "today-content";
const addTaskForm = document.createElement("form");
addTaskForm.className = "add-task-form";
const addTaskTitleLabel = document.createElement("label");
addTaskTitleLabel.textContent = "Title: ";
addTaskTitleLabel.htmlFor = "title";
const addTaskTitle = document.createElement("input");
addTaskTitle.type = "text";
addTaskTitle.name = "title";
addTaskTitle.id = "title";
addTaskTitle.required = true;
const addTaskDescriptionLabel = document.createElement("label");
addTaskDescriptionLabel.textContent = "Description: ";
addTaskDescriptionLabel.htmlFor = "description";
const addTaskDescription = document.createElement("textarea");
addTaskDescription.name = "description";
addTaskDescription.id = "description";
addTaskDescription.required = true;
const addTaskDueDateLabel = document.createElement("label");
addTaskDueDateLabel.textContent = "Due Date: ";
addTaskDueDateLabel.htmlFor = "due-date";
const addTaskDueDate = document.createElement("input");
addTaskDueDate.type = "date";
addTaskDueDate.name = "due-date";
addTaskDueDate.id = "due-date";
addTaskDueDate.required = true;
addTaskDueDate.value = new Date().toISOString().split("T")[0];
addTaskDueDate.min = new Date().toISOString().split("T")[0];
const addTaskPriorityLabel = document.createElement("label");
addTaskPriorityLabel.textContent = "Priority: ";
addTaskPriorityLabel.htmlFor = "priority";
const addTaskPriority = document.createElement("select");
addTaskPriority.name = "priority";
addTaskPriority.id = "priority";
addTaskPriority.required = true;
const addTaskPriorityOption1 = document.createElement("option");
addTaskPriorityOption1.value = "1";
addTaskPriorityOption1.textContent = "Highest";
const addTaskPriorityOption2 = document.createElement("option");
addTaskPriorityOption2.value = "2";
addTaskPriorityOption2.textContent = "High";
const addTaskPriorityOption3 = document.createElement("option");
addTaskPriorityOption3.value = "3";
addTaskPriorityOption3.textContent = "Medium";
const addTaskPriorityOption4 = document.createElement("option");
addTaskPriorityOption4.value = "4";
addTaskPriorityOption4.textContent = "Low";
const addTaskPriorityOption5 = document.createElement("option");
addTaskPriorityOption5.value = "5";
addTaskPriorityOption5.textContent = "Lowest";
const buttons = document.createElement("div");
buttons.className = "buttons";
const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";
cancelButton.className = "cancel-button";
const addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.className = "add-button";
addButton.type = "submit";

/* ========== EVENTS ========== */
addTaskPage.addEventListener("load", () => {
  addTaskTitle.value = "";
  addTaskDescription.value = "";
  addTaskDueDate.value = new Date().toISOString().split("T")[0];
  addTaskPriority.value = "1";
});

cancelButton.addEventListener("click", () => {
  addTaskTitle.value = "";
  addTaskDescription.value = "";
  addTaskDueDate.value = new Date().toISOString().split("T")[0];
  addTaskPriority.value = "1";
});

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = addTaskTitle.value;
  const description = addTaskDescription.value;
  const dueDate = addTaskDueDate.value;
  const priority = addTaskPriority.value;

  addTask(title, description, dueDate, priority);

  addTaskTitle.value = "";
  addTaskDescription.value = "";
  addTaskDueDate.value = new Date().toISOString().split("T")[0];
  addTaskPriority.value = "1";
});



/* ========== APPEND ========== */
addTaskPriority.append(addTaskPriorityOption1, addTaskPriorityOption2, addTaskPriorityOption3, addTaskPriorityOption4, addTaskPriorityOption5);
buttons.append(cancelButton, addButton);
addTaskForm.append(addTaskTitleLabel, addTaskTitle, addTaskDescriptionLabel, addTaskDescription, addTaskDueDateLabel, addTaskDueDate, addTaskPriorityLabel, addTaskPriority, buttons);
addTaskContent.append(addTaskForm);
addTaskPage.append(addTaskHeader, addTaskContent);

module.exports = addTaskPage;
