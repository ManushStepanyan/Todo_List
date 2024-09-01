import { memo, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo, TodoListProps } from "../../types";
import useStyles from "./styles";
import { getTodos, updateTodo, deleteTodo } from "../../services/todoService";
import SearchBar from "./SearchBar";
import {
  completedTodos,
  filterBySearchTerm,
  importantTodos,
} from "../../utils";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDoneButtonPressed, setIsDoneButtonPressed] = useState(false);
  const [isImportantButtonPressed, setIsImportantButtonPressed] =
    useState(false);

  const classes = useStyles();

  const fetchAllTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const handleCompleted = async (todo: Todo) => {
    try {
      const updatedTodo = { ...todo, completed: !todo.completed };
      await updateTodo(updatedTodo);
      setTodos(
        todos.map((currentTodo) =>
          currentTodo.id === todo.id ? updatedTodo : currentTodo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleImportantTodo = async (todo: Todo) => {
    try {
      const updatedTodo = { ...todo, important: !todo.important };
      await updateTodo(updatedTodo);
      setTodos(
        todos.map((currentTodo) =>
          currentTodo.id === todo.id ? updatedTodo : currentTodo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = async (updatedTodo: Todo) => {
    try {
      await updateTodo(updatedTodo);
      setTodos(
        todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const currentTodos = isImportantButtonPressed
    ? importantTodos(todos)
    : isDoneButtonPressed
    ? completedTodos(todos)
    : todos;

  const filteredTodos = filterBySearchTerm(currentTodos, searchTerm);

  return (
    <div className={classes.contentContainer}>
      <div className={classes.todoListContainer}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isDoneButtonPressed={isDoneButtonPressed}
          setIsDoneButtonPressed={setIsDoneButtonPressed}
          isImportantButtonPressed={isImportantButtonPressed}
          setIsImportantButtonPressed={setIsImportantButtonPressed}
        />
        <div className={classes.todoList}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => handleCompleted(todo)}
              onDelete={() => handleDelete(todo.id)}
              onEdit={(updatedTodo) => handleEdit(updatedTodo)}
              onMark={() => handleImportantTodo(todo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TodoList);
