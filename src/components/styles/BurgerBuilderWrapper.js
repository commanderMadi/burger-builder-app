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
            margin: 3rem 0;
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

            button.add_one {
                border-radius: 10px;
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
                border-radius: 10px;
                cursor: pointer;
                padding: 0.5rem;
                border-color: tomato;
                background-color: tomato;
                margin: 1rem;
                color: #fff;
                :disabled {
                    background-color: grey;
                    border-color: grey;
                }
            }
            span {
                text-align: center;
            }
        }
    }
`;
