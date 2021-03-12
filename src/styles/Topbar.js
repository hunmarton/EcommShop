import styled from "styled-components";

export const TopWrapper = styled.div`
  height: 7vh;
  background: ${props => props.theme.main};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .cart {
    color: ${props => props.theme.white};
    margin-right: 1.1rem;
    font-size: 1.3rem;
    cursor: pointer;
    position: relative;
    &:hover {
      color: ${props => props.theme.darker};
      transition: ${props => props.theme.transition};
    }
  }
`;
