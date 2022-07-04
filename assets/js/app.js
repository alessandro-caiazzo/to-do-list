const inputTask = document.getElementById('inputTask');
const btnCreateTask = document.getElementById('btnCreateTask');
const listContainer = document.getElementById('listContainer');
let newTask;
let newSpan;
// let doneIcon =

function createNewTask() {

  let newSpanTask = document.createElement('span');
  listContainer.appendChild(newSpanTask);
  let newTask = document.createElement('p');
  newSpanTask.appendChild(newTask);
  newSpanTask.classList.add('task')
  //icona Done

  let doneIconElement = document.createElement('p');
  let doneIcon = document.createTextNode('done');
  doneIconElement.appendChild(doneIcon)
  newSpanTask.appendChild(doneIconElement);
  doneIconElement.classList.add('material-symbols-outlined')



  //icona elimina
  let deleteIconElement = document.createElement('p');
  let deleteIcon = document.createTextNode('delete');
  deleteIconElement.appendChild(deleteIcon)
  newSpanTask.appendChild(deleteIconElement);
  deleteIconElement.classList.add('material-symbols-outlined')

  newSpanTask.insertBefore(doneIconElement, newTask)

  newTask.innerHTML = inputTask.value
  inputTask.value = ' ';


  // funzione di depennaggio
  function crossDone() {
    console.log('riuscito');
    newTask.classList.add('done-task')
    doneIconElement.style.backgroundColor = '#0b1d37';
  }
  doneIconElement.addEventListener('click', crossDone)

  //funzione eliminazione
  function deleteTask() {
    console.log('cancellata');
    listContainer.removeChild(newSpanTask)
  }
deleteIconElement.addEventListener('click', deleteTask)
}

btnCreateTask.addEventListener('click', createNewTask)
