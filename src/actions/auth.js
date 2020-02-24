import axios from 'axios';

export const auth = (url, email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true
      });
      const { idToken, localId } = response.data;
      return dispatch(updateAuth(idToken, localId, null));
    } catch (e) {
      return dispatch(updateAuth(null, null, e));
    }
  };
};

const updateAuth = (idToken, localId, errorObject) => {
  return {
    type: 'UPDATE_AUTH',
    idToken,
    localId,
    errorObject
  };
};

export const logout = () => {
  return {
    type: 'LOG_OUT'
  };
};
