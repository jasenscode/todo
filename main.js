"use strict";

// selectors
const taskInput = document.querySelector(".create__task__input");
const addBtn = document.querySelector(".btn-add");
const deleteBtn = document.querySelector(".btn-delete");
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

// DELETE TASK
// user checks box of relevant task
// tasks selected span is updated by 1
// click delete button
// checked task is removed from task display container
// tasks selected span is updated to display nothing
// task number span is reduced by 1

deleteBtn.addEventListener("click", handleDelete);
