import axios from 'axios';
import c from './constants';
import { persistData, removeData, loadData } from '../helpers';

let API_URL;
if (process.env.NODE_ENV === 'production') {
  API_URL = 'http://www.example.com';
} else {
  API_URL = 'http://localhost:3090';
}

export const signIn = ({ username, password }) => dispatch => {
  axios
    .post(`${API_URL}/signin`, { username, password })
    .then(res => {
      persistData('jwt_fitness', res.data.jwt);
      dispatch({ type: c.AUTHENTICATION_SUCCESS });
    })
    .catch(err => {
      if (!err.response) {
        dispatch(authError('Сервер не доступен.'));
      } else {
        dispatch(authError('Неверный логин или пароль.'));
      }
    });
};

export const authError = err => ({
  type: c.AUTH_ERROR,
  payload: err
});

export const logOut = () => {
  removeData('jwt_fitness');
  return {
    type: c.LOG_OUT
  };
};

export const fetchContent = () => dispatch => {
  const token = loadData('jwt_fitness');
  axios
    .get(`${API_URL}`, { headers: { authorization: token } })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
};
