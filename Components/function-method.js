
/* let startBtn = document.createElement('button');
let finishBtn = document.createElement('button');
let delBtn = document.createElement('button');

const btnArr = [startBtn , finishBtn, delBtn] ; */

export function addToDo(input, arr) {
  const taskElement = { task: input, completed: false, id: Date.now() };

  arr.unshift(taskElement);
  console.log(arr);
  
  renderToDo(taskElement);
}

export function renderToDo(todo) {
  const list = document.querySelector(".task-list");

  const node = document.createElement("li");
  const startBtn = document.createElement("button");
  const finishBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  node.setAttribute("class", "toDoItem");
  node.setAttribute("data-key", todo.id);
  node.innerText = todo.task;

  startBtn.classList.add('start-btn');
  startBtn.innerHTML= '<i class="fas fa-play"></i>';
  startBtn.setAttribute("data-key", todo.id);

  finishBtn.classList.add('finish-btn');
  finishBtn.innerHTML = '<i class="fas fa-check"></i>';
  finishBtn.setAttribute("data-key", todo.id);

  delBtn.classList.add('del-btn');
  delBtn.innerHTML = '<i class="fas fa-trash"></i>'; 
  delBtn.setAttribute("data-key", todo.id);

  node.appendChild(startBtn);
  node.appendChild(finishBtn);
  node.appendChild(delBtn);

  list.append(node);
}

export function startTask(input) {
  const runningList = document.querySelector('.running-list');
  
  console.log(input.parentElement.parentElement);
  console.log('this is inside the start Function', input.parentElement.parentElement.childNodes[0]);

  runningList.appendChild(input.parentElement.parentElement);
  input.parentElement.parentElement.removeChild(input.parentElement.parentElement.childNodes[1]);
}

export function finishTask(input) {
  const finishedList = document.querySelector('.finished-list');
  
  console.log(input.parentElement.parentElement);
  console.log('this is inside the start Function', input.parentElement.parentElement.childNodes[0]);

  finishedList.appendChild(input.parentElement.parentElement);
  input.parentElement.parentElement.removeChild(input.parentElement.parentElement.childNodes[1]);
}

