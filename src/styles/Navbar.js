import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${props => props.theme.main};
  position: sticky;
  top: 6.9vh;
  z-index: 1000;
  .nav-link,
  .navbar-brand {
    color: ${props => props.theme.white} !important;
    transition: ${props => props.theme.transition};
    &:hover {
      color: ${props => props.theme.darker} !important;
    }
  }
`;
