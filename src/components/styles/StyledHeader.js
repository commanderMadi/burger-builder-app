import styled from 'styled-components';

export const StyledHeader = styled.nav`
    margin: 0;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c74b4b;
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
            padding: 0.5rem;
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
`;
