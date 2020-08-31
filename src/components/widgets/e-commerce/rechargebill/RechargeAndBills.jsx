import React from "react";
import RechargeBillWrapper from "./rechargebill.style";
import {
  rechargeImg1,
  rechargeImg2,
  rechargeImg3,
  rechargeImg4
} from "helper/constant";

const RechargeAndBills = () => {
  return (
    <RechargeBillWrapper>
      <div className="category-info-container roe-shadow-2">
        <div className="fs-18 header">
          <div>Recharge, bills, movies & more</div>
        </div>
        <div className="row">
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={rechargeImg1} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">
                Mobile recharges
              </div>
            </div>
          </div>
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={rechargeImg4} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">Bills</div>
            </div>
          </div>
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={rechargeImg3} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">Movies</div>
            </div>
          </div>
          <div className="col-sm-6 ptb-15">
            <div className="category-block">
              <div>
                <img src={rechargeImg2} alt="" />
              </div>
              <div className="category-name mt-6 fs-12 medium-text">Offers</div>
            </div>
          </div>
        </div>
        <div className="fs-12 medium-text nevy--text">See more</div>
      </div>
    </RechargeBillWrapper>
  );
};

export default RechargeAndBills;
