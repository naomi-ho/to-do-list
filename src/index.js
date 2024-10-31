import './ui/style.css';
import Task from './models/Task';
import Project from './models/Project';
import initialLoad from './ui/initial-load';
import { createTask } from './ui/add-task';

initialLoad();

const project1 = new Project(0, 'inbox');
console.log(project1);

const taskBtn = document.getElementById('task-button');

taskBtn.addEventListener('click', (e) => {
  const item1 = new Task(
    1,
    'finish project',
    'blah blah',
    '2024-10-30',
    'home',
  );
  console.log(item1);
  createTask();
});
