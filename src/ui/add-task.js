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
}

export function createTask() {
  // create form
  const taskForm = document.createElement('form');
  taskForm.setAttribute('action', '#');
  taskForm.id = 'task-form';

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
  taskPriority.className = 'task-props';

  const priorityZero = document.createElement('option');
  priorityZero.setAttribute('disabled', 'disabled');
  priorityZero.setAttribute('selected', 'selected');
  priorityZero.text = 'Priority';

  const priorityOne = document.createElement('option');
  priorityOne.setAttribute('value', 'low');
  priorityOne.text = 'Low';

  const priorityTwo = document.createElement('option');
  priorityTwo.setAttribute('value', 'medium');
  priorityTwo.text = 'Medium';

  const priorityThree = document.createElement('option');
  priorityThree.setAttribute('value', 'high');
  priorityThree.text = 'High';

  // append priority levels to priority select element
  taskPriority.appendChild(priorityZero);
  taskPriority.appendChild(priorityOne);
  taskPriority.appendChild(priorityTwo);
  taskPriority.appendChild(priorityThree);

  // project
  const taskProject = document.createElement('select');
  taskProject.setAttribute('id', 'project');
  taskProject.className = 'task-props';

  const projectZero = document.createElement('option');
  projectZero.setAttribute('value', 'inbox');
  projectZero.setAttribute('selected', 'selected');
  projectZero.text = 'Inbox';

  // append projects to project select element
  taskProject.appendChild(projectZero);

  // cancel button
  const cancelTask = document.createElement('button');
  cancelTask.textContent = 'Cancel';
  cancelTask.className = 'form-button';

  // submit button
  const addTask = document.createElement('button');
  addTask.textContent = 'Add task';
  addTask.className = 'form-button';

  // append elements to form
  taskForm.appendChild(taskTitle);
  taskForm.appendChild(breakOne);
  taskForm.appendChild(taskDesc);
  taskForm.appendChild(breakTwo);
  taskForm.appendChild(taskDueDate);
  taskForm.appendChild(taskPriority);
  taskForm.appendChild(taskProject);
  taskForm.appendChild(cancelTask);
  taskForm.appendChild(addTask);

  document.getElementById('content-inner').appendChild(taskForm);
}
