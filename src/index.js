import "./CSS/master.css";
import "./JS/DOMHandler.js";
import { TaskHandler } from "./JS/TaskHandler.js";
import { Functions } from "./JS/Functions.js";

/* ========== GET TASKS ========== */
TaskHandler.getToDoList();
TaskHandler.getTodayToDoList();
TaskHandler.getUpcomingToDoList();
TaskHandler.getArchiveToDoList();

/* ========== UPDATE DISPLAYS ========== */
Functions.updateDisplay(TaskHandler.todoList);
Functions.updateTodayDisplay(TaskHandler.todayToDoList);
Functions.updateUpcomingDisplay(TaskHandler.upcomingToDoList);
Functions.updateArchiveDisplay(TaskHandler.archiveToDoList);

const addTaskForm = document.querySelector(".add-task>form");
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = {
    id: TaskHandler.todoList.length + 1,
    title: e.target[0].value,
    description: e.target[1].value,
    project: e.target[2].value,
    dueDate: {
      year: e.target[3].value.split("-")[0],
      month: e.target[3].value.split("-")[1],
      day: e.target[3].value.split("-")[2],
    },
    priority: e.target[4].value,
    status: "Not Started"
  }

  TaskHandler.addTask(task);

  // Update the DOM
  const navbarControls = document.querySelector(".main-top");
  for (child of navbarControls.children) {
    if (child.id === "home") {
      child.className = "main-controls selected";
    } else {
      child.className = "main-controls";
    }
  }

  const contentDiv = document.querySelector(".content");
  for (child of contentDiv.children) {
    if (!child.classList.contains("home-page")) {
      child.style.display = "none";
      child.className = `${child.className.split(" ")[0]} hidden`;
    } else {
      child.style.display = "block";
      child.className = "home-page active";
    }
  }
  /* ========== GET TASKS ========== */
  TaskHandler.getToDoList();
  TaskHandler.getTodayToDoList();
  TaskHandler.getUpcomingToDoList();
  TaskHandler.getArchiveToDoList();
  /* ========== UPDATE DISPLAYS ========== */
  Functions.updateDisplay(TaskHandler.todoList);
  Functions.updateTodayDisplay(TaskHandler.todayToDoList);
  Functions.updateUpcomingDisplay(TaskHandler.upcomingToDoList);
  Functions.updateArchiveDisplay(TaskHandler.archiveToDoList);

  addTaskForm.reset();
  const addTaskDueDateInput = document.querySelector(".add-task>form>#taskDueDate");
  addTaskDueDateInput.value = new Date().toISOString().split("T")[0];

  const addTaskPage = document.querySelector(".add-task");
  addTaskPage.className = "add-task invisible";
});

const editTaskForm = document.querySelector(".edit-task>form");
editTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = {
    id: Number(e.target.accessKey),
    title: e.target[0].value,
    description: e.target[1].value,
    project: e.target[2].value,
    dueDate: {
      year: e.target[3].value.split("-")[0],
      month: e.target[3].value.split("-")[1],
      day: e.target[3].value.split("-")[2],
    },
    priority: e.target[4].value,
    status: e.target[5].value
  }

  TaskHandler.updateTask(task);

  editTaskForm.reset();

  /* ========== GET TASKS ========== */
  TaskHandler.getToDoList();
  TaskHandler.getTodayToDoList();
  TaskHandler.getUpcomingToDoList();
  TaskHandler.getArchiveToDoList();

  const editTaskPage = document.querySelector(".edit-task");
  editTaskPage.className = "edit-task invisible";

  const navbarControls = document.querySelector(".main-top");
  for (child of navbarControls.children) {
    if (child.id === "home") {
      child.className = "main-controls selected";
    } else {
      child.className = "main-controls";
    }
  }

  const contentDiv = document.querySelector(".content");
  for (child of contentDiv.children) {
    if (!child.classList.contains("home-page")) {
      child.style.display = "none";
      child.className = `${child.className.split(" ")[0]} hidden`;
    } else {
      child.style.display = "block";
      child.className = "home-page active";
    }
  }

  /* ========== UPDATE DISPLAYS ========== */
  Functions.updateDisplay(TaskHandler.todoList);
  Functions.updateTodayDisplay(TaskHandler.todayToDoList);
  Functions.updateUpcomingDisplay(TaskHandler.upcomingToDoList);
  Functions.updateArchiveDisplay(TaskHandler.archiveToDoList);
});

