import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .type-icon {
    font-size: 30px;
    background-color: #f4f5f7;
    color: ${props => props.color};
    padding: 3px 10px;
  }
  .title-text {
    line-height: 10px;
  }
  .measure-text {
    color: ${props => (props.direction === "up" ? "#77A361" : "#CD6889")};
    font-size: 20px;
  }
`;
