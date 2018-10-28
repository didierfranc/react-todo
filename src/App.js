import React from "react";
import { Provider } from "./store";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Provider>
      <TodoList />
    </Provider>
  );
};

export default App;
