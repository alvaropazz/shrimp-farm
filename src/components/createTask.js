export default function createTask(
  tsName,
  size,
  parentElement,
  tsIndex,
) {
  const addTask = document.querySelector(`div[data-index="${parentElement}"]`);
  const newTask = document.createElement('div');
  newTask.className += 'task-list';
  newTask.setAttribute('data-task', `${tsIndex}`);
  
  const span = document.createElement('span');
  span.className += 'task-text';
  
  const p1 = document.createElement('p');
  p1.className += 'task-desc';
  p1.setAttribute('contentEditable', 'true');
  p1.innerHTML = `${tsName}`;

  const p2 = document.createElement('p');
  p2.className += 'task-size';
  p2.setAttribute('contentEditable', 'true');
  p2.innerHTML = `${size}`;

  const deleteButton = document.createElement('button');
  deleteButton.className += 'delete-task';
  const trashBin = document.createElement('i');
  trashBin.className += 'fas fa-trash-alt';

  const editButton = document.createElement('button');
  editButton.className += 'edit-task';
  const check = document.createElement('i');
  check.className += 'fas fa-check';


  addTask.appendChild(newTask);
  newTask.appendChild(span);
  span.appendChild(p1);
  span.appendChild(p2);
  newTask.appendChild(deleteButton);
  deleteButton.appendChild(trashBin);
  newTask.appendChild(editButton);
  editButton.appendChild(check); 
}
