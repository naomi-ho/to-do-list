import Task from '../models/Task';

export default function addTaskService(taskData) {
  const newTask = new Task(
    taskData.title,
    taskData.description,
    taskData.date,
    taskData.priority,
    taskData.project,
  );

  console.log(newTask);
}
