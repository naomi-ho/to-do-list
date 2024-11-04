import './ui/style.css';
import Task from './models/Task';
import Project from './models/Project';
import initialLoad from './ui/initial-load';
import addTask, { createTask } from './ui/add-task';

initialLoad();

const project1 = new Project(0, 'inbox');
console.log(project1);
