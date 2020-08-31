import React from "react";
import ProductPriceWrapper from "./productprice.style";

const ProductPrice = ({
  product,
  productName,
  productDetail,
  productPrice
}) => {
  return (
    <ProductPriceWrapper>
      <div className="product-price-container roe-shadow-2">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img
                className="product-price-img"
                src={product}
                alt="productPrice"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="flex-x center fill-height">
              <div>
                <div className="fs-16 bold-text">{productName}</div>
                <div className="fs-12 medium-text grey--text">
                  {productDetail}
                </div>
                <div className="fs-12 nevy--text pt-10">{productPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPriceWrapper>
  );
};

export default ProductPrice;
