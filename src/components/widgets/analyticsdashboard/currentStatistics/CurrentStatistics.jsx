import React from "react";
import { StatisticsWrapper } from "./CurrentStatistics.style";

const CurrentStatistics = ({ block1, block2 }) => {
  return (
    <div className="roe-shadow-2 pa-25 whitelight">
      <StatisticsBlock {...block1} />
      <hr />
      <StatisticsBlock {...block2} />
    </div>
  );
};

const StatisticsBlock = ({ title, amount, percent, direction, color }) => (
  <StatisticsWrapper color={color}>
    <div className="type-icon">
      <i className="fas fa-circle-notch" />
    </div>
    <div>
      <p className="title-text">{title}</p>
      <p className="fs-20 bold-text pt-1">{amount}</p>
    </div>
    <div className="measure-text">
      <i
        className={`fas ${
          direction === "up" ? "fa-arrow-up" : "fa-arrow-down"
        }`}
      />
      <span className="ml-1">{percent}</span>
    </div>
  </StatisticsWrapper>
);

export default CurrentStatistics;
