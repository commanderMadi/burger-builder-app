import axios from 'axios';

export const getOrders = url => {
    return async dispatch => {
        const response = await axios.get(url);
        dispatch({
            type: 'GET_ORDERS',
            payload: response.data
        });
    };
};
