/* ========== IMPORTS ========== */
let tasks = require("../json/task.json");

function getTasks() {
  return tasks.list;
}

function addTask(taskTitle, taskDescription, taskDueDate, taskPriority) {
  tasks.list.push({
    id: tasks.list.length + 1,
    title: taskTitle,
    description: taskDescription,
    dueDate: {
      year: Number(taskDueDate.substring(0, 4)),
      month: Number(taskDueDate.substring(5, 7)),
      day: Number(taskDueDate.substring(8, 10))
    },
    priority: taskPriority,
    status: "pending"
  });

  console.log(tasks.list);
  fs.writeFile('../json/task.json', tasks, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function removeTask(taskId) {
  tasks.list = tasks.list.filter((task) => task.id !== taskId);
}

function getArchiveTasks() {
  const archiveTasks = tasks.list.filter((task) => task.status === "done");

  return archiveTasks;
}

function getTodayTasks() {
  const today = new Date();
  const todayTasks = tasks.list.filter((task) => {
    const taskDate = new Date(task.dueDate.year, task.dueDate.month - 1, task.dueDate.day);

    return taskDate.toDateString() === today.toDateString() && task.status === "pending";
  });

  return todayTasks;
}

module.exports = {
  tasks,
  getTasks, addTask, removeTask,
  getArchiveTasks, getTodayTasks
};
