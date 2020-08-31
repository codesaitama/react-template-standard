import React, { useMemo } from "react";
import TodoCheckbox from "./../todoboard/TodoCheckbox";
import TodosHoc from "components/todos/hoc/TodosHoc";
import { datesWithYear } from "helper/methods";

const MyTodo = props => {
  const { todoDispatcher, todo } = props;
  const { steps } = todo;

  const completedSteps = useMemo(() => {
    // Check how may steps completed in this todos
    if (steps && steps.length) {
      return steps.filter(a => a.isComplete).length;
    }
    return null;
  }, [steps]);

  const isMayDayTodo = useMemo(() => {
    // Check todo is available for MY day or not
    if (todo && todo.myDay) {
      return datesWithYear(todo.myDay) === datesWithYear(new Date());
    }
    return 0;
  }, [todo]);

  const onChangeCompleteState = e => {
    // Change status of todos is complete or not
    e.stopPropagation();
    todoDispatcher({
      type: "changeTodoCompleteStatus",
      todoId: todo.id,
      isComplete: !todo.isComplete
    });
  };

  const openTodo = () => {
    // See details of todo
    todoDispatcher({
      type: "toggleTodoDialog",
      activeTodoId: todo.id
    });
  };

  const addToImportantHandler = e => {
    // Todo Important or not handler
    e.stopPropagation();
    todoDispatcher({
      type: "changeTodoImportantStatus",
      todoId: todo.id
    });
  };

  const addToBookmarkHandler = e => {
    // Todo bookmark handler
    e.stopPropagation();
    todoDispatcher({
      type: "changeTodoBookmarkStatus",
      todoId: todo.id
    });
  };
  return (
    <div
      className="flex-x my-todo align-center plr-15 ptb-10"
      onClick={openTodo}
    >
      <div>
        <TodoCheckbox
          isComplete={todo.isComplete}
          onChange={onChangeCompleteState}
        />
      </div>
      <div className="flex-1">
        <div>
          <span
            className="line_wrap"
            style={todo.isComplete ? { color: "#767678" } : {}}
          >
            <span
              className="line"
              style={todo.isComplete ? { width: "100%" } : {}}
            ></span>
            {todo.title}
          </span>
        </div>
        <div className="flex-x flex-wrap align-center fs-14">
          {isMayDayTodo ? (
            <div className="my-day-label flex-x mr-6 fs-14 nevy--text align-center">
              <i className="material-icons flex-x mr-1 fs-13 nevy--text">
                wb_sunny
              </i>
              My Day
            </div>
          ) : (
            ""
          )}
          {steps.length ? (
            <div className="due-date-label mr-6 label">
              <span>{completedSteps}</span> of <span>{steps.length}</span>
            </div>
          ) : (
            ""
          )}
          {todo.dueDate && (
            <div className="due-date mr-6 label">
              Due {datesWithYear(todo.dueDate)}
            </div>
          )}
          {todo.notes && (
            <div>
              <i title={todo.notes} className="material-icons fs-16 flex-x">
                note
              </i>
            </div>
          )}
        </div>
      </div>
      <div>
        {todo.isBookmark ? (
          <i
            onClick={addToBookmarkHandler}
            className="material-icons"
            style={{ color: "#ff4081" }}
          >
            bookmark
          </i>
        ) : (
          <i onClick={addToBookmarkHandler} className="material-icons">
            bookmark_border
          </i>
        )}
      </div>
      <div className="ml-2">
        {todo.isImportant ? (
          <i
            onClick={addToImportantHandler}
            className="material-icons"
            style={{ color: "#ff5252" }}
          >
            star
          </i>
        ) : (
          <i onClick={addToImportantHandler} className="material-icons">
            star_border
          </i>
        )}
      </div>
    </div>
  );
};

export default TodosHoc(MyTodo);
