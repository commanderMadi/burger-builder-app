import styled from 'styled-components';

export const BurgerBuilderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 800px;
  flex-direction: column;
  align-items: center;
  .burger__builder__title {
    margin: 5rem;
  }
  .ingredients__controls--container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    .ingredients__controls--totalprice {
      margin-bottom: 3rem;
      background-color: lightgrey;
      padding: 2rem;
      color: #222;
    }

    .ingredients__controls--group {
      display: flex;
      width: 19.8rem;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      p {
        flex-grow: 2;
        .max_amount_reached {
          margin-left: 5px;
          font-size: 0.5rem;
          color: red;
        }
      }

      button[class$='_one'] {
        border-radius: 5px;
        cursor: pointer;
        padding: 0.5rem;
        background-color: lightgreen;
        border-color: lightgreen;
        margin: 1rem;
        color: #fff;
        :disabled {
          background-color: grey;
          border-color: grey;
        }
      }

      button.subtract_one {
        border-color: tomato;
        background-color: tomato;
      }
      span {
        text-align: center;
      }
    }
  }
  .checkout {
    background-color: #222;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    border-color: transparent;
    padding: 1rem;
  }
`;
