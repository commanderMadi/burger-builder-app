export const priceReducer = (totalPrice = 0, action) => {
    switch (action.type) {
        case 'UPDATE_TOTAL':
            return action.totalPrice;
        case 'RESET_TOTAL':
            return 0
        default:
            return totalPrice;
    }
}
