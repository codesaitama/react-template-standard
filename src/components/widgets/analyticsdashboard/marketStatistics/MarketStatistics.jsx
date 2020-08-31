import React, { Fragment } from "react";
import { Progress } from "react-sweet-progress";

export const MarketStatistics = ({
  title,
  progressTitle1,
  progressCount1,
  progressTitle2,
  progressCount2
}) => {
  return (
    <Fragment>
      <div className="whitelight roe-shadow-2 pa-25">
        <div className="mb-15">
          <div className="fs-18 header">{title}</div>
        </div>
        <div>
          <ProgressSection title={progressTitle1} progress={progressCount1} />
        </div>
        <div className="mt-10">
          <ProgressSection title={progressTitle2} progress={progressCount2} />
        </div>
      </div>
    </Fragment>
  );
};

const ProgressSection = ({ title, progress }) => {
  return (
    <Fragment>
      <div className="flex justify-content-between mb-10">
        <div>{title}</div>
        <div>{progress} %</div>
      </div>
      <Progress
        percent={progress}
        symbolClassName="d-none"
        theme={{
          active: {
            color: `#1D2B64`
          }
        }}
      />
    </Fragment>
  );
};

export const ProfitCard = ({
  title1,
  subTitle1,
  profit1,
  title2,
  subTitle2,
  profit2,
  className
}) => {
  return (
    <div className={`whitelight roe-shadow-2 pa-25 ${className}`}>
      <ProfitSection title={title1} subTitle={subTitle1} profit={profit1} />
      <hr />
      <ProfitSection title={title2} subTitle={subTitle2} profit={profit2} />
    </div>
  );
};

const ProfitSection = ({ title, subTitle, profit }) => {
  return (
    <div className="row">
      <div className="col-7">
        <div className="fs-18">
          <div className="header fs-16 bold-text">{title}</div>
        </div>
        <p className="fs-14 medium-text">{subTitle}</p>
      </div>
      <div className="col-5 display-info-class fs-22 label4--text">
        {profit}
      </div>
    </div>
  );
};
