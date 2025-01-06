import { TaskHandler } from "./TaskHandler.js";
import { Functions } from "./Functions.js";

const navbarControls = document.querySelectorAll(".main-controls");
const content = document.querySelector(".content");

navbarControls.forEach((div) => {
  if (div.id === "add-task") {
    div.addEventListener("click", (e) => {
      const addTaskPage = document.querySelector(".add-task");
      addTaskPage.className = "add-task active";
    })
  } else {
    div.addEventListener("click", (e) => {
      const page = `${div.id}-page`;

      for (let child of content.children) {
        if (child.classList.contains(page)) {
          child.style.display = "block";
          child.className = `${page} active`;

          /* ========== GET TASKS ========== */
          TaskHandler.getToDoList();
          TaskHandler.getTodayToDoList();
          TaskHandler.getUpcomingToDoList();
          TaskHandler.getArchiveToDoList();
          TaskHandler.getPersonalToDoList();
          TaskHandler.getProfessionalToDoList();
          TaskHandler.getMiscellaneousToDoList();
          /* ========== UPDATE DISPLAYS ========== */
          Functions.updateDisplay(TaskHandler.todoList);
          Functions.updateTodayDisplay(TaskHandler.todayToDoList);
          Functions.updateUpcomingDisplay(TaskHandler.upcomingToDoList);
          Functions.updateArchiveDisplay(TaskHandler.archiveToDoList);
          Functions.updatePersonalDisplay(TaskHandler.personalToDoList);
          Functions.updateProfessionaDisplay(TaskHandler.professionalToDoList);
          Functions.updateMiscellaneousDisplay(TaskHandler.miscellaneousToDoList);

        } else {
          if (child.classList.contains("add-task")) {
            child.className = "add-task hidden";
          } else {
            child.style.display = "none";
            child.className = `${child.className.split(" ")[0]} hidden`;
          }
        }
      }

      for (let control of navbarControls) {
        if (control.id === div.id) {
          control.className = "main-controls selected";
        } else {
          control.className = "main-controls";
        }
      }

      for (let project of document.querySelector(".main-mid>.projects").children) {
        project.className = "main-groups";
      }
    })
  }
});

const addTaskDueDateInput = document.querySelector(".add-task>form>#taskDueDate");
addTaskDueDateInput.value = new Date().toISOString().split("T")[0];

const addTaskFormCancelButton = document.querySelector(".add-task>form>.buttons>.cancel-task-button");
addTaskFormCancelButton.addEventListener("click", () => {
  const addTaskForm = document.querySelector(".add-task>form");
  addTaskForm.reset();
  const addTaskDueDateInput = document.querySelector(".add-task>form>#taskDueDate");
  addTaskDueDateInput.value = new Date().toISOString().split("T")[0];

  const addTaskPage = document.querySelector(".add-task");
  addTaskPage.className = "add-task invisible";

  const navbarControls = document.querySelector(".main-top");
  for (let child of navbarControls.children) {
    if (child.id === "home") {
      child.className = "main-controls selected";
    } else {
      child.className = "main-controls";
    }
  }

  const contentDiv = document.querySelector(".content");
  for (let child of contentDiv.children) {
    if (!child.classList.contains("home-page")) {
      child.style.display = "none";
      child.className = `${child.className.split(" ")[0]} hidden`;
    } else {
      child.style.display = "block";
      child.className = "home-page active";
    }
  }
});


const editTaskFormCancelButton = document.querySelector(".edit-task>form>.buttons>.cancel-task-button");
editTaskFormCancelButton.addEventListener("click", () => {
  const editTaskForm = document.querySelector(".edit-task>form");
  editTaskForm.accessKey = "";
  editTaskForm.reset();

  const editTaskPage = document.querySelector(".edit-task");
  editTaskPage.className = "edit-task invisible";
});


const navbarGroupListItems = document.querySelectorAll(".main-mid>.projects>.main-groups");
navbarGroupListItems.forEach((currentGroup) => {
  currentGroup.addEventListener("click", (e) => {
    const page = `${currentGroup.id}-page`;

    for (let control of navbarControls) {
      control.className = "main-controls";
    }

    for (let div of content.children) {
      if (div.classList.contains(page)) {
        div.style.display = "block";
        div.className = `${page} active`;
      } else {
        div.style.display = "none";
        div.className = `${div.className.split(" ")[0]} hidden`;
      }
    }

    for (let group of navbarGroupListItems) {
      if (group.id === currentGroup.id) {
        group.className = "main-groups selected";
      } else {
        group.className = "main-groups";
      }
    }
  })
});


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
  for (let child of navbarControls.children) {
    if (child.id === "home") {
      child.className = "main-controls selected";
    } else {
      child.className = "main-controls";
    }
  }

  const contentDiv = document.querySelector(".content");
  for (let child of contentDiv.children) {
    if (!child.classList.contains("home-page")) {
      child.style.display = "none";
      child.className = `${child.className.split(" ")[0]} hidden`;
    } else {
      child.style.display = "block";
      child.className = "home-page active";
    }
  }

  const navbarProjects = document.querySelector(".main-mid>.projects");
  for (let child of navbarProjects.children) {
    child.className = "main-groups";
  }
  /* ========== GET TASKS ========== */
  TaskHandler.getToDoList();
  TaskHandler.getTodayToDoList();
  TaskHandler.getUpcomingToDoList();
  TaskHandler.getArchiveToDoList();
  TaskHandler.getPersonalToDoList();
  TaskHandler.getProfessionalToDoList();
  TaskHandler.getMiscellaneousToDoList();
  /* ========== UPDATE DISPLAYS ========== */
  Functions.updateDisplay(TaskHandler.todoList);
  Functions.updateTodayDisplay(TaskHandler.todayToDoList);
  Functions.updateUpcomingDisplay(TaskHandler.upcomingToDoList);
  Functions.updateArchiveDisplay(TaskHandler.archiveToDoList);
  Functions.updatePersonalDisplay(TaskHandler.personalToDoList);
  Functions.updateProfessionaDisplay(TaskHandler.professionalToDoList);
  Functions.updateMiscellaneousDisplay(TaskHandler.miscellaneousToDoList);

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
  TaskHandler.getPersonalToDoList();
  TaskHandler.getProfessionalToDoList();
  TaskHandler.getMiscellaneousToDoList();

  const editTaskPage = document.querySelector(".edit-task");
  editTaskPage.className = "edit-task invisible";

  const navbarControls = document.querySelector(".main-top");
  for (let child of navbarControls.children) {
    if (child.id === "home") {
      child.className = "main-controls selected";
    } else {
      child.className = "main-controls";
    }
  }

  const contentDiv = document.querySelector(".content");
  for (let child of contentDiv.children) {
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
  Functions.updatePersonalDisplay(TaskHandler.personalToDoList);
  Functions.updateProfessionaDisplay(TaskHandler.professionalToDoList);
  Functions.updateMiscellaneousDisplay(TaskHandler.miscellaneousToDoList);
});
