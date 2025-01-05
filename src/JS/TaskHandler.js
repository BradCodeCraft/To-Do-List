export const TaskHandler = {
  todoList: [],
  todayToDoList: [],
  upcomingToDoList: [],
  archiveToDoList: [],
  getToDoList: function() {
    let storage;

    try {
      storage = window["localStorage"];

      if (storage.getItem("todoList")) {
        this.todoList = JSON.parse(storage.getItem("todoList"));
      } else {
        storage.setItem("todoList", JSON.stringify(this.todoList));
      }

      return this.todoList;
    } catch (e) {
      console.error(e);
    }
  },
  setToDoList: function() {
    let storage;

    try {
      storage = window["localStorage"];

      storage.setItem("todoList", JSON.stringify(this.todoList));
    } catch (e) {
      console.error(e);
    }
  },
  addTask: function(task) {
    this.todoList.push(task);
    this.setToDoList();
    this.getToDoList();
  },
  deleteTask: function(taskId) {
    this.todoList = this.todoList.filter((task) => task.id !== taskId);
    this.setToDoList();
    this.getToDoList();
  },
  updateTask: function(task) {
    this.todoList[task.id - 1] = task;
    console.log(this.todoList);
    this.setToDoList();
    this.getToDoList();
  },
  getTodayToDoList: function() {
    const today = new Date();
    const todayDay = today.getDate().toString().length === 1 ?
      "0" + today.getDate().toString() :
      today.getDate();
    const todayMonth = (today.getMonth() + 1).toString().length === 1 ?
      "0" + (today.getMonth() + 1) :
      (today.getMonth() + 1).toString();


    this.todayToDoList = this.todoList.filter((task) => {
      return task.dueDate.year === today.getFullYear().toString() &&
        task.dueDate.month === todayMonth &&
        task.dueDate.day === todayDay;
    })
  },
  getUpcomingToDoList: function() {
    const today = new Date();
    const todayDay = today.getDate().toString().length === 1 ?
      "0" + today.getDate().toString() :
      today.getDate();
    const todayMonth = (today.getMonth() + 1).toString().length === 1 ?
      "0" + (today.getMonth() + 1) :
      (today.getMonth() + 1).toString();

    this.upcomingToDoList = this.todoList.filter((task) => {
      return task.dueDate.year >= today.getFullYear().toString() &&
        task.dueDate.month >= todayMonth &&
        task.dueDate.day > todayDay;
    });
  },
  getArchiveToDoList: function() {
    this.archiveToDoList = this.todoList.filter((task) => task.status === "Completed");
  },
}
