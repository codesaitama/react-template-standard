import styled from "styled-components";

const ProductListInfoWrapper = styled.div`
  .product-list-info-container {
    background-color: white;
    padding: 24px;
    .product-image {
      img {
        width: 220px;
        max-width: 100%;
        height: 220px;
        object-fit: cover;
      }
    }
  }
`;

export default ProductListInfoWrapper;
