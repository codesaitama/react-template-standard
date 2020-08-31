import React from "react";
import {
  ProductList,
  ProductListInfo,
  RechargeAndBills,
  TopProduct,
  YourAccount,
  CategoryInfo,
  CollectCoupon,
  OrderPlaced,
  ProductPrice
} from "./../../../components/widgets/e-commerce/index";
import { productPrice1, productPrice2 } from "helper/constant";

const ECommerce = () => {
  return (
    <div className="row ma-0">
      <div className="col-md-12 ptb-15">
        <ProductList />
      </div>
      <div className="col-xl-4 ptb-15">
        <CategoryInfo />
      </div>
      <div className="col-xl-4 ptb-15">
        <TopProduct />
      </div>
      <div className="col-xl-4 ptb-15">
        <RechargeAndBills />
      </div>
      <div className="col-md-12 ptb-15">
        <ProductListInfo />
      </div>
      <div className="col-xl-3 ptb-15">
        <CollectCoupon />
      </div>
      <div className="col-xl-9 ptb-15">
        <OrderPlaced />
      </div>
      <div className="col-md-12 ptb-15">
        <YourAccount />
      </div>
      <div className="col-md-6 ptb-15">
        <ProductPrice
          product={productPrice1}
          productName={"TV FURNITURE"}
          productDetail={"Lorem ipsum sit dolor amet"}
          productPrice={"$540.00"}
        />
      </div>
      <div className="col-md-6 ptb-15">
        <ProductPrice
          product={productPrice2}
          productName={"CABINET"}
          productDetail={"Lorem ipsum sit dolor amet"}
          productPrice={"$240.00"}
        />
      </div>
    </div>
  );
};

export default ECommerce;
