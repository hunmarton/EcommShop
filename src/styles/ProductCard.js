import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 0 0 31%;
  border: 2px solid ${props => props.theme.darker};
  box-shadow: 0px 0px 5px ${props => props.theme.darker};
  .card-img-top {
    height: 200px;
    margin-top: 15px;
  }
`;

export const Title = styled.h5`
  color: ${props => props.theme.darker};
`;
export const Price = styled.h4`
  color: ${props => props.theme.darker};
  font-style: italic;
  font-weight: bold;
  margin-bottom: 15px;
`;
