import "./CSS/master.css";
import "./JS/DOMHandler.js";
import { TaskHandler } from "./JS/TaskHandler.js";
import { Functions } from "./JS/Functions.js";

TaskHandler.getToDoList();

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
    statis: "pending"
  }

  TaskHandler.addTask(task);

  // Update the DOM
  const taskList = document.querySelector(".content>.active>main>.content-list");
  const taskElement = document.createElement("div");
  taskElement.className = "content-list-item-card";
  taskElement.accessKey = task.id;
  taskElement.innerHTML = `
    <input type="checkbox" class="content-list-item-card-checkbox">
    <h2>Title: ${task.title}</h2>
    <p>Due: ${Functions.convertMonth(task.dueDate.month)} ${Functions.convertDay(task.dueDate.day)}</p>
    <div class="content-list-item-card-buttons">
      <button class="edit-task-button">Edit</button>
      <button class="delete-task-button">Delete</button>
    </div>  
  `;
  taskElement.style.borderLeft = `3px solid rgb(var(--color-priority-${Number(task.priority)}))`
  taskList.appendChild(taskElement);

  addTaskForm.reset();
  const addTaskDueDateInput = document.querySelector(".add-task>form>#taskDueDate");
  addTaskDueDateInput.value = new Date().toISOString().split("T")[0];

  const addTaskPage = document.querySelector(".add-task");
  addTaskPage.className = "add-task invisible";
});

const taskList = document.querySelector(".content>.active>main>.content-list");
TaskHandler.todoList.forEach((task) => {
  const taskElement = document.createElement("div");
  taskElement.className = "content-list-item-card";
  taskElement.accessKey = task.id;
  taskElement.innerHTML = `
    <input type="checkbox" class="content-list-item-card-checkbox">
    <h2>Title: ${task.title}</h2>
    <p>Due: ${Functions.convertMonth(task.dueDate.month)} ${Functions.convertDay(task.dueDate.day)}</p>
    <div class="content-list-item-card-buttons">
      <button class="edit-task-button">Edit</button>
      <button class="delete-task-button">Delete</button>
    </div>  
  `;

  taskElement.querySelector(".edit-task-button").addEventListener("click", (e) => {
    const task = TaskHandler.todoList.find((task) => task.id === Number(taskElement.accessKey));
    const editTaskPage = document.querySelector(".edit-task");
    editTaskPage.className = "edit-task";

    const editTaskForm = document.querySelector(".edit-task>form");
    editTaskForm[0].value = task.title;
    editTaskForm[1].value = task.description;
    editTaskForm[2].value = task.project;
    editTaskForm[3].value = `${task.dueDate.year}-${task.dueDate.month}-${task.dueDate.day}`;
    editTaskForm[4].value = task.priority;
  });

  taskElement.querySelector(".delete-task-button").addEventListener("click", (e) => {
    TaskHandler.deleteTask(Number(taskElement.accessKey));
    taskElement.remove();
  });

  taskElement.style.borderLeft = `3px solid rgb(var(--color-priority-${Number(task.priority)}))`

  taskList.appendChild(taskElement);
});
