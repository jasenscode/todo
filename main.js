"use strict";

// selectors
const taskInput = document.querySelector(".create__task__input");
const addBtn = document.querySelector(".btn-add");
const deleteBtn = document.querySelector(".btn-delete");
const resetBtn = document.querySelector(".btn-reset");
const editBtn = document.querySelector(".btn-edit");
const checkbox = document.querySelector(".item__checkbox");
const taskDisplay = document.querySelector(".task_display__container");
const tasksRemaining = document.querySelector(".task_number");

// Task HTML

// ADD TASK
// user types in task
// clicks add button
// task gets added into task_display container
// task number span is updated by 1

const handleAdd = () => {
  const task = taskInput.value;
  const taskHTML = `<div class="task_display__item">
    <div class="item_container">
  <input class="item__checkbox" type="checkbox" />
  <p class="item__desc">${task}</p>
    </div>
    <button class="btn-edit"><i class="fas fa-pen"></i></button>
    </div>`;

  taskDisplay.innerHTML += taskHTML;
  taskInput.value = "";
  tasksRemaining.innerHTML = parseInt(tasksRemaining.innerHTML) + 1;
};

addBtn.addEventListener("click", handleAdd);

// EDIT TASK
// user clicks edit icon
// label field turns into a text input
// user types

// const handleEdit = () => {
//   console.log("edit");
// };

// editBtn.addEventListener("click", handleEdit);

// DELETE TASK
// user checks box of relevant task
// tasks selected span is updated by 1
// click delete button
// checked task is removed from task display container
// tasks selected span is updated to display nothing
// task number span is reduced by 1

const handleDelete = () => {
  console.log(checkbox);
};

deleteBtn.addEventListener("click", handleDelete);

// RESET
// remove innerHTML from task container
// reset tasks to complete to zero

const handleReset = () => {
  taskDisplay.innerHTML = "";
  tasksRemaining.innerHTML = 0;
};

resetBtn.addEventListener("click", handleReset);
