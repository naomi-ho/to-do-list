import './ui/style.css';
import Task from './models/Task';
import initialLoad from './ui/initial-load';

initialLoad();

const item1 = new Task(1, 'finish project', 'blah blah', '2024-10-30', 'home');

console.log(item1);
