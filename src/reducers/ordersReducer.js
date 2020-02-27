export const ordersReducer = (state = [], action) => {
    if (action.type === 'GET_ORDERS') {
        return action.payload;
    } else {
        return state;
    }
};
