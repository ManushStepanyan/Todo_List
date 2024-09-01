import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer.tsx';
import { useState } from 'react';
import { Todo } from './types';
import TodoList from './components/Content';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <Header todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
