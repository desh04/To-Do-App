export function addToDo(input, arr) {
  const taskElement = { task: input, completed: false, id: Date.now() };

  arr.push(taskElement);
  console.log(arr);
  renderToDo(taskElement);
}

export function renderToDo(todo) {
  const list = document.querySelector(".task-list");

  const node = document.createElement("li");

  node.setAttribute("class", "toDoItem");
  node.setAttribute("data-key", todo.id);

  node.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.task}</span>
  <button class="start-todo js-delete-todo">
      <img src='#' alt='start' width='15px'></img>
  </button>
  <button class="Finished-todo js-delete-todo">
      <img src='#' alt='Finished' width='15px'></img>
  </button>    
  <button class="delete-todo js-delete-todo">
      <img src='./image/del1.png' alt='delete' width='15px'></img>
  </button>
  
`;

  //<svg><use href="./image/del1.png"></use></svg>
  list.append(node);
}
