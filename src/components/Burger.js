import React from 'react';
import { BurgerContainer, SandwichContainer, TopBun, BottomBun } from '../styles/components/Burger';

export const Burger = props => {
  return (
    <SandwichContainer>
      <BurgerContainer>
        <TopBun></TopBun>
        {props.children}
        <BottomBun></BottomBun>
      </BurgerContainer>
    </SandwichContainer>
  );
};
