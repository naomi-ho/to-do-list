export function displayTask(title, date) {
  const createdTaskDiv = document.createElement('div');
  createdTaskDiv.className = 'created-task';

  const completedBox = document.createElement('input');
  completedBox.type = 'checkbox';
  completedBox.name = 'completed';
  completedBox.id = 'completed';

  const taskName = document.createElement('span');
  taskName.textContent = title;

  const taskDate = document.createElement('span');
  taskDate.textContent = date;

  const taskButtonsDiv = document.createElement('div');
  taskButtonsDiv.className = 'task-inner-buttons';

  const detailsButton = document.createElement('button');
  detailsButton.textContent = '⋮';

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '&#x2715;';

  taskButtonsDiv.appendChild(detailsButton);
  taskButtonsDiv.appendChild(deleteButton);

  createdTaskDiv.appendChild(completedBox);
  createdTaskDiv.appendChild(taskName);
  createdTaskDiv.appendChild(taskDate);
  createdTaskDiv.appendChild(taskButtonsDiv);

  document.getElementById('content-inner').appendChild(createdTaskDiv);
}
