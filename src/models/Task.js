export default class Task {
  constructor(id, title, description, dueDate, priority, project) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false; // initialise as not completed
  }
}
