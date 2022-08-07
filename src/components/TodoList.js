import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((currentTodos) => {
      return [newTodo, ...currentTodos];
    });
  };

  const removeTodo = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        const newTodos = filterArray(todos, id);
        setTodos((currentTodos) => {
            return newTodos;
        });
      }
    });
  };

  const filterArray = (arr, id) => {
    return arr.filter((item) => {
      return item.id != id;
    });
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <div className="todos-list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              onDelete={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
