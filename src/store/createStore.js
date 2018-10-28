import React, { createContext, useState, useContext } from "react";

export default (initialState, actionsCreators) => {
  const context = createContext();
  const { Provider } = context;

  let globalSetState = () => console.log("not initialized yet");

  const createAction = action => arg =>
    globalSetState(state => ({ ...state, ...action(state, arg) }));

  const ConnectedProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    globalSetState = setState;
    return <Provider value={state}>{children}</Provider>;
  };

  const actions = Object.keys(actionsCreators).reduce(
    (acc, v) => ({ ...acc, [v]: createAction(actionsCreators[v]) }),
    {}
  );

  const useStore = () => useContext(context);

  return { Provider: ConnectedProvider, actions, useStore };
};
