import { v4 } from "uuid";
import createStore from "./createStore";

const initialState = {
  todos: [
    {
      id: v4(),
      text: "Code another javascript library",
      completed: false
    },
    {
      id: v4(),
      text: "Make this javascript library obsolete",
      completed: false
    }
  ],
  visibilityFilter: "all"
};

const actionsCreators = {
  addTodo: ({ todos }, todo) => ({
    todos: [...todos, { id: v4(), text: todo }]
  }),
  toggle: ({ todos }, id) => ({
    todos: todos.map(
      todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }),
  setVisibilityFilter: (_, visibilityFilter) => ({ visibilityFilter })
};

const store = createStore(initialState, actionsCreators);
export const { Provider, actions, useStore } = store;
