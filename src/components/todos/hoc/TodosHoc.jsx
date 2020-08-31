import React, { useContext } from "react";
import { TodoContext } from "components/todos/context/TodosProvider";

// Todos Higher order component which provides data to all components in props like todoState and todoDispatcher

const TodosHoc = HocComponent => {
  return function WrappedComponent(props) {
    const [state, dispatch] = useContext(TodoContext);

    return (
      <div>
        <HocComponent
          {...props}
          todoState={state}
          todoDispatcher={dispatch}
        ></HocComponent>
      </div>
    );
  };
};

export default TodosHoc;
