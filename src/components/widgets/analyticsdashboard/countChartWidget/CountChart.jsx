import React from "react";
import { CountChartWrapper } from "./CountChart.style";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const CountChart = ({
  icon,
  title,
  subtitle,
  displayText,
  chartType,
  bgColor
}) => {
  return (
    <CountChartWrapper className="roe-shadow-2" bgColor={bgColor}>
      <div className="row m-0">
        <div className="fs-28 mr-15">
          <i className={icon} />
        </div>
        <div className="icon-text">
          <div>
            <div className="fs-18 header">{title}</div>
            <br />
            {subtitle}
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5 col-md-4 p-0 flex center fs-28 medium-text">
          {displayText}
        </div>
        <div className="col-7 col-md-8">
          {chartType === "line" ? <LineChart /> : <BarChart />}
        </div>
      </div>
    </CountChartWrapper>
  );
};

export default CountChart;
