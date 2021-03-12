import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${props => props.theme.sectionPadding} 25px 0 25px;
  text-align: center;
  .row {
    overflow: hidden;
    .col {
      padding-right: 5px;
      padding-left: 5px;
      opacity: 0.9;
      margin-bottom: 12px;
      cursor: pointer;
      &:hover {
        transition: ${props => props.theme.transition};
        transform: scale(1.03);
        opacity: 1;
      }
    }
  }
  .btn {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.white};
    transition: ${props => props.theme.transition};
    display: inline-block;
    margin-top: -10px;
    margin-left: 10px;
    &:hover {
      background-color: ${props => props.theme.darker};
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 30vh;
  position: relative;
  object-fit: cover;
`;

export const Heading = styled.h3`
  color: ${props => props.theme.white};
  position: absolute;
  bottom: 5px;
  left: 25px;
  background-color: ${props => props.theme.main};
  font-size: 1.3rem;
  padding: 5px;
`;

export const MainHeading = styled.h2`
  color: ${props => props.theme.darker};
  font-size: 2.4rem;
  margin-bottom: 1.3rem;
`;
