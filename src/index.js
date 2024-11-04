import './ui/style.css';
import Task from './models/Task';
import Project from './models/Project';
import initialLoad from './ui/initial-load';

initialLoad();

const project1 = new Project(0, 'inbox');
console.log(project1);
