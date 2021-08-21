import { addToDo, renderToDo, startTask, finishTask } from "../Components/function-method.js";


window.onload = function () {
  document.getElementById("input-field").focus();
};

// Array will contain object with the parameters text , finish , id
const taskArray = [];
const finished = [];
const working = [];

const addBtn = document.querySelector("#add-task-btn");

addBtn.addEventListener("click", function () {
  const taskText = document.querySelector("#input-field");
  const text = taskText.value.trim();      // remove white spaces from front and back .

  if (text != "") {
    addToDo(text, taskArray);
    taskText.value = "";
  }
  document.getElementById("input-field").focus();
});

const container = document.querySelector('.container')

container.addEventListener('click', function(e) {
  if (e.target.parentElement.classList[0] === 'del-btn') {
    console.log('Had clicked DEL button', e.target.parentElement.getAttribute('data-key'));
    // Put Funtion here to Del the task
  } 
  else if (e.target.parentElement.classList[0] === 'start-btn') {
    console.log('Had clicked START button', e.target.parentElement.getAttribute('data-key'));
    //  Put Function here to move the task to ON GOING section
    startTask(e.target);
  } 
  else if (e.target.parentElement.classList[0] === 'finish-btn') {
    console.log('Had clicked FINISH button', e.target.parentElement.getAttribute('data-key'));
    // Put the function here to move the task to move to FINISHED section
    finishTask(e.target);
  }
  console.log(e.target.parentElement);
})

addToDo("new task has been added", taskArray);



