import React from "react";
import PageTitle from "components/common/PageTitle";
import TodosWrapper from "components/todos/todos.style";
import ToDoApplication from "components/todos/ToDoApplication";
import { TodosProvider } from "components/todos/context/TodosProvider";

const Todos = () => {
  return (
    // TodosWrapper is a style component for application
    <TodosWrapper>
      <PageTitle
        title="sidebar.todos"
        className="plr-15"
        breadCrumb={[
          {
            name: "sidebar.app"
          },
          {
            name: "sidebar.todos"
          }
        ]}
      />
      {/* Todos Provider is context of todos application where all data stored  */}
      <TodosProvider>
        {/*  Root component of todos application  */}
        <ToDoApplication />
      </TodosProvider>
    </TodosWrapper>
  );
};

export default Todos;
