import { TaskHandler } from "./TaskHandler.js";

export const Functions = {
  convertMonth: function(month) {
    switch (Number(month)) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        break;
    }
  },
  convertDay: function(day) {
    switch (Number(day)) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      case 21:
        return "21st";
      case 22:
        return "22nd";
      case 23:
        return "23rd";
      case 31:
        return "31st";
      default:
        return `${day}th`;
    }
  },
  updateDisplay: function(todoList) {
    const taskList = document.querySelector(".content>.active>main>.content-list");
    taskList.innerHTML = "";
    todoList.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "content-list-item-card";
      taskElement.accessKey = task.id;
      taskElement.innerHTML = `
    <h2 class=${task.status.toLowerCase()}>Title: ${task.title}</h2>
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
        editTaskForm.accessKey = task.id;
        editTaskForm[0].value = task.title;
        editTaskForm[1].value = task.description;
        editTaskForm[2].value = task.project;
        editTaskForm[3].value = `${task.dueDate.year}-${task.dueDate.month}-${task.dueDate.day}`;
        editTaskForm[4].value = task.priority;
        editTaskForm[5].value = task.status;
      });

      taskElement.querySelector(".delete-task-button").addEventListener("click", (e) => {
        TaskHandler.deleteTask(Number(taskElement.accessKey));
        taskElement.remove();
      });

      taskElement.style.borderLeft = `3px solid rgb(var(--color-priority-${Number(task.priority)}))`

      taskList.appendChild(taskElement);
    });
  },
  updateTodayDisplay: function(todayToDoList) {
    const todayTaskList = document.querySelector(".today-page>main>.content-list");
    todayTaskList.innerHTML = "";
    todayToDoList.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "content-list-item-card";
      taskElement.accessKey = task.id;
      taskElement.innerHTML = `
    <h2 class=${task.status.toLowerCase()}>Title: ${task.title}</h2>
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
        editTaskForm.accessKey = task.id;
        editTaskForm[0].value = task.title;
        editTaskForm[1].value = task.description;
        editTaskForm[2].value = task.project;
        editTaskForm[3].value = `${task.dueDate.year}-${task.dueDate.month}-${task.dueDate.day}`;
        editTaskForm[4].value = task.priority;
        editTaskForm[5].value = task.status;
      });

      taskElement.querySelector(".delete-task-button").addEventListener("click", (e) => {
        TaskHandler.deleteTask(Number(taskElement.accessKey));
        taskElement.remove();
      });

      taskElement.style.borderLeft = `3px solid rgb(var(--color-priority-${Number(task.priority)}))`

      todayTaskList.appendChild(taskElement);
    });
  },
  updateUpcomingDisplay: function(upcomingToDoList) {
    const upcomingTaskList = document.querySelector(".upcoming-page>main>.content-list");
    upcomingTaskList.innerHTML = "";
    upcomingToDoList.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "content-list-item-card";
      taskElement.accessKey = task.id;
      taskElement.innerHTML = `
    <h2 class=${task.status.toLowerCase()}>Title: ${task.title}</h2>
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
        editTaskForm.accessKey = task.id;
        editTaskForm[0].value = task.title;
        editTaskForm[1].value = task.description;
        editTaskForm[2].value = task.project;
        editTaskForm[3].value = `${task.dueDate.year}-${task.dueDate.month}-${task.dueDate.day}`;
        editTaskForm[4].value = task.priority;
        editTaskForm[5].value = task.status;
      });

      taskElement.querySelector(".delete-task-button").addEventListener("click", (e) => {
        TaskHandler.deleteTask(Number(taskElement.accessKey));
        taskElement.remove();
      });

      taskElement.style.borderLeft = `3px solid rgb(var(--color-priority-${Number(task.priority)}))`

      upcomingTaskList.appendChild(taskElement);
    });
  },
  updateArchiveDisplay: function(archiveToDoList) {
    const archiveTaskList = document.querySelector(".archive-page>main>.content-list");
    archiveTaskList.innerHTML = "";
    archiveToDoList.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "content-list-item-card";
      taskElement.accessKey = task.id;
      taskElement.innerHTML = `
    <h2 class=${task.status.toLowerCase()}>Title: ${task.title}</h2>
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
        editTaskForm.accessKey = task.id;
        editTaskForm[0].value = task.title;
        editTaskForm[1].value = task.description;
        editTaskForm[2].value = task.project;
        editTaskForm[3].value = `${task.dueDate.year}-${task.dueDate.month}-${task.dueDate.day}`;
        editTaskForm[4].value = task.priority;
        editTaskForm[5].value = task.status;
      });

      taskElement.querySelector(".delete-task-button").addEventListener("click", (e) => {
        TaskHandler.deleteTask(Number(taskElement.accessKey));
        taskElement.remove();
      });

      taskElement.style.borderLeft = `3px solid rgb(var(--color-priority-${Number(task.priority)}))`

      archiveTaskList.appendChild(taskElement);
    });
  }
}
