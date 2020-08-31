import React from "react";
import OrderPlacedWrapper from "./orderplaced.style";
import { orderPlaced } from "helper/constant";

const OrderPlaced = () => {
  return (
    <OrderPlacedWrapper>
      <div className="order-placed-container roe-shadow-2">
        <div className="placed-header pa-24">
          <div className="flex-x align-center order-header">
            <div className="flex-x align-center flex-1 placed-block">
              <div>
                <div className="fs-14 medium-text">Order Placed</div>
                <div className="fs-12 grey--text">1 January 2020</div>
              </div>
              <div className="ml-30">
                <div className="fs-14 medium-text">Total</div>
                <div className="fs-12 grey--text">$499</div>
              </div>
              <div className="ml-30">
                <div className="fs-14 medium-text">Ship To</div>
                <div className="fs-12 grey--text">Hanely Larson</div>
              </div>
            </div>
            <div>
              <div className="fs-14 medium-text">
                ORDER # 408-0065656-858585
              </div>
              <div className="fs-12 grey--text">
                <span className="nevy--text">Order details</span>{" "}
                <span className="nevy--text ml-10">Invoice</span>
              </div>
            </div>
          </div>
        </div>
        <div className="plr-24 pb-24">
          <div className="fs-16 bold-text">Return Complete</div>
          <div className="fs-12 complete-status">
            <span>Your return is complete.</span>
            <span className="nevy--text ml-10">
              When I will get my refund ?
            </span>
          </div>
          <div className="flex-x align-center pt-15">
            <div className="flex-x align-center">
              <div>
                <img src={orderPlaced} alt="order" />
              </div>
              <div>
                <div className="fs-16 medium-text">
                  Sony MDR-EX150AP in-Ear Headphones with mic
                </div>
                <div className="fs-14 medium-text grey--text">
                  Sold by: Appario Retail Private Ltd
                </div>
                <div>
                  $<span className="nevy--text">899</span>
                </div>
                <div className="pt-10">
                  <button className="fs-12 medium-text c-btn c-success">
                    Buy It Again
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-19 flex-x align-center status-block">
            <button className="fs-12 medium-text c-btn c-light">
              View Refund/Return Status
            </button>
            <button className="fs-12 medium-text c-btn c-light ml-10 product-review-btn">
              Write a product review
            </button>
          </div>
        </div>
      </div>
    </OrderPlacedWrapper>
  );
};

export default OrderPlaced;
