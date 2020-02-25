import React from 'react';
import {SandwichContainer, TopBun, BottomBun} from './styles/Burger';

export const Burger = (props) => {
    return (
        <SandwichContainer>
            <TopBun></TopBun>
            {props.children}
            <BottomBun></BottomBun>
        </SandwichContainer>
    )
}