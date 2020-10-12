import newPondForm from './newPondForm';
import * as Storage from './storage';

export default function createFarm(name, description, prIndex) {
  const addFarm = document.querySelector('.projects');
  const newFarm = document.createElement('div');
  newFarm.className += 'farm-container';
  newFarm.setAttribute('data-index', `${prIndex}`);

  const h2 = document.createElement('h2');
  h2.className += 'farm-title';
  h2.setAttribute('contentEditable', 'true');
  h2.innerHTML = `${name}`;

  const p = document.createElement('p');
  p.className += 'farm-description';
  p.setAttribute('contentEditable', 'true');
  p.innerHTML = `${description}`;

  const psize = document.createElement('p');
  psize.className += 'farm-size';
  psize.innerHTML = `Farm Size: ${Storage.getFarmSize(prIndex)} ha.`;

  const deleteFarm = document.createElement('button');
  deleteFarm.className += 'dlt-farm';
  deleteFarm.innerHTML = 'Delete';

  const editFarm = document.createElement('button');
  editFarm.className += 'edit-farm';
  editFarm.innerHTML = 'Update';

  addFarm.appendChild(newFarm);
  newFarm.appendChild(psize);
  newFarm.appendChild(h2);
  newFarm.appendChild(p);
  newFarm.appendChild(deleteFarm);
  newFarm.appendChild(editFarm);
  newPondForm(newFarm);
}
