import React from "react";
import TodosHoc from "components/todos/hoc/TodosHoc";

const TodoSideDrawer = props => {
  const {
    todoState: { todoDrawer },
    children
  } = props;

  const sidebar = {
    width: !todoDrawer ? 0 : 260
  };

  return (
    <div id="sidebar" className="todo-drawer sideBack" style={sidebar}>
      <div className="setting-wrapper">{children}</div>
    </div>
  );
};

export default TodosHoc(TodoSideDrawer);
