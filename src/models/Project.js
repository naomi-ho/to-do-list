export default class Project {
  constructor(projectId, projectName) {
    this.projectId = projectId;
    this.projectName = projectName;
    this.tasks = [];
  }

  // push() adds task to end of tasks array
  addTask(task) {
    this.tasks.push(task);
  }

  // taskId is the unique identifier for the task that is to be updated
  updateTask(taskId, updatedTask) {
    // find index of task in the 'tasks' array
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    // if no element statisfies the condition, findIndex returns -1
    if (taskIndex === -1) {
      // '...this.tasks[taskIndex]' spreads properties of existing tasks into new object
      // '...updatedTask' spreads new properties into the same object
      // result: new properties overwrite existing properties if they have the same keys
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
    }
  }

  // filter() creates a shallow copy of the tasks array without the deleted task
  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
