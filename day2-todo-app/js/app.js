let todos = [
  {
    id: crypto.randomUUID(),
    text: "장보기",
    done: false,
  },
  {
    id: crypto.randomUUID(),
    text: "코딩 공부하기",
    done: true,
  },
];

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector(".add-area form");
const todoInput = document.querySelector("#todo-input");
const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");

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
    <button class="delete-button" type="button" aria-label="삭제">✕</button>
  `;

  return todoItem;
}

function renderTodoList() {
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const todoItem = createTodoItem(todo);
    todoList.appendChild(todoItem);
  });

  totalCount.innerHTML = todos.length;
  completedCount.innerHTML = todos.filter((todo) => todo.done === true).length;
}

function addTodo(event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  const newTodo = {
    id: crypto.randomUUID(),
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
  const deleteButton = event.target.closest(".delete-button");

  if (checkbox === null && deleteButton === null) {
    return;
  }

  const todoItem = event.target.closest(".todo-item");
  const todoId = todoItem.dataset.id;

  if (checkbox !== null) {
    const todo = todos.find(function (todo) {
      return todo.id === todoId;
    });

    todo.done = !todo.done;
  }

  if (deleteButton !== null) {
    todos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
  }

  renderTodoList();
});
