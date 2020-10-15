/* eslint-disable consistent-return */
let projects;

export function createArray() {
  projects = [];
}

export function checkAddFarmName(prName) {
  if (localStorage.getItem('myProjects') === null) {
    createArray();
  } else {
    projects = JSON.parse(localStorage.getItem('myProjects'));
  }
  const exists = projects.some(x => x.name === prName);
  return exists;
}

export function addFarm(project) {
  if (localStorage.getItem('myProjects') === null) {
    createArray();
  } else {
    projects = JSON.parse(localStorage.getItem('myProjects'));
  }
  projects.push(project);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function getFarms() {
  if (JSON.parse(localStorage.getItem('myProjects')) === null) {
    createArray();
    return projects;
  }
  projects = JSON.parse(localStorage.getItem('myProjects'));

  return projects;
}

export function getFarmSize(project) {
  if (JSON.parse(localStorage.getItem('myProjects')) === null) {
    return 'Empty';
  }
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const size = projects[project].tasks.map(
    x => parseFloat(x.size, 10),
  ).reduce((accumulator, currentValue) => accumulator + currentValue,
    0);
  return size.toFixed(2);
}

export function deleteFarm(project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects.splice(project, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function checkUpdateFarmIndex(prName, i) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const index = projects.findIndex(x => x.name === prName);
  return index === parseInt(i, 10);
}

export function checkUpdateFarmName(prName) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const exists = projects.some(x => x.name === prName);
  return exists;
}

export function updateFarm(project, prName, prDescription) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[project].name = prName;
  projects[project].description = prDescription;
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function checkPond(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const index = parseInt(project, 10);
  const exists = projects[index].tasks.some(x => x.name === task.name);
  return exists;
}

export function addPond(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const index = parseInt(project, 10);
  projects[index].tasks.push(task);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function deletePond(task, project) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[parseInt(project, 10)].tasks.splice(task, 1);
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function checkUpdatePondIndex(project, tsName, i) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const index = projects[parseInt(project, 10)].tasks.findIndex(x => x.name === tsName);
  return index === parseInt(i, 10);
}

export function checkUpdatePondName(project, tsName) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  const exists = projects[parseInt(project, 10)].tasks.some(x => x.name === tsName);
  return exists;
}

export function updatePond(project, task, tsName, tsSize) {
  projects = JSON.parse(localStorage.getItem('myProjects'));
  projects[parseInt(project, 10)].tasks[task].name = tsName;
  projects[parseInt(project, 10)].tasks[task].size = tsSize;
  localStorage.setItem('myProjects', JSON.stringify(projects));
}

export function clearStorage() {
  localStorage.clear();
}