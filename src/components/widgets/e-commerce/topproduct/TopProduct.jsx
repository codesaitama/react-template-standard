import React from "react";
import TopProductWrapper from "./topproduct.style";
import { toy } from "helper/constant";

const TopProduct = () => {
  return (
    <TopProductWrapper>
      <div className="top-product-container roe-shadow-2">
        <div className="fs-18 header">Holyday toy list</div>
        <div className="row">
          <div className="col-sm-12 ptb-15">
            <div className="category-block">
              <div>
                <img src={toy} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">
                top toy of 2020
              </div>
            </div>
          </div>
        </div>
        <div className="fs-12 medium-text nevy--text">Shop now</div>
      </div>
    </TopProductWrapper>
  );
};

export default TopProduct;
