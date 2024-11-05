import './ui/style.css';
import Task from './models/Task';
import Project from './models/Project';
import initialLoad from './ui/initial-load';

initialLoad();

// create default inbox project
export const project0 = new Project('inbox');
