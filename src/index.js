import { addToDo, renderToDo } from "../Components/function-method.js";

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
  const text = taskText.value.trim();

  if (text != "") {
    addToDo(text, taskArray);
    taskText.value = "";
  }
  document.getElementById("input-field").focus();
});

addToDo("new task has been added", taskArray);
