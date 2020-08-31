import styled from "styled-components";
import weatherBg from "assets/images/weather.jpg";

export const WeatherWidgetWrapper = styled.div`
  background-image: url(${weatherBg});
  padding: 25px;
  color: #fff;
  .sub-text {
    line-height: 0.8;
  }
`;
