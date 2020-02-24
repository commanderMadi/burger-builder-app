const defState = {
  bacon: 0,
  cheese: 0,
  meat: 0,
  salad: 0
  }

export const builderReducer = (state = defState, action) => {
  if(action.type === 'UPDATE_INGREDIENTS' ) {
    return {
      ...state,
      ...action.payload
    }
  }
  else {
    return state;
  }
};
