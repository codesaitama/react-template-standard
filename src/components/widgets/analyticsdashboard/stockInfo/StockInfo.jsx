import React from "react";
import { StockSectionWrapper, StockInfoWrapper } from "./StockInfo.style";

const StockInfo = ({ section1, section2 }) => {
  return (
    <StockInfoWrapper className="roe-shadow-2 whitelight pa-25 flex">
      <StockSection {...section1} />
      <div className="vertical-hr" />
      <StockSection {...section2} />
    </StockInfoWrapper>
  );
};

const StockSection = ({ title, amount, description, direction, percent }) => (
  <StockSectionWrapper className="stock-section" direction={direction}>
    <div className="fs-18 header">{title}</div>
    <div className="section-container">
      <div className="section-3">
        <p className="fs-20 mt-15 bold-text">{amount}</p>
        <p className="grey--text">{description}</p>
      </div>
      <div className="section-1">
        <i
          className={`fas ${
            direction === "up" ? "fa-arrow-up" : "fa-arrow-down"
          }`}
        />
        {percent}%
      </div>
    </div>
  </StockSectionWrapper>
);

export default StockInfo;
