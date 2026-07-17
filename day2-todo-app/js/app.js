const todos = [
  {
    id: 0,
    text: "장보기",
    done: false,
  },
  {
    id: 1,
    text: "코딩 공부하기",
    done: true,
  },
];

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector(".add-area form");
const todoInput = document.querySelector("#todo-input");

function createTodoItem(todo) {
  const todoItem = document.createElement("li");

  todoItem.className = "todo-item";
  todoItem.dataset.id = todo.id;

  if (todo.done) {
    todoItem.classList.add("completed");
  }

  todoItem.innerHTML = `
    <input type="checkbox" ${todo.done ? "checked" : ""}>
    <span>${todo.text}</span>
    <button class="delete-button" type="button" aria-label="삭제">×</button>
  `;

  return todoItem;
}

function renderTodoList() {
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const todoItem = createTodoItem(todo);
    todoList.appendChild(todoItem);
  });
}

function addTodo(event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  const newTodo = {
    id: todos.length,
    text: text,
    done: false,
  };

  todos.push(newTodo);
  todoInput.value = "";
  renderTodoList();
}

todoForm.addEventListener("submit", addTodo);
renderTodoList();

todoList.addEventListener("click", function (event) {
  const checkbox = event.target.closest('input[type="checkbox"]');

  if (checkbox === null) {
    return;
  }

  const todoItem = checkbox.closest(".todo-item");
  const todoId = Number(todoItem.dataset.id);

  const todo = todos.find(function (todo) {
    return todo.id === todoId;
  });

  todo.done = !todo.done;
  renderTodoList();
});
