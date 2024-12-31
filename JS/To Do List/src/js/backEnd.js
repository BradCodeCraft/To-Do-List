/* ========== IMPORTS ========== */
let tasks = require("../json/task.json");

function getTasks() {
  return tasks.list;
}

function removeTask(taskId) {
  tasks.list = tasks.list.filter((task) => task.id !== taskId);
}

function getTodayTasks() {
  const today = new Date();
  const todayTasks = tasks.list.filter((task) => {
    const taskDate = new Date(task.dueDate.year, task.dueDate.month - 1, task.dueDate.day);

    return taskDate.toDateString() === today.toDateString();
  });

  return todayTasks;
}

module.exports = {
  tasks,
  getTasks, removeTask,
  getTodayTasks,
};
