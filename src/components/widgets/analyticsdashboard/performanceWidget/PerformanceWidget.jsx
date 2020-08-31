import React from "react";
import { Progress } from "react-sweet-progress";

const PerformanceWidget = ({
  title,
  progress1,
  progressTitle1,
  progressCount1,
  progress2,
  progressTitle2,
  progressCount2
}) => {
  return (
    <div className="pa-25 whitelight roe-shadow-2">
      <div className="fs-18 header">{title}</div>
      <div className="mt-20 row">
        <div className="text-center col-6 pa-0">
          <Progress
            type="circle"
            percent={progress1}
            strokeWidth={8}
            theme={{
              active: {
                color: `#563E92`,
                trailColor: "#EFEFEF"
              }
            }}
            className="custom-progress-widget"
            symbolClassName="analytics"
          />
          <p className="mt-10">{progressTitle1}</p>
          <h1 className="fs-20">{progressCount1}</h1>
        </div>
        <div className="text-center col-6 pa-0">
          <Progress
            type="circle"
            percent={progress2}
            strokeWidth={8}
            theme={{
              active: {
                color: `#5bc587`,
                trailColor: "#EFEFEF"
              }
            }}
            className="custom-progress-widget"
            symbolClassName="analytics"
          />
          <p className="mt-10">{progressTitle2}</p>
          <h1 className="fs-20">{progressCount2}</h1>
        </div>
      </div>
    </div>
  );
};

export default PerformanceWidget;
