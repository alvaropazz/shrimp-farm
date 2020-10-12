/* eslint-disable no-restricted-globals */
import './styles.css';
import * as Storage from './components/storage';
import createPond from './components/createPond';
import createFarm from './components/createFarm';
import Farm from './components/farmConstructor';
import Pond from './components/pondConstructor';

// add all local storage projects to the DOM
const allProjects = Storage.getFarms();

if (allProjects === undefined) {
  Storage.createArray();
} else {
  allProjects.forEach((project, index) => {
    createFarm(project.name, project.description, index);
    project.tasks.forEach((task, chIndex) => {
      createPond(
        task.name,
        task.size,
        index,
        chIndex,
      );
    });
  });
}

const projectForm = document.querySelector('.add-project');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectForm.querySelector('input[name="project-name"]').value;
  const projectDesc = projectForm.querySelector('input[name="project-desc"]').value;
  const projectNew = new Farm(projectName, projectDesc);
  Storage.addFarm(projectNew);
  const len = Storage.getFarms().length;
  const indices = len === 0 ? len : len - 1;
  createFarm(projectNew.name, projectNew.description, indices);
  projectForm.reset();
  if (projectForm.style.display === 'block') {
    projectForm.style.display = 'none';
  } else {
    projectForm.style.display = 'block';
  }
});

const taskForm = document.querySelector('.projects');
taskForm.addEventListener('submit', (e) => {
  const form = e.target;
  const task = form.querySelector('input[name="task-name"]').value;
  const size = form.querySelector('input[name="task-size"]').value;
  const cTask = new Pond(task, size);
  const parent = form.parentElement;
  const parIndex = parent.getAttribute('data-index');
  Storage.addPond(cTask, parIndex);
  const allProjects = Storage.getFarms();
  const taskParent = allProjects[parIndex];
  const taskArr = taskParent.tasks.length - 1;
  createPond(
    cTask.name,
    cTask.size,
    parIndex,
    taskArr,
  );

  e.target.reset();
  return true;
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'delete-task') {
    const parTask = e.target.parentElement;
    const parTaskIndex = parTask.getAttribute('data-task');
    const grandParTask = e.target.parentElement.parentElement;
    const grandParIndex = grandParTask.getAttribute('data-index');
    grandParTask.removeChild(parTask);
    Storage.deletePond(parTaskIndex, grandParIndex);
    location.reload();
  } else if (e.target.className === 'fas fa-trash-alt') {
    const parTask = e.target.parentElement.parentElement;
    const parTaskIndex = parTask.getAttribute('data-task');
    const grandParTask = e.target.parentElement.parentElement.parentElement;
    const grandParIndex = grandParTask.getAttribute('data-index');
    grandParTask.removeChild(parTask);
    Storage.deletePond(parTaskIndex, grandParIndex);
    location.reload();
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'edit-task') {
    const project = e.target.parentElement.parentElement.getAttribute('data-index');
    const task = e.target.parentElement.getAttribute('data-task');
    const specific = document.querySelector(`div[data-index="${project}"]`);
    const subsp = specific.querySelector(`div[data-task="${task}"]`);
    const nameSelect = subsp.querySelector('.task-desc');
    const sizeSelect = subsp.querySelector('.task-size');
    const newName = nameSelect.innerHTML;
    const newSize = sizeSelect.innerHTML;
    Storage.updatePond(project, task, newName, newSize);
    location.reload();
  } else if (e.target.className === 'fas fa-check') {
    const project = e.target.parentElement.parentElement.parentElement.getAttribute('data-index');
    const task = e.target.parentElement.parentElement.getAttribute('data-task');
    const specific = document.querySelector(`div[data-index="${project}"]`);
    const subsp = specific.querySelector(`div[data-task="${task}"]`);
    const nameSelect = subsp.querySelector('.task-desc');
    const sizeSelect = subsp.querySelector('.task-size');
    const newName = nameSelect.innerHTML;
    const newSize = sizeSelect.innerHTML;
    Storage.updatePond(project, task, newName, newSize);
    location.reload();
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'dlt-farm') {
    const parProject = e.target.parentElement;
    const parProjectIndex = parProject.getAttribute('data-index');
    Storage.deleteFarm(parProjectIndex);
    taskForm.removeChild(parProject);
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'edit-farm') {
    const parProjectIndex = e.target.parentElement.getAttribute('data-index');
    const origen = document.querySelector(`div[data-index="${parProjectIndex}"]`);
    const newTitle = origen.querySelector('.farm-title');
    const newDesc = origen.querySelector('.farm-description');
    const userT = newTitle.innerHTML;
    const userD = newDesc.innerHTML;
    Storage.updateFarm(parProjectIndex, userT, userD);
  }
});

const addFarm = document.querySelector('.add-item');
addFarm.addEventListener('click', () => {
  const form = document.querySelector('.add-project');
  if (getComputedStyle(form, null).display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});
