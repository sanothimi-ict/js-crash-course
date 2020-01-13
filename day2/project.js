const input = document.querySelector("input");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector('ul');

addButton.addEventListener('click', addTodoItem);

function addTodoItem () {
  const newTodoItem = input.value;
  const li = document.createElement('li');
  const removeButton = document.createElement("button");
  removeButton.addEventListener('click', removeTodoItem);
  removeButton.textContent = "X";
  li.textContent = newTodoItem;
  li.appendChild(removeButton);
  ul.appendChild(li);
}

function removeTodoItem () {
  this.parentNode.remove();
}