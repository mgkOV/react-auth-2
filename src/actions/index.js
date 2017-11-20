import axios from 'axios';
import c from './constants';
import { saveData } from '../helpers';

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
      saveData('jwt_fitness', res.data.jwt);
      dispatch({ type: c.AUTHENTICATION_SUCCESS });
    })
    .catch(err => console.log(err));
};

export const logOut = () => ({
  type: c.LOG_OUT
});
