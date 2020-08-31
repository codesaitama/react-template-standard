import React from "react";

const SideList = ({ title, icon, count, activeListHandler }) => {
  return (
    <div
      className="list-name flex-x align-center pa-15"
      onClick={activeListHandler}
    >
      <div className="mr-10 flex-x icon">
        <i className="material-icons">{icon}</i>
      </div>
      <div className="mr-10 flex-1">{title}</div>
      <div>{count}</div>
    </div>
  );
};

export default SideList;
