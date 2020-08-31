import React, { useState, useEffect, Fragment, useMemo } from "react";
import { Modal, ModalBody } from "reactstrap";
import TodoStep from "./TodoStep";
import TodoCheckbox from "./../TodoCheckbox";
import TodosHoc from "components/todos/hoc/TodosHoc";
import { randomUUID } from "helper/methods";
import { stepFormat } from "./../../todoHelpers/constants";
import RoeMarkupEditor from "components/roeeditor/RoeMarkupEditor";
import { datesWithYear } from "helper/methods";
import DatePicker from "react-datepicker";
import DatepickerWrapper from "components/forms/alldatepickers/datepicker.style";
import { onlyDate } from "helper/methods";

const TodoDialog = props => {
  const [titleInput, setTitleInput] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [addstepInput, setAddStepInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const {
    todoState: { todoDialog, activeTodoId, todos },
    todoDispatcher
  } = props;

  const handleChangeDueDate = date => {
    // Change due date of todo
    todoDispatcher({
      type: "changeTaskDueDate",
      todoId: todo.id,
      dueDate: date
    });
  };

  const todo = useMemo(() => {
    // Find Active todo Detail from all list using activeTodoId
    // You can call api as well for find current active todo detail
    if (activeTodoId) {
      return todos.find(a => a.id === activeTodoId);
    }
    return null;
  }, [todos, activeTodoId]);

  const isMayDayTodo = useMemo(() => {
    // check todo is from My day or not
    if (todo && todo.myDay) {
      return datesWithYear(todo.myDay) === datesWithYear(new Date());
    }
    return 0;
  }, [todo]);

  useEffect(() => {
    if (todo) {
      setTitleInput(todo.title);
      setDueDate(todo.dueDate ? new Date(todo.dueDate) : null);
      setNoteInput(todo.notes);
    }
  }, [todo]);

  const setmodal = () => {
    todoDispatcher({
      type: "toggleTodoDialog"
    });
  };

  const onChangeCompleteState = e => {
    // Change todo is complete or not
    todoDispatcher({
      type: "changeTodoCompleteStatus",
      todoId: todo.id,
      isComplete: !todo.isComplete
    });
  };

  const addStepHandler = () => {
    // Add new step in todo
    const data = {
      id: randomUUID(),
      title: addstepInput
    };
    todoDispatcher({
      type: "addStep",
      todoId: todo.id,
      step: { ...stepFormat, ...data }
    });

    setAddStepInput("");
  };

  const changeTodoTitleHandler = () => {
    // Change todo title
    if (titleInput !== "" && titleInput !== todo.title) {
      todoDispatcher({
        type: "changeTaskTitle",
        todoId: todo.id,
        title: titleInput
      });
    }
  };

  const AddTodoMydayHandler = () => {
    // add todo to My Day list
    if (!isMayDayTodo) {
      todoDispatcher({
        type: "AddTaskToMyday",
        todoId: todo.id,
        myDay: new Date()
      });
    } else {
      todoDispatcher({
        type: "AddTaskToMyday",
        todoId: todo.id,
        myDay: null
      });
    }
  };

  const changeTaskNoteHandler = () => {
    // Change notes in todo
    console.log("noteInput", noteInput);
    todoDispatcher({
      type: "changeTaskNote",
      todoId: todo.id,
      notes: noteInput
    });
  };

  const addTaskToImportantHandler = () => {
    // change todo is important or not
    todoDispatcher({
      type: "changeTodoImportantStatus",
      todoId: todo.id
    });
  };

  const deleteTaskHandler = () => {
    // Delete todo
    todoDispatcher({
      type: "deleteTask",
      todoId: todo.id
    });
  };

  const addToBookmarkHandler = e => {
    // change bookrmarked or not
    e.stopPropagation();
    todoDispatcher({
      type: "changeTodoBookmarkStatus",
      todoId: todo.id
    });
  };

  return (
    <Modal
      centered
      isOpen={todoDialog}
      toggle={setmodal}
      size="sm"
      fade={false}
      className="todo-edit-dialog"
    >
      <ModalBody>
        {todo && (
          <Fragment>
            <div className="todo-dialog-title">
              <div className="flex-x mtb-10 todo-step-container">
                <TodoCheckbox
                  isComplete={todo.isComplete}
                  onChange={onChangeCompleteState}
                />
                <div className="mr-10 flex-1">
                  {titleInput !== null && (
                    <RoeMarkupEditor
                      textAreaClass={todo.isComplete ? "todo-completed" : ""}
                      className="todo-editors"
                      isOptions={false}
                      inputValue={titleInput}
                      onChangeInput={e => setTitleInput(e)}
                      placeHolder="Enter Title..."
                      minHeight={20}
                      maxHeight={250}
                      blurHandler={changeTodoTitleHandler}
                      autoFocus={false}
                    />
                  )}
                </div>
                <div className="flex-x icon">
                  {todo.isBookmark ? (
                    <i
                      onClick={addToBookmarkHandler}
                      className="material-icons cursor-pointer"
                      style={{ color: "#ff4081" }}
                    >
                      bookmark
                    </i>
                  ) : (
                    <i
                      onClick={addToBookmarkHandler}
                      className="material-icons cursor-pointer"
                    >
                      bookmark_border
                    </i>
                  )}
                  {todo.isImportant ? (
                    <i
                      onClick={addTaskToImportantHandler}
                      className="material-icons cursor-pointer"
                      style={{ color: "#ff5252" }}
                    >
                      star
                    </i>
                  ) : (
                    <i
                      onClick={addTaskToImportantHandler}
                      className="material-icons cursor-pointer"
                    >
                      star_border
                    </i>
                  )}
                  <i
                    className="material-icons ml-6 cursor-pointer"
                    onClick={setmodal}
                  >
                    cancel
                  </i>
                </div>
              </div>
              <div className="pt-10">
                {todo.steps && todo.steps.length
                  ? todo.steps.map(step => {
                      return (
                        <TodoStep key={step.id} step={step} todoId={todo.id} />
                      );
                    })
                  : ""}
              </div>
              <div className="list-name flex-x pt-10">
                <div className="icon mr-1">
                  <i className="material-icons nevy--text">add</i>
                </div>
                <div className="mr-10 flex-1">
                  {addstepInput !== null && (
                    <RoeMarkupEditor
                      className="todo-editors"
                      isOptions={false}
                      inputValue={addstepInput}
                      onChangeInput={e => setAddStepInput(e)}
                      placeHolder="Next Step.."
                      minHeight={20}
                      maxHeight={250}
                      submitHandler={addStepHandler}
                      autoFocus={true}
                    />
                  )}
                </div>
                {addstepInput !== "" && (
                  <div
                    className="fs-15 demi-bold-text nevy--text cursor-pointer"
                    onClick={addStepHandler}
                  >
                    ADD
                  </div>
                )}
              </div>
            </div>
            <div
              className="todo-dialog-title mt-10 flex-x cursor-pointer"
              onClick={AddTodoMydayHandler}
            >
              <div className={isMayDayTodo ? "my-day-todo" : ""}>
                <i className="material-icons flex-x mr-10">wb_sunny</i>
              </div>
              <div className={isMayDayTodo ? "my-day-todo" : ""}>
                Add to My Day
              </div>
            </div>
            <div className="todo-dialog-title mt-10 flex-x cursor-pointer align-center">
              <div>
                <i className="material-icons mr-10 flex-x">calendar_today</i>
              </div>
              {/* <div>
                                Add Due Date
                            </div> */}
              <div className="Due-date-picker flex-1">
                <DatepickerWrapper>
                  <DatePicker
                    selected={dueDate}
                    onChange={handleChangeDueDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    className="custom-datepicker"
                    calendarClassName="custom-calender-class"
                    isClearable={true}
                    placeholderText="Add Due Date"
                  />
                </DatepickerWrapper>
              </div>
            </div>

            <div className="todo-dialog-title mt-10 flex-x cursor-pointer">
              <div className="mr-10">
                <i className="material-icons">attach_file</i>
              </div>
              <div>Add File</div>
            </div>
            <div className="todo-dialog-title mt-10 flex-x cursor-pointer">
              <textarea
                className="todo-name-edit"
                id=""
                rows="3"
                placeholder="Add Note"
                value={noteInput}
                onChange={e => setNoteInput(e.target.value)}
                onBlur={changeTaskNoteHandler}
              ></textarea>
            </div>
            <div className="flex-x mt-10 space-between">
              <div>Created at {onlyDate(todo.createdAt)}</div>
              <div onClick={deleteTaskHandler}>
                <i className="material-icons cursor-pointer">delete_outline</i>
              </div>
            </div>
          </Fragment>
        )}
      </ModalBody>
    </Modal>
  );
};

export default TodosHoc(TodoDialog);
