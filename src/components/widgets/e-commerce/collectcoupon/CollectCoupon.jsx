import React from "react";
import CollectCoupenWrapper from "./collectcoupon.style";
import { coupenCode } from "helper/constant";

const CollectCoupon = () => {
  return (
    <CollectCoupenWrapper>
      <div className="collect-coupen-container roe-shadow-2">
        <div>
          <img src={coupenCode} alt="coupen" />
        </div>
        <div className="fs-16 bold-text pt-15">Save 10%</div>
        <div className="fs-12 medium-text nevy--text pt-10">
          Additional 10% off on One plus Hand Phone
        </div>
        <div>
          <button className="coupen-btn fs-14 medium-text mt-15">
            Collect Coupen
          </button>
        </div>
        <div className="fs-12 pt-15 grey--text">Discount at checkout</div>
      </div>
    </CollectCoupenWrapper>
  );
};

export default CollectCoupon;
