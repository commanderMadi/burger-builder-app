import styled from 'styled-components';

export const OrderWrapper = styled.div`
  background: rgba(255, 244, 231, 0.9);
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  width: 50%;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin: 1rem;
    }
  }
  p {
    align-self: center;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    margin: 1rem auto;
  }
`;
