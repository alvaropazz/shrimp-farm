export default function newPondForm(attatchTo) {
  const createForm = document.createElement('form');
  createForm.className += 'new-task';
  const h3 = document.createElement('h3');
  h3.innerText = 'New Pond';
  // label plus input field for TASK-NAME:
  const taskInputLabel = document.createElement('label');
  taskInputLabel.setAttribute('for', 'task-name');
  taskInputLabel.innerHTML = 'Pond Name: ';
  const taskInput = document.createElement('input');
  taskInput.className += 'task-input';
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('name', 'task-name');
  taskInput.setAttribute('required', '');

  const sizeInputLabel = document.createElement('label');
  sizeInputLabel.setAttribute('for', 'task-size');
  sizeInputLabel.innerHTML = 'Size in hectares: ';
  const sizeInput = document.createElement('input');
  sizeInput.className += 'task-input';
  sizeInput.setAttribute('type', 'number');
  sizeInput.setAttribute('min', '0');
  sizeInput.setAttribute('max', '1000');
  sizeInput.setAttribute('step', '0.01');
  sizeInput.setAttribute('name', 'task-size');
  sizeInput.setAttribute('required', '');

  // add the SUBMIT button
  const submitBtn = document.createElement('input');
  submitBtn.className += 'add-task';
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'ADD POND');

  // FINALLY, APPEND the elements Together to the form
  createForm.appendChild(h3);
  createForm.appendChild(taskInputLabel);
  createForm.appendChild(taskInput);
  createForm.appendChild(sizeInputLabel);
  createForm.appendChild(sizeInput);
  createForm.appendChild(submitBtn);
  attatchTo.appendChild(createForm);
}
