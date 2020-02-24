import styled from 'styled-components';

export const AuthenticationForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 50%;
  height: 400px;
  border-radius: 10px;
  transition: box-shadow 0.5s linear;
  justify-content: center;
  align-items: center;
  border: 1px solid tomato;
  &:hover {
    box-shadow: 10px 15px #888888;
    animation-fill-mode: forwards;
  }
  > label {
    margin-top: 1rem;
  }
  > input {
    width: 80%;
    border-radius: 8px;
    box-shadow: 5px -8px #888888 inset;
    padding: 0.5rem;
    height: 3.5rem;
    margin: 1rem 1.5rem;
    font-size: 1.3rem;
    font-weight: lighter;
    &:focus {
      border-color: orange;
    }
  }
`;
