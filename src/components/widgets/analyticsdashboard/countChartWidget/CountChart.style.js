import styled from "styled-components";

export const CountChartWrapper = styled.div`
  background-color: ${props => props.bgColor || "#707cd2"};
  color: white;
  padding: 25px;
  .icon-text {
    line-height: 20px;
  }
`;
