import React, { createContext, useState } from 'react';

interface Todo {
  id: string;
  text: string;
}

interface TodoContextValue {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextValue>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  

  

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const value: TodoContextValue = {
    todos,
    addTodo,
    removeTodo,
  };

  return (
    <div style={{ backgroundColor: 'lightorange' }}>
      <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    </div>
  );

  
  }
  
