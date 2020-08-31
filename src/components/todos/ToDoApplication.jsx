import React from "react";
import TodoSidebarList from "./sidebar/TodoSidebarList";
import TodoBoard from "./todoboard/TodoBoard";
import TodoDialog from "./todoboard/tododialog/TodoDialog";
import TodoSideDrawer from "./sidebar/TodoSideDrawer";
import TodosHoc from "components/todos/hoc/TodosHoc";

const ToDoApplication = props => {
  const {
    todoState: { todoDrawer },
    todoDispatcher
  } = props;

  return (
    <div className="flex-x todo-app pos-relative">
      {todoDrawer && (
        <div
          className="todo-drawer-overlay"
          onClick={() => todoDispatcher({ type: "toggleTodoDrawer" })}
        ></div>
      )}

      <TodoSideDrawer>
        <TodoSidebarList />
      </TodoSideDrawer>

      <TodoSidebarList />

      <div className="flex-1">
        <TodoBoard />
      </div>

      <TodoDialog />
    </div>
  );
};

export default TodosHoc(ToDoApplication);
