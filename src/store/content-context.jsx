import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
uuidv4();

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [todos, setTodos] = useState([]);
  const [typeFilter, setTypeFilter] = useState("all");

  const themeHandler = (value) => {
    setIsDarkTheme(value);
  };

  const addTodo = (value) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: value, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const filterTodos = (type) => {
    setTypeFilter(type);
  };

  return (
    <ContentContext.Provider
      value={{
        typeFilter,
        filterTodos,
        isDarkTheme,
        themeHandler,
        addTodo,
        deleteTodo,
        todos,
        completedTodo,
        clearCompletedTodos,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
