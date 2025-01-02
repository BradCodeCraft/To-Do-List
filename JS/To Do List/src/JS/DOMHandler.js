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

      for (child of content.children) {
        if (child.classList.contains(page)) {
          child.style.display = "block";
          child.className = `${page} active`;
        } else {
          if (child.classList.contains("add-task")) {
            child.className = "add-task hidden";
          } else {
            child.style.display = "none";
            child.className = `${child.className.split(" ")[0]} hidden`;
          }
        }
      }

      for (child of document.querySelector(".main-top").children) {
        if (child.id === div.id) {
          child.className = "main-controls selected";
        } else {
          child.className = "main-controls";
        }
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
});


const editTaskFormCancelButton = document.querySelector(".edit-task>form>.buttons>.cancel-task-button");
editTaskFormCancelButton.addEventListener("click", () => {
  const editTaskForm = document.querySelector(".edit-task>form");
  editTaskForm.accessKey = "";
  editTaskForm.reset();

  const editTaskPage = document.querySelector(".edit-task");
  editTaskPage.className = "edit-task invisible";
});

