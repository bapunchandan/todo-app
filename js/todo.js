let taskNo = 1;

function init() {
  document.getElementById('add-button').onclick = handleAddButton;
}

function handleAddButton() {
  if (! document.getElementById('add-task-form').reportValidity()) {
    return;
  }

  const taskInputElement = document.getElementById('task');
  const task = taskInputElement.value;
  taskInputElement.value = '';
  const taskElement = document.createElement('li');
  taskElement.className = "form-check task";
  taskElement.innerHTML = `
    <input class="form-check-input" type="checkbox" id="task${taskNo}">
    <label class="form-check-label" for="task${taskNo}">${task}</label>
  `;
  const tasksElement = document.getElementById('tasks');
  tasksElement.appendChild(taskElement);
  taskNo++;
  taskElement.onclick = handleCheckButton;
}

function handleCheckButton() {
  this.lastElementChild.classList.toggle('complete');
}

window.onload = init;
