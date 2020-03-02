import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  > label {
    margin-top: 1rem;
  }
  > input {
    width: 100%;
    border-radius: 4px;
    /* box-shadow: 1px 1px #888888; */
    padding: 0.5rem;
    height: 3.5rem;
    margin: 1rem 1.5rem;
    font-size: 1.3rem;
    font-weight: lighter;
    &:focus {
      border-color: orange;
    }
  }
  > select {
    padding: 10px;
    margin-bottom: 1.5rem;
  }

  > button {
    padding: 1rem;
    margin: 1rem;
    text-transform: uppercase;
  }
`;
