import React from "react";
import CategoryInfoWrapper from "./categoryinfo.style";
import {
  categoryImg1,
  categoryImg2,
  categoryImg3,
  categoryImg4
} from "helper/constant";

const CategoryInfo = () => {
  return (
    <CategoryInfoWrapper>
      <div className="category-info-container roe-shadow-2">
        <div className="fs-18 header">
          <div>Access for your</div>
          <div>smartphon | Starting $99</div>
        </div>
        <div className="row">
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={categoryImg1} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">
                Cases & Cover
              </div>
            </div>
          </div>
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={categoryImg4} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">
                Cables & Chargers
              </div>
            </div>
          </div>
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={categoryImg3} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">
                Trendy Headsets
              </div>
            </div>
          </div>
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={categoryImg2} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">
                Powerbanks
              </div>
            </div>
          </div>
        </div>
        <div className="fs-12 medium-text nevy--text">See more</div>
      </div>
    </CategoryInfoWrapper>
  );
};

export default CategoryInfo;
