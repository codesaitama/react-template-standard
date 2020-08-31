import styled from "styled-components";

export const StockSectionWrapper = styled.div`
  width: 50%;
  .section-container {
    display: flex;
    align-items: center;
  }
  .section-3 {
    flex-grow: 3;
  }
  .section-1 {
    flex-grow: 1;
    color: ${props => (props.direction === "up" ? "#77A361" : "#CD6889")};
  }
`;
export const StockInfoWrapper = styled.div`
  .vertical-hr {
    margin: 0px 20px;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
