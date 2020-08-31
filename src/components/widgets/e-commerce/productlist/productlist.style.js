import styled from "styled-components";

const ProductListWrapper = styled.div`
  .product-list-container {
    background-color: #fff;
    .image-block {
      height: 150px;
    }
    .slick-block {
      &:focus {
        outline: 0;
      }
    }
    .list-card-header {
      padding: 24px;
    }
    .product-image {
      margin: 0 auto;
      height: auto;
      width: auto;
      max-width: 200px;
      max-height: 150px;
    }
    .product-rating {
      padding: 2px 5px;
      margin-right: 5px;
      border-radius: 4px;
      font-size: 12px;
      i {
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .product-orignal-price {
      text-decoration: line-through;
    }
    .product-off-price {
      color: #00c486;
    }
    .fav-product {
      position: absolute;
      right: 40px;
      top: -5px;
      i {
        color: #c2c2c2;
      }
    }
    .saved-product {
      color: #ff4081 !important;
    }
  }
`;

export default ProductListWrapper;
