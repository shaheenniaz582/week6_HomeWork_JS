document.addEventListener('DOMContentLoaded',() =>{
  console.log('JavaScript loaded');

  const form = document.querySelector('#input-form');
  form.addEventListener('submit',handleFormSubmit);

  const coolButton = document.createElement('button');
  document.querySelector('#input-form');
  coolButton.textContent = "delete all!";
  coolButton.setAttribute('id', 'delete-all');
  const body = document.querySelector('body');
  body.appendChild(coolButton);
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})


function handleFormSubmit (event){
  event.preventDefault();
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);
  event.target.reset();
}
const createReadingListItem = function(form) {
  // const readingList = document.createElement('ul');
  // readingList.textContent = "Endangered Animals"
  const readingListItem = document.createElement('li');
  //readingListItem.classList.add('reading-list-item');

  const name = document.createElement('h2');
  name.textContent = `Animal:  ${form.name.value}`;
  readingListItem.appendChild(name);

  const clas = document.createElement('h3');
  clas.textContent = `Class:    ${form.class1.value}`;
  readingListItem.appendChild(clas);

  const habitat = document.createElement('h4');
  habitat.textContent = `Habitat: ${form.habitat.value}`;
  readingListItem.appendChild(habitat);

  const mode = document.createElement('h5');
  mode.textContent = `Mode Of Nutrition:  ${form.mode.value}`;
  readingListItem.appendChild(mode);

  const continent = document.createElement('h6');
  continent.textContent = `Continent: ${form.continent.value}`;
  readingListItem.appendChild(continent);

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}
