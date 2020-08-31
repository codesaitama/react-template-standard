import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./../reducer/todoReducer";

const TodoContext = createContext();

// This is todos context which serve state of todos application

const TodosProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodosProvider, TodoContext };
