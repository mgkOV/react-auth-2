import c from '../actions/constants';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case c.AUTHENTICATION_SUCCESS:
      return true;
    case c.AUTHENTICATION_ERROR:
    case c.LOG_OUT:
      return false;
    default:
      return state;
  }
};

export default authReducer;
