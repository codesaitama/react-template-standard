import React from "react";
import classNames from "classnames";

const SingleProduct = ({
  productImage,
  productDesc = "",
  productRating = "4.5",
  productSellCount = "3552",
  productPrice = "$499",
  productOrignalPrice = "$599",
  percentageOff = "43",
  isFav = false
}) => {
  return (
    <div className="text-center pos-relative ptb-15">
      <div className="image-block">
        <img className="product-image" src={productImage} alt="product" />
      </div>
      <div className="fav-product">
        <i
          className={classNames(
            "fas fa-heart",
            "cursor-pointer",
            isFav && "saved-product"
          )}
        ></i>
      </div>
      <div className="product-desc fs-15 medium-text pt-15">{productDesc}</div>
      <div className="flex-x center ptb-3">
        <div className="product-rating c-success">
          {productRating}
          <i className="fas fa-star"></i>
        </div>
        <div className="product-sell-count greytext--text fs-12 medium-text">
          ( {productSellCount} )
        </div>
      </div>
      <div className="flex-x center">
        <div className="product-price fs-20 medium-text mr-10">
          {productPrice}
        </div>
        <div className="product-orignal-price mr-10 greytext--text fs-13">
          {productOrignalPrice}
        </div>
        <div className="product-off-price fs-12">{percentageOff}% off</div>
      </div>
    </div>
  );
};

export default SingleProduct;
