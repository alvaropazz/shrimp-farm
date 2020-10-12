import createNewProjectForm from './taskForm';

export default function createProject(name, description, prIndex) {
  const addProject = document.querySelector('.projects');
  const newProject = document.createElement('div');
  newProject.className += 'to-do';
  newProject.setAttribute('data-index', `${prIndex}`);
 
  const h2 = document.createElement('h2');
  h2.className += 'to-do-title';
  h2.setAttribute('contentEditable', 'true');
  h2.innerHTML = `${name}`;

  const p = document.createElement('p');
  p.className += 'to-do-description';
  p.setAttribute('contentEditable', 'true');
  p.innerHTML = `${description}`;

  const newTask = document.createElement('button');
  newTask.className += 'add-tsk';
  newTask.innerHTML = 'New Pond';

  const deleteProject = document.createElement('button');
  deleteProject.className += 'dlt-prjct';
  deleteProject.innerHTML = 'Delete';

  const editProject = document.createElement('button');
  editProject.className += 'edit-prjct';
  editProject.innerHTML = 'Edit';

  addProject.appendChild(newProject);
  newProject.appendChild(h2);
  newProject.appendChild(p);
  newProject.appendChild(newTask);
  createNewProjectForm(newProject);
  newProject.appendChild(deleteProject);
  newProject.appendChild(editProject);
}
