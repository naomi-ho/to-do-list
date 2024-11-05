import addTaskService from '../services/add-task-service';
import { project0 } from '../index';
import { displayTask } from './display-project';

export default function addTask() {
  const taskBtn = document.createElement('button');
  taskBtn.id = 'task-button';

  const taskBtnIcon = document.createElement('span');
  const taskBtnText = document.createElement('span');

  taskBtnIcon.innerHTML = '&#65291;';
  taskBtnIcon.id = 'task-button-icon';

  taskBtnText.textContent = 'Add task';
  taskBtnText.id = 'task-button-text';

  taskBtn.appendChild(taskBtnIcon);
  taskBtn.appendChild(taskBtnText);

  document.getElementById('content-inner').appendChild(taskBtn);

  addTaskForm();
}

export function createTaskForm() {
  // create form
  const taskForm = document.createElement('form');
  taskForm.setAttribute('action', '#');
  taskForm.id = 'task-form';

  // details div
  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'details';

  // task name
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute('type', 'text');
  taskTitle.setAttribute('placeholder', 'Task name');
  taskTitle.setAttribute('name', 'title');
  taskTitle.setAttribute('id', 'title');
  taskTitle.id = 'task-title';

  const breakOne = document.createElement('br');

  // task description
  const taskDesc = document.createElement('input');
  taskDesc.setAttribute('type', 'text');
  taskDesc.setAttribute('placeholder', 'Description');
  taskDesc.setAttribute('name', 'description');
  taskDesc.setAttribute('id', 'description');
  taskDesc.id = 'task-desc';

  const breakTwo = document.createElement('br');

  // append to details div
  detailsDiv.appendChild(taskTitle);
  detailsDiv.appendChild(breakOne);
  detailsDiv.appendChild(taskDesc);
  detailsDiv.appendChild(breakTwo);

  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons';

  const propertyDiv = document.createElement('div');
  propertyDiv.className = 'properties';

  // due date
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute('type', 'date');
  taskDueDate.setAttribute('placeholder', 'Due date');
  taskDueDate.setAttribute('name', 'date');
  taskDueDate.setAttribute('id', 'date');
  taskDueDate.className = 'task-props';

  // task priority
  const taskPriority = document.createElement('select');
  taskPriority.setAttribute('id', 'priority');
  taskPriority.setAttribute('name', 'priority');
  taskPriority.className = 'task-props';

  const priorityZero = document.createElement('option');
  priorityZero.setAttribute('selected', 'selected');
  priorityZero.setAttribute('disabled', 'disabled');
  priorityZero.text = 'Priority';

  const priorityOne = document.createElement('option');
  priorityOne.name = 'low';
  priorityOne.value = 'low';
  priorityOne.text = 'Low';

  const priorityTwo = document.createElement('option');
  priorityTwo.name = 'medium';
  priorityTwo.value = 'medium';
  priorityTwo.text = 'Medium';

  const priorityThree = document.createElement('option');
  priorityThree.name = 'high';
  priorityThree.value = 'high';
  priorityThree.text = 'High';

  // append priority levels to priority select element
  taskPriority.appendChild(priorityZero);
  taskPriority.appendChild(priorityOne);
  taskPriority.appendChild(priorityTwo);
  taskPriority.appendChild(priorityThree);

  // project
  const taskProject = document.createElement('select');
  taskProject.setAttribute('id', 'project');
  taskProject.setAttribute('name', 'project');
  taskProject.className = 'task-props';

  const projectZero = document.createElement('option');
  projectZero.value = 'inbox';
  projectZero.setAttribute('selected', 'selected');
  projectZero.text = 'Inbox';

  // append projects to project select element
  taskProject.appendChild(projectZero);

  // append task-props to properties div
  propertyDiv.appendChild(taskDueDate);
  propertyDiv.appendChild(taskPriority);
  propertyDiv.appendChild(taskProject);

  // form button div
  const formButtonDiv = document.createElement('div');
  formButtonDiv.className = 'form-buttons';

  // cancel button
  const cancelTask = document.createElement('button');
  cancelTask.textContent = 'Cancel';
  cancelTask.className = 'form-button';
  cancelTask.id = 'cancel';

  // submit button
  const addTask = document.createElement('button');
  addTask.textContent = 'Add task';
  addTask.className = 'form-button';
  addTask.id = 'submit-task';

  // append buttons to form button div
  formButtonDiv.appendChild(cancelTask);
  formButtonDiv.appendChild(addTask);

  buttonsDiv.appendChild(propertyDiv);
  buttonsDiv.appendChild(formButtonDiv);

  // append elements to form
  taskForm.appendChild(detailsDiv);
  taskForm.appendChild(buttonsDiv);

  document.getElementById('content-inner').appendChild(taskForm);

  removeTaskForm();
  createNewTask();
}

function addTaskForm() {
  const taskBtn = document.getElementById('task-button');

  taskBtn.addEventListener('click', (e) => {
    taskBtn.remove();
    createTaskForm();
  });
}

function removeTaskForm() {
  const cancelBtn = document.getElementById('cancel');
  const taskForm = document.getElementById('task-form');

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskForm.remove();
    addTask();
  });
}

function createNewTask() {
  const addTaskBtn = document.getElementById('submit-task');
  const taskForm = document.getElementById('task-form');

  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const taskData = {
      title: formData.get('title'),
      description: formData.get('description'),
      date: formData.get('date'),
      priority: formData.get('priority'),
      project: formData.get('project'),
    };

    addTaskService(taskData);
    taskForm.remove();

    if (formData.get('project') === 'inbox') {
      project0.addTask(taskData);

      displayTask(taskData.title, taskData.date);
      console.log(project0);
    }

    addTask();
  });
}
