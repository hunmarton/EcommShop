import styled from "styled-components";
import image from "../img/phone.jpg";

export const ImgWrapper = styled.div`
  height: 50vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
