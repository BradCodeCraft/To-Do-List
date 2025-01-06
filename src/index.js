import "./CSS/master.css";
import "./JS/DOMHandler.js";
import { TaskHandler } from "./JS/TaskHandler.js";
import { Functions } from "./JS/Functions.js";

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

console.log(TaskHandler.todoList);
console.log(TaskHandler.miscellaneousToDoList);
