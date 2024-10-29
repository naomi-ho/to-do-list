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

  document.getElementById('content').appendChild(taskBtn);
}
