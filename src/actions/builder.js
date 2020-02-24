export const addIngredients = (ingredient, ingredients) => ({
    type: 'UPDATE_INGREDIENTS',
    payload: {[ingredient]: ingredients[ingredient] + 1}
});

export const removeIngredients = (ingredient, ingredients) => ({
    type: 'UPDATE_INGREDIENTS',
    payload: {[ingredient]: ingredients[ingredient] - 1}
});


