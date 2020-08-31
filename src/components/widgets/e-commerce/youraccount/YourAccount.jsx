import React from "react";
import YourAccountWrapper from "./account.style";
import { yourOrder, yourPayment, signIn } from "helper/constant";

const YourAccount = () => {
  return (
    <YourAccountWrapper>
      <div className="your-account-container roe-shadow-2">
        <div className="fs-16 bold-text pb-15">Your Account</div>
        <div className="row">
          <div className="col-lg-6 col-xl-4 ptb-6">
            <div className="account-card flex-x align-center">
              <div className="pt-10 pr-10">
                <img width="75" height="56px" src={yourOrder} alt="" />
              </div>
              <div>
                <div className="fs-16 demi-bold-text">Your Order</div>
                <div className="fs-12 medium-text grey--text">
                  Track, return, or buy things again
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 ptb-6">
            <div className="account-card flex-x align-center">
              <div className="pt-10 pr-10">
                <img width="75" height="56px" src={signIn} alt="" />
              </div>
              <div>
                <div className="fs-16 demi-bold-text">Login & Security</div>
                <div className="fs-12 medium-text grey--text">
                  Edit name and mobile number
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 ptb-6">
            <div className="account-card flex-x align-center">
              <div className="pt-10 pr-10">
                <img width="75" height="56px" src={yourPayment} alt="" />
              </div>
              <div>
                <div className="fs-16 demi-bold-text">Payment Options</div>
                <div className="fs-12 medium-text grey--text">
                  Edit or add payment methods
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </YourAccountWrapper>
  );
};

export default YourAccount;
