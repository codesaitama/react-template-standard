import React from "react";

const TodoCheckbox = ({ isComplete, onChange }) => {
  return (
    <div
      className="mt-1 pretty p-icon p-smooth"
      onClick={e => e.stopPropagation()}
    >
      <input checked={isComplete} type="checkbox" onChange={onChange} />
      <div className="state p-info-o">
        <i className="icon fas fa-check"></i>
        <label></label>
      </div>
    </div>
  );
};

export default TodoCheckbox;
