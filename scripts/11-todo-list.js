const toDoList = [
  "part",
  "gojo"
]

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''
  for (let i = 0; i < toDoList.length; i++) {
    const todo = toDoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  toDoList.push(name);
  console.log(toDoList);
  inputElement.value = '';
  renderTodoList();
}


// 1. save the data
// 2. use the data to generate the html
// 3. make it interactive