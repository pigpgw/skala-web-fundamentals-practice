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

class TodoManager {
  static instance = null;

  constructor() {
    if (TodoManager.instance) {
      return TodoManager.instance;
    }

    this.todos = this.loadTodos();
    TodoManager.instance = this;
  }

  loadTodos() {
    try {
      const savedTodos = localStorage.getItem("todos");

      if (savedTodos === null) {
        return defaultTodos.map((todo) => ({ ...todo }));
      }

      const parsedTodos = JSON.parse(savedTodos);

      if (!Array.isArray(parsedTodos)) {
        throw new Error("저장된 할 일 데이터가 배열이 아닙니다.");
      }

      return parsedTodos;
    } catch (error) {
      console.error("저장된 할 일 데이터를 불러오지 못했습니다.", error);
      return [];
    }
  }

  saveTodos() {
    try {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } catch (error) {
      console.error("할 일 데이터를 저장하지 못했습니다.", error);
    }
  }

  addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };

    this.todos.push(newTodo);
    this.saveTodos();
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo === undefined) {
      return;
    }

    todo.done = !todo.done;
    this.saveTodos();
  }
}

export const todoManager = new TodoManager();
