export const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const saveTodo = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodo = (id) => {
  const todos = getTodos();
  return todos.find((todo) => todo.id === id);
};

export const updateTodo = (updatedTodo) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
  saveTodo(updatedTodos);
};

export const deleteTodo = (id) => {
  const todos = getTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  saveTodo(updatedTodos);
};

export const updateTodoStatus = (id, status) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, status } : todo));
  saveTodo(updatedTodos);
};
