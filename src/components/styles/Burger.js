import styled from 'styled-components';

// Will refactor to use props later.

const bunWidth = 'width: 430px';
const bunHeight = 'height: 20px';
const ingredientWidth = 'width: 420px';
const ingredientHeight = 'height: 10px';
const ingredientBorderRadius = 'border-radius: 1rem';
const padAndMargin = `
padding: 20px;
margin: 2px;
`;


export const SandwichContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TopBun = styled.div`
${bunWidth};
${bunHeight};
${padAndMargin};
border-top-left-radius: 10px;
border-top-right-radius: 10px;
background-image: linear-gradient(to right, #A6926C , #EAD2A3);
`

export const BottomBun = styled.div`
${bunWidth};
${bunHeight};
${padAndMargin};
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
background-image: linear-gradient(to left, #A6926C , #EAD2A3);
`

export const Meat = styled.div`
${ingredientWidth};
${ingredientHeight};
${ingredientBorderRadius};
${padAndMargin};
background-image: linear-gradient(#473433 , #522522);
`

export const Salad = styled.div`
${ingredientWidth};
${ingredientHeight};
${ingredientBorderRadius};
${padAndMargin};
background-image: linear-gradient(to left, #82D59F , #38F47A);
`

export const Cheese = styled.div`
${ingredientWidth};
${ingredientHeight};
${ingredientBorderRadius};
${padAndMargin};
background-image: linear-gradient(to right, #F4DD38 , #FFF294);
`

export const Bacon = styled.div`
${ingredientWidth};
${ingredientHeight};
${ingredientBorderRadius};
${padAndMargin};
background-image: linear-gradient(to left, #c25d55 , #f2f2f2);
`