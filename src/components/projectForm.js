export default function createNewProjectForm(attatchTo) {
  const createForm = document.createElement('form');
  createForm.className += 'new-task';
  const h3 = document.createElement('h3');
  h3.innerText = 'New Task';
  // label plus input field for TASK-NAME:
  const taskInputLabel = document.createElement('label');
  taskInputLabel.setAttribute('for', 'task-name');
  taskInputLabel.innerHTML = 'Task Name: ';
  const taskInput = document.createElement('input');
  taskInput.className += 'task-input';
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('name', 'task-name');
  taskInput.setAttribute('required', '');

  // add the SUBMIT button
  const submitBtn = document.createElement('input');
  submitBtn.className += 'add-task';
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', '+ Add Task');

  // FINALLY, APPEND the elements Together to the form
  createForm.appendChild(h3);
  createForm.appendChild(taskInputLabel);
  createForm.appendChild(taskInput);
  createForm.appendChild(submitBtn);
  attatchTo.appendChild(createForm);
}
