const btn = document.querySelector('#addBtn')
btn.addEventListener('click', createTask)

let removeBtnArray = document.querySelectorAll('.removeBtn')
removeBtnArray = Array.from(removeBtnArray)
removeBtnArray.forEach(btn => {
  btn.addEventListener('click', removeTask)
});


function createTask() {
  let newTask = document.querySelector('#taskTitle').value;
  if (!newTask) return;

  const ul = document.querySelector('#taskList');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const span = document.createElement('span');

  li.classList.add('task');
  h3.textContent = newTask;
  span.classList.add('removeBtn');
  span.textContent = 'Remove'
  span.addEventListener('click', removeTask)

  li.appendChild(h3);
  li.appendChild(span);
  ul.appendChild(li);
}

function removeTask(event){
  const task = event.target.closest('.task')
  const ul = document.querySelector('#taskList')
  ul.removeChild(task)
}