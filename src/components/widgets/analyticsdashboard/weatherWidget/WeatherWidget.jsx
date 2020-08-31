import React from "react";
import { WeatherWidgetWrapper } from "./WeatherWidget.style";

const WeatherWidget = ({
  weatherType,
  region,
  currentTemperature,
  pastTime1,
  pastTemperature1,
  pastTime2,
  pastTemperature2
}) => {
  return (
    <WeatherWidgetWrapper className="roe-shadow-2">
      <div className="flex space-between fs-28 bold-text">
        <div>
          <p>{weatherType}</p>
          <p className="greytext--text fs-18 sub-text">{region}</p>
        </div>
        <div>{currentTemperature}&#8451;</div>
      </div>
      <div className="flex space-between fs-22 bold-text mt-3">
        <div>{pastTime1}</div>
        <div>{pastTemperature1}&#8451;</div>
      </div>
      <div className="flex space-between fs-22 bold-text">
        <div>{pastTime2}</div>
        <div>{pastTemperature2}&#8451;</div>
      </div>
    </WeatherWidgetWrapper>
  );
};

export default WeatherWidget;
