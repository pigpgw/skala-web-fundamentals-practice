const defaultTodos = [
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

export function loadTodos() {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos === null) {
    return defaultTodos;
  }

  return JSON.parse(savedTodos);
}

export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
