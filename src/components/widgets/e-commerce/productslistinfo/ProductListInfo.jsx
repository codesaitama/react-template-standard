import React from "react";
import ProductListInfoWrapper from "./productinfo.style";
import { product7, product8, product9, product10 } from "helper/constant";

const ProductListInfo = () => {
  return (
    <ProductListInfoWrapper>
      <div className="product-list-info-container roe-shadow-2">
        <div className="row">
          <div className="col-md-3">
            <div className="product-image">
              <img src={product7} alt="" />
            </div>
            <div className="fs-16 medium-text pt-15">
              Clear Hands-Free Calling
            </div>
            <div className="fs-14 pt-10">
              Conversation flows freely with easy, hands-free calling. Leave
              your phone where it is, just speak with a double tap. Thanks to
              several microphones, WH-1000XM3 delivers clearer voice quality to
              the other person on the phone.
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-image">
              <img src={product8} alt="" />
            </div>
            <div className="fs-16 medium-text pt-15">
              Control at your Fingertip
            </div>
            <div className="fs-14 pt-10">
              Change the track, turn the volume up or down and take or make
              calls by tapping or swiping the panel with your fingertip.
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-image">
              <img src={product9} alt="" />
            </div>
            <div className="fs-16 medium-text pt-15">
              All Day Power and Quick Charging
            </div>
            <div className="fs-14 pt-10">
              With up to 30 hours of battery life, you'll have enough power even
              for long trips away. And if you need to charg in a hurry, you can
              get five hours worth of charge after just ten minutes with the
              optional AC adapter.
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-image">
              <img src={product10} alt="" />
            </div>
            <div className="fs-16 medium-text pt-15">
              Swivel Foldable Structure
            </div>
            <div className="fs-14 pt-10">
              The ear cups swivel inwards so they pack up neatly in a compact
              case.
            </div>
          </div>
        </div>
      </div>
    </ProductListInfoWrapper>
  );
};

export default ProductListInfo;
