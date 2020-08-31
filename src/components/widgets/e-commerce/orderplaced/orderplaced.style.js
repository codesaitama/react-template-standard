import styled from "styled-components";

const OrderPlacedWrapper = styled.div`
  .order-placed-container {
    background-color: white;
    .status-block {
      justify-content: flex-end;
      @media (max-width: 575.98px) {
        display: block !important;
        justify-content: start;
        button {
          width: 100%;
        }
        .product-review-btn {
          margin-left: 0 !important;
          margin-top: 15px;
        }
      }
    }
    .order-header {
      @media (max-width: 575.98px) {
        display: block !important;
        .placed-block {
          padding-bottom: 10px;
        }
      }
    }
    .complete-status {
      @media (max-width: 575.98px) {
        font-size: 11px !important;
      }
    }
  }
`;

export default OrderPlacedWrapper;
