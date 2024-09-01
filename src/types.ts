export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    important: boolean;
  }
  
  export type TodoItemProps = {
    todo: Todo;
    onToggle: (todo: Todo) => void;
    onDelete: (id: number) => void;
    onEdit: (todo: Todo) => void;
    onMark: (todo: Todo) => void;
  }
  
  export type TodoListProps = {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
  }
  
  export type AddItemProps = {
    todos: Todo[],
    setTodos: (todos: Todo[]) => void;
  }
  
  export type SearchBarProps = {
    searchTerm: string;
    isDoneButtonPressed: boolean;
    isImportantButtonPressed: boolean;
    setIsDoneButtonPressed: (press: boolean) => void;
    setIsImportantButtonPressed: (press: boolean) => void;
    setSearchTerm: (term: string) => void;
  }

  export type HeaderProps = {
    todos: Todo[];
  };
  