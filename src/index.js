import './styles.css';
import * as Storage from './components/storage';
import createTask from './components/createTask';
import createProject from './components/createProject';
import Project from './components/projectConstructor';
import Pond from './components/pondConstructor';

// add all local storage projects to the DOM
const allProjects = Storage.getProjects();

if (allProjects === undefined) {
  Storage.createArray();
} else {
  allProjects.forEach((project, index) => {
    createProject(project.name, project.description, index);
    project.tasks.forEach((task, chIndex) => {
      createTask(
        task.taskName,
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
  const projectNew = new Project(projectName, projectDesc);
  Storage.addProject(projectNew);
  const len = Storage.getProjects().length;
  const indices = len === 0 ? len : len - 1;
  createProject(projectNew.name, projectNew.description, indices);
  projectForm.reset();
  if (projectForm.style.display === 'block') {
    projectForm.style.display = 'none';
  } else {
    projectForm.style.display = 'block';
  }
});

const taskForm = document.querySelector('.projects');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const task = form.querySelector('input[name="task-name"]').value;
  const cTask = new Pond(task);
  const parent = form.parentElement;
  const parIndex = parent.getAttribute('data-index');
  Storage.addTask(cTask, parIndex);
  const allProjects = Storage.getProjects();
  const taskParent = allProjects[parIndex];
  const taskArr = taskParent.tasks.length - 1;
  createTask(cTask.taskName,
    parIndex,
    taskArr);

  e.target.reset();
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
  return true;
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'delete-task') {
    const parTask = e.target.parentElement;
    const parTaskIndex = parTask.getAttribute('data-task');
    const grandParTask = e.target.parentElement.parentElement;
    const grandParIndex = grandParTask.getAttribute('data-index');
    grandParTask.removeChild(parTask);
    Storage.deleteTask(parTaskIndex, grandParIndex);
  } else if (e.target.className === 'fas fa-trash-alt') {
    const parTask = e.target.parentElement.parentElement;
    const parTaskIndex = parTask.getAttribute('data-task');
    const grandParTask = e.target.parentElement.parentElement.parentElement;
    const grandParIndex = grandParTask.getAttribute('data-index');
    grandParTask.removeChild(parTask);
    Storage.deleteTask(parTaskIndex, grandParIndex);
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'edit-task') {
    const project = e.target.parentElement.parentElement.getAttribute('data-index');
    const task = e.target.parentElement.getAttribute('data-task');
    const specific = document.querySelector(`div[data-index="${project}"]`);
    const subsp = specific.querySelector(`div[data-task="${task}"]`);
    const newV = subsp.querySelector('.task-desc');
    const userVersion = newV.innerHTML;
    Storage.updateTsName(project, task, userVersion);
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'dlt-prjct') {
    const parProject = e.target.parentElement;
    const parProjectIndex = parProject.getAttribute('data-index');
    Storage.deleteProject(parProjectIndex);
    taskForm.removeChild(parProject);
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'edit-prjct') {
    const parProjectIndex = e.target.parentElement.getAttribute('data-index');
    const origen = document.querySelector(`div[data-index="${parProjectIndex}"]`);
    const editablee = origen.querySelector('.to-do-title');
    const userVersion = editablee.innerHTML;
    Storage.updatePrName(parProjectIndex, userVersion);
  }
});

const addProject = document.querySelector('.add-item');
addProject.addEventListener('click', () => {
  const form = document.querySelector('.add-project');
  if (getComputedStyle(form, null).display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

taskForm.addEventListener('click', (e) => {
  if (e.target.className === 'add-tsk') {
    if (getComputedStyle(e.target.parentElement.children[3], null).display === 'none') {
      e.target.parentElement.children[3].style.display = 'block';
    } else {
      e.target.parentElement.children[3].style.display = 'none';
    }
  }
});
