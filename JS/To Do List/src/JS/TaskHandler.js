export const TaskHandler = {
  todoList: [],
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
  }
}
