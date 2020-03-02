import styled from 'styled-components';

// Might refactor to use props later.

const bunWidth = 'width: 20rem';
const bunHeight = 'height: 20px';
const ingredientWidth = 'width: 19.8rem';
const ingredientHeight = 'height: 10px';
const ingredientBorderRadius = 'border-radius: 1rem';
const padAndMargin = `
padding: 20px;
margin: 2px;
`;

export const SandwichContainer = styled.div`
  display: flex;
  height: 30vh;
  margin-top: 3rem;
  justify-content: center;
`;

export const BurgerContainer = styled.div`
  margin-top: 1rem;
`;

export const TopBun = styled.div`
  ${bunWidth};
  ${bunHeight};
  ${padAndMargin};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: linear-gradient(to right, #a6926c, #ead2a3);
`;

export const BottomBun = styled.div`
  ${bunWidth};
  ${bunHeight};
  ${padAndMargin};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-image: linear-gradient(to left, #a6926c, #ead2a3);
`;

export const Meat = styled.div`
  ${ingredientWidth};
  ${ingredientHeight};
  ${ingredientBorderRadius};
  ${padAndMargin};
  background-image: linear-gradient(#473433, #522522);
`;

export const Salad = styled.div`
  ${ingredientWidth};
  ${ingredientHeight};
  padding: 10px;
  margin: 2px;
  background-image: linear-gradient(to left, #82d59f, #38f47a);
`;

export const Cheese = styled.div`
  ${ingredientWidth};
  ${ingredientHeight};
  padding: 10px;
  margin: 2px;
  background-image: linear-gradient(to right, #f4dd38, #fff294);
`;

export const Bacon = styled.div`
  ${ingredientWidth};
  height: 1px;
  padding: 8px;
  margin: 2px;
  background-image: linear-gradient(to left, #c25d55, #e6295b);
`;
