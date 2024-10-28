export default class Task {
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = this.priority;
    this.completed = false; // initialise as not completed
  }
}
