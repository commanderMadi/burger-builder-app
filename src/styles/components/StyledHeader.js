import styled from 'styled-components';

export const StyledHeader = styled.nav`
  margin: 0;
  overflow: hidden;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c74b4b;
  .navbar__toggle {
    color: #fff;
    display: none;
  }
  > img {
    width: 64px;
    margin-left: 1rem;
  }
  > ul {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;

    > li {
      margin-left: 1.5rem;
      list-style-type: none;
      > a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: tomato;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    ul {
      display: none;
    }
    justify-content: space-between;
    .navbar__toggle {
      display: block;
    }

    #side_menu_shown {
      opacity: 1;
      position: absolute;
      animation: moveIn 700ms ease-in-out;
      @keyframes moveIn {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      display: flex;
      flex-direction: column;
      background: #222;
      opacity: 0.7;
      height: -webkit-fill-available;
      height: 100vh;
      top: 9.3%;
      align-items: center;
      justify-content: flex-start;
      width: 50%;
      left: 0;
      li {
        margin: 1.5rem;
      }
    }
  }
`;
