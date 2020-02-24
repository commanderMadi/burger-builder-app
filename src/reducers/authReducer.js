const defState = { idToken: null, localId: null, errorMessage: null };

export const authReducer = (state = defState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTH':
      console.log(action);
      return action.idToken
        ? {
            ...state,
            idToken: action.idToken,
            localId: action.localId
          }
        : {
            ...state,
            idToken: null,
            localId: null,
            errorMessage: action.errorObject
          };
    case 'LOG_OUT':
      return {
        ...state,
        idToken: null,
        localId: null
      };
    default:
      return state;
  }
};
