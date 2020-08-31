import React, { useState, useMemo } from "react";
import TodoHeader from "./TodoHeader";
import MyTodo from "./MyTodo";
import TodosHoc from "components/todos/hoc/TodosHoc";
import {
  todoFormate,
  listFormat
} from "components/todos/todoHelpers/constants";
import { randomUUID } from "helper/methods";
import { datesWithYear } from "helper/methods";

const TodoBoard = props => {
  const [taskinput, setTaskinput] = useState("");

  // We can get data from context using todoHoc from props like this
  const {
    todoState: { todos, activeSideList, lists, hideCompletedTask },
    todoDispatcher
  } = props;

  const listData = useMemo(() => {
    // This method gives you a active sidelist data for showing name on todo header
    if (activeSideList) {
      if (activeSideList.id) {
        // It means if any custom list which made by users
        return lists.find(a => a.id === activeSideList.id);
      } else {
        // It means My day, Important and Bookmark list
        return { ...listFormat, ...activeSideList };
      }
    }
    return null;
  }, [activeSideList, lists]);

  const allTodos = useMemo(() => {
    // This method gives you todo list as per your need, all tasks or only that one which is not completed
    if (hideCompletedTask) {
      return todos.filter(a => !a.isComplete);
    }
    return todos;
  }, [todos, hideCompletedTask]);

  const filterTodos = useMemo(() => {
    // This method gives all todos active list wise
    if (activeSideList) {
      if (activeSideList.id) {
        return allTodos.filter(a => a.listId === activeSideList.id);
      } else {
        switch (activeSideList.title) {
          case "My Day":
            return allTodos.filter(
              a => datesWithYear(a.myDay) === datesWithYear(new Date())
            );
          case "Important":
            return allTodos.filter(a => a.isImportant);
          case "Bookmarked":
            return allTodos.filter(a => a.isBookmark);
          default:
            return [];
        }
      }
    }
    return [];
  }, [allTodos, activeSideList]);

  const addTaskHandler = () => {
    // Add new task handler
    if (taskinput && taskinput !== "") {
      let listDetail = {};

      if (activeSideList.id) {
        listDetail = {
          listId: activeSideList.id
        };
      } else {
        switch (activeSideList.title) {
          // If you add new task in my day list directly
          case "My Day":
            listDetail = {
              listId: null,
              myDay: new Date()
            };
            break;
          case "Important":
            // If you add new task in important list directly
            listDetail = {
              listId: null,
              isImportant: true
            };
            break;
          case "Bookmarked":
            // If you add new task in Bookmark directly
            listDetail = {
              listId: null,
              isBookmark: true
            };
            break;
          default:
            listDetail = {
              listId: null
            };
        }
      }

      const data = {
        id: randomUUID(),
        title: taskinput,
        createdAt: new Date(),
        ...listDetail
      };

      todoDispatcher({
        type: "addTaskHandler",
        data: { ...todoFormate, ...data }
      });

      setTaskinput("");
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      addTaskHandler();
    }
  };

  return (
    <div className="todo-board roe-box-shadow ml-10">
      <TodoHeader list={listData} />
      <div className="todo-container flex-y">
        {filterTodos &&
          filterTodos.map(todo => {
            return <MyTodo key={todo.id} todo={todo} />;
          })}
        <div className="list-name flex-x align-center pa-15 todo-topborder">
          <div className="mr-10 flex-x icon">
            <i onClick={addTaskHandler} className="material-icons">
              add
            </i>
          </div>
          <div className="mr-10 flex-1">
            <input
              value={taskinput}
              onChange={e => setTaskinput(e.target.value)}
              className="task-add-input fs-14 fill-width"
              type="text"
              placeholder="New Task"
              onKeyDown={handleKeyDown}
            />
          </div>
          {taskinput !== "" && (
            <div
              className="fs-15 demi-bold-text nevy--text cursor-pointer"
              onClick={addTaskHandler}
            >
              ADD
            </div>
          )}
        </div>
        <div className="backlines flex-1"></div>
      </div>
    </div>
  );
};

export default TodosHoc(TodoBoard);
