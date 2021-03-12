import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${props => props.theme.sectionPadding} 15px 0 15px;
  color: ${props => props.theme.darker};
  .btn {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.white};
    transition: ${props => props.theme.transition};
    &:hover {
      background-color: ${props => props.theme.darker};
    }
  }
`;
export const Heading = styled.h2`
  margin-bottom: 1.1.rem;
  font-size: 2.6rem;
`;

export const Image = styled.img`
  width: 100%;
`;
