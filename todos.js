const todoForm = document.querySelector("#todo-form"),
  todoInput = document.querySelector("#todo-input"),
  taskList = document.querySelector("#task-list");

const TODOS_KEY = "todos";
let toDos = [];

function showTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
   
    delBtn.innerHTML = `Delete`;
    delBtn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }

function submitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", submitTodo);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(showTodo);
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => 
    toDo.id !== parseInt(li.id)
  );
  saveTodo();
}
