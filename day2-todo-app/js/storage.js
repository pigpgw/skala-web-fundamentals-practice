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
  try {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos === null) {
      return defaultTodos;
    }

    return JSON.parse(savedTodos);
  } catch (error) {
    console.error("저장된 할 일 데이터를 불러오지 못했습니다.", error);
    return [];
  }
}

export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
