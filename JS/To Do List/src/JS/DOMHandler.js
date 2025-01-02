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
});


const editTaskFormCancelButton = document.querySelector(".edit-task>form>.buttons>.cancel-task-button");
editTaskFormCancelButton.addEventListener("click", () => {
  const editTaskForm = document.querySelector(".edit-task>form");
  editTaskForm.reset();

  const editTaskPage = document.querySelector(".edit-task");
  editTaskPage.className = "edit-task invisible";
});
