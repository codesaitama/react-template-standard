import styled from "styled-components";

const CollectCoupenWrapper = styled.div`
  .collect-coupen-container {
    background-color: white;
    padding: 24px;
    .coupen-btn {
      width: 100%;
      padding: 8px;
      border: 1px dashed rgba(0, 0, 0, 0.5);
      &:focus {
        outline: 0 !important;
      }
    }
  }
`;

export default CollectCoupenWrapper;
