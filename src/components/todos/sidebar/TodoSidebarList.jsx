import React, { useState, useMemo } from "react";
import TodosHoc from "components/todos/hoc/TodosHoc";
import SideList from "./SideList";
import { randomUUID } from "helper/methods";
import { datesWithYear } from "helper/methods";

const TodoSidebarList = props => {
  const [listInput, setListInput] = useState("");
  const {
    todoState: { lists, todos },
    todoDispatcher
  } = props;

  const mydayTodoCount = useMemo(() => {
    return todos.filter(
      a => datesWithYear(a.myDay) === datesWithYear(new Date())
    ).length;
  }, [todos]);

  const importantTodoCount = useMemo(() => {
    return todos.filter(a => a.isImportant).length;
  }, [todos]);

  const bookmarkTodoCount = useMemo(() => {
    return todos.filter(a => a.isBookmark).length;
  }, [todos]);

  const addListHandler = () => {
    if (listInput && listInput !== "") {
      const newList = {
        id: randomUUID,
        title: listInput,
        count: 0
      };

      todoDispatcher({
        type: "addSideList",
        data: newList
      });

      setListInput("");
    }
  };

  const activeListHandler = (id, title) => {
    todoDispatcher({
      type: "setActiveSidelist",
      data: {
        id: id,
        title: title
      }
    });
  };
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      addListHandler();
    }
  };

  return (
    <div className="todo-sidebar-list roe-box-shadow pa-10 fill-height todo-sidebar-container">
      <SideList
        icon="wb_sunny"
        title="My day"
        count={mydayTodoCount}
        activeListHandler={() => activeListHandler(null, "My Day")}
      />
      <SideList
        icon="star_border"
        title="Important"
        count={importantTodoCount}
        activeListHandler={() => activeListHandler(null, "Important")}
      />
      <SideList
        icon="bookmarks"
        title="Bookmarked"
        count={bookmarkTodoCount}
        activeListHandler={() => activeListHandler(null, "Bookmarked")}
      />
      {lists &&
        lists.map((list, key) => {
          return (
            <SideList
              key={key}
              icon="list"
              title={list.title}
              count={todos.filter(a => a.listId === list.id).length}
              activeListHandler={() => activeListHandler(list.id, "customList")}
            />
          );
        })}
      <div className="list-name flex-x align-center pa-15">
        <div className="mr-10 flex-x icon" onClick={addListHandler}>
          <i className="material-icons">add</i>
        </div>
        <div className="mr-10 flex-1">
          <input
            value={listInput}
            onChange={e => setListInput(e.target.value)}
            className="list-add-input"
            type="text"
            placeholder="New List"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default TodosHoc(TodoSidebarList);
