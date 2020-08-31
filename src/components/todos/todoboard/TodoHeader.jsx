import React, { Fragment, useState } from "react";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import { onlyDate } from "helper/methods";
import TodosHoc from "components/todos/hoc/TodosHoc";

const TodoHeader = ({ list, ...props }) => {
  const [listInput, setListInput] = useState("");
  const {
    todoDispatcher,
    todoState: { hideCompletedTask }
  } = props;

  const renameListHandler = () => {
    setListInput(list.title);
  };

  const saveListNameHandler = () => {
    // Here you can rename the list
    if (listInput !== list.title) {
      todoDispatcher({
        type: "renameListName",
        title: listInput,
        id: list.id
      });
    }
    setListInput("");
  };

  const deleteListHandler = () => {
    // Here you can delete the list
    todoDispatcher({
      type: "deleteListName",
      id: list.id
    });
  };

  return (
    <div className="pa-15 flex-x align-center">
      {listInput !== "" ? (
        <div>
          <input
            autoFocus
            className="fs-14 plr-10 ptb-2"
            value={listInput}
            type="text"
            placeholder="Enter List Name"
            onBlur={saveListNameHandler}
            onChange={e => setListInput(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <div className="fs-20 demi-bold-text">{list.title}</div>
          {list.title === "My Day" && (
            <div className="fs-12">{onlyDate(new Date())}</div>
          )}
        </div>
      )}
      <div className="pl-10">
        <i id="todo-menu" className="material-icons flex-x cursor-pointer">
          more_horiz
        </i>
      </div>
      <UncontrolledPopover
        className="roy-menu"
        innerClassName="roy-inner-content"
        placement="top-start"
        target="todo-menu"
        trigger="legacy"
      >
        <PopoverBody>
          <div
            className="roy-menu-list"
            onClick={() => todoDispatcher({ type: "toggleHideCompletedTask" })}
          >
            {hideCompletedTask ? "Show" : "Hide"} Completed Task
          </div>
          {list && list.id && (
            <Fragment>
              <div className="roy-menu-list" onClick={renameListHandler}>
                Raname List
              </div>
              <div className="roy-menu-list" onClick={deleteListHandler}>
                Delete List
              </div>
            </Fragment>
          )}
        </PopoverBody>
      </UncontrolledPopover>
      <div className="todo-menu flex-1 text-right">
        <i
          className="material-icons cursor-pointer"
          onClick={() => todoDispatcher({ type: "toggleTodoDrawer" })}
        >
          menu_open
        </i>
      </div>
    </div>
  );
};

export default TodosHoc(TodoHeader);
