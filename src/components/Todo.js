import React, { useMemo } from "react";
import { actions } from "../store";

const { toggle } = actions;

const Todo = ({ todo: { completed, text, id } }) =>
  useMemo(
    () => (
      <div
        onClick={() => toggle(id)}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </div>
    ),
    [completed]
  );

export default Todo;
