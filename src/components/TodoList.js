import React, { useMemo } from "react";
import { useStore, actions } from "../store";

import VisibilityFilter from "./VisibilityFilter";
import Todo from "./Todo";

const { addTodo } = actions;

const filter = (todos, visibilityFilter) =>
  todos.filter(todo => {
    switch (visibilityFilter) {
      case "completed":
        return todo.completed;
      case "active":
        return !todo.completed;
      case "all":
      default:
        return true;
    }
  });

const TodoList = () => {
  let input;
  const { todos, visibilityFilter } = useStore();

  const memo = [todos, visibilityFilter];
  const filteredTodos = useMemo(() => filter(todos, visibilityFilter), memo);

  return useMemo(
    () => (
      <>
        <input ref={el => (input = el)} />
        <button onClick={() => addTodo(input.value)}>+</button>
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
        <VisibilityFilter visibilityFilter={visibilityFilter} />
      </>
    ),
    memo
  );
};

export default TodoList;
