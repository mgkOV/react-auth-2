import c from '../actions/constants';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case c.AUTHENTICATION_SUCCESS:
      return { ...state, err: null, authenticated: true };
    case c.AUTH_ERROR:
      return { ...state, err: action.payload, authenticated: false };
    case c.LOG_OUT:
      return { ...state, err: null, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
