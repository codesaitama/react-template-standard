import React, { useState, useEffect } from "react";
import TodoCheckbox from "./../TodoCheckbox";
import TodosHoc from "components/todos/hoc/TodosHoc";
import RoeMarkupEditor from "components/roeeditor/RoeMarkupEditor";

const TodoStep = ({ step, todoId, ...props }) => {
  const [stepInput, setStepInput] = useState(null);
  const { todoDispatcher } = props;

  useEffect(() => {
    setStepInput(step.title);
  }, [step]);

  const stepCompleteStatusHandler = () => {
    // Change steps complete and uncomplete handler
    todoDispatcher({
      type: "changeStepCompleteStatus",
      todoId: todoId,
      stepId: step.id,
      isComplete: !step.isComplete
    });
  };

  const changeStepTitleHandler = () => {
    // Change step title handler
    if (stepInput !== "" && stepInput !== step.title) {
      todoDispatcher({
        type: "changeStepTitle",
        todoId: todoId,
        stepId: step.id,
        title: stepInput
      });
    }
  };

  const deleteStepHandler = () => {
    // delete step here
    todoDispatcher({
      type: "deleteStepHandler",
      todoId: todoId,
      stepId: step.id
    });
  };

  return (
    <div className="flex-x todo-step-container">
      <TodoCheckbox
        isComplete={step.isComplete}
        onChange={stepCompleteStatusHandler}
      />
      <div className="mr-10 flex-1">
        {stepInput !== null && (
          <RoeMarkupEditor
            textAreaClass={step.isComplete ? "todo-completed" : ""}
            className="todo-editors"
            isOptions={false}
            inputValue={stepInput}
            onChangeInput={e => setStepInput(e)}
            placeHolder="Enter Step Name..."
            minHeight={20}
            maxHeight={250}
            blurHandler={changeStepTitleHandler}
            autoFocus={false}
          />
        )}
      </div>
      <div className="step-delete">
        <i
          className="material-icons fs-15 cursor-pointer"
          onClick={deleteStepHandler}
        >
          close
        </i>
      </div>
    </div>
  );
};

export default TodosHoc(TodoStep);
