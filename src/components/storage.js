let projects;

export function createArray() {
  projects = [];
}

export function addProject(project) {
  if (localStorage.getItem('myProjects') === null) {
    createArray();
  } else {
    projects = JSON.parse(localStorage.getItem('myProjects'));
  }
  projects.push(project);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function getProjects() {
  if (JSON.parse(localStorage.getItem('myProjects')) === null) {
    createArray();
    return projects;
  }
  projects = JSON.parse(localStorage.getItem('myProjects'));

  return projects;
}

export function deleteProject(project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects.splice(project, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function updatePrName(project, prName) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[project].name = prName;
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function addTask(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const index = parseInt(project, 10);
  projects[index].tasks.push(task);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function deleteTask(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[parseInt(project, 10)].tasks.splice(task, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function updateTsName(project, task, tsName) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[parseInt(project, 10)].tasks[task].taskName = tsName;
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function clearStorage() {
  localStorage.clear();
}