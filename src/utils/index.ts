import { Todo } from "../types";

export const filterBySearchTerm = (todos: Todo[], searchTerm: string) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(lowerCaseSearchTerm)
  );
};

export const completedTodos = (todos: Todo[]) => todos.filter((todo) => todo.completed === true);
export const importantTodos = (todos: Todo[]) => todos.filter((todo) => todo.important === true);
