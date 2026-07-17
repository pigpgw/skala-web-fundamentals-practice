import { loadTodos, saveTodos } from "./storage.js";
import { getDailyRandomQuote } from "./apis.js";

let todos = loadTodos();
let currentFilter = "all";

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector(".add-area form");
const todoInput = document.querySelector("#todo-input");
const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const filterButtons = document.querySelectorAll(".filters button");
const allFilterButton = document.querySelector("#all-filter");
const activeFilterButton = document.querySelector("#active-filter");
const completedFilterButton = document.querySelector("#completed-filter");
const dailyQuote = document.querySelector("#daily-quote");

const updateDailyQuote = async () => {
  try {
    const quote = await getDailyRandomQuote();
    dailyQuote.textContent = quote;
  } catch (error) {
    console.error(error.message);
    dailyQuote.textContent = "작은 시작이 큰 변화를 만듭니다.";
  }
};

updateDailyQuote();

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

  const filteredTodos = todos.filter(function (todo) {
    if (currentFilter === "active") {
      return todo.done === false;
    }

    if (currentFilter === "completed") {
      return todo.done === true;
    }

    return true;
  });

  filteredTodos.forEach(function (todo) {
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
  saveTodos(todos);
  todoInput.value = "";
  renderTodoList();
}

todoForm.addEventListener("submit", addTodo);
renderTodoList();

function changeActiveFilter(activeButton) {
  filterButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  activeButton.classList.add("active");
}

allFilterButton.addEventListener("click", function () {
  currentFilter = "all";
  changeActiveFilter(allFilterButton);
  renderTodoList();
});

activeFilterButton.addEventListener("click", function () {
  currentFilter = "active";
  changeActiveFilter(activeFilterButton);
  renderTodoList();
});

completedFilterButton.addEventListener("click", function () {
  currentFilter = "completed";
  changeActiveFilter(completedFilterButton);
  renderTodoList();
});

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
    saveTodos(todos);
  }

  if (deleteButton !== null) {
    todos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    saveTodos(todos);
  }

  renderTodoList();
});
