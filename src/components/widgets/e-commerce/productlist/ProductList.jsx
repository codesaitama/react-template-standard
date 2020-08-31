import React from "react";
import ProductListWrapper from "./productlist.style";
import Slider from "react-slick";
import SingleProduct from "./SingleProduct";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6
} from "helper/constant";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 788,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const ProductList = () => {
  return (
    <ProductListWrapper>
      <div className="roe-shadow-2 product-list-container">
        <div className="list-card-header flex-x align-center">
          <div className="flex-1 fs-18 header">Printer Monitors & more</div>
          <button className="c-btn c-primary">View All</button>
        </div>
        <div>
          <Slider {...settings}>
            <div className="slick-block">
              <SingleProduct
                productImage={product1}
                productDesc="LG 18.5 inches HD LED Backlit Monitor"
                productRating="4.5"
                productSellCount="3,552"
                productPrice="$499"
                productOrignalPrice="$599"
                percentageOff="43"
                isFav
              />
            </div>
            <div className="slick-block">
              <SingleProduct
                productImage={product2}
                productDesc="Epson EB-S41 Projector"
                productRating="4.5"
                productSellCount="334"
                productPrice="$200"
                productOrignalPrice="$400"
                percentageOff="50"
              />
            </div>
            <div className="slick-block">
              <SingleProduct
                productImage={product3}
                productDesc="Egate EG I9(BLACK) Portable Projector"
                productRating="4"
                productSellCount="3,976"
                productPrice="$2000"
                productOrignalPrice="$2200"
                percentageOff="10"
              />
            </div>
            <div className="slick-block">
              <SingleProduct
                productImage={product4}
                productDesc="Epson L3100 Multi-function Printer"
                productRating="4.2"
                productSellCount="1,552"
                productPrice="$50"
                productOrignalPrice="$70"
                percentageOff="30"
              />
            </div>
            <div className="slick-block">
              <SingleProduct
                productImage={product5}
                productDesc="HP DeskJet Ink Advantage 2135 All-in-One Printer"
                productRating="4.2"
                productSellCount="10,785"
                productPrice="$1000"
                productOrignalPrice="$1200"
                percentageOff="15"
              />
            </div>
            <div className="slick-block">
              <SingleProduct
                productImage={product6}
                productDesc="LG 18.5 inches HD LED Backlit Monitor"
                productRating="4.5"
                productSellCount="3,552"
                productPrice="$499"
                productOrignalPrice="$599"
                percentageOff="43"
              />
            </div>
          </Slider>
        </div>
      </div>
    </ProductListWrapper>
  );
};

export default ProductList;
