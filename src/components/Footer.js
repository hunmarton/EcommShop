import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 12vh;
  margin-top: 35px;
  background: ${props => props.theme.main};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; EcommShop 2021.</p>
      {/* <div className="icons">
        <FaFacebookSquare />
        <FaInstagramSquare />
      </div> */}
    </FooterWrapper>
  );
}

export default Footer;
