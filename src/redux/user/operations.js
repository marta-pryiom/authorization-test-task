import axios from 'axios';
// import { login } from '../user/actions';
import { logInRequest, logInSuccess, logInError } from './actions';
axios.defaults.baseURL = 'https://site.ualegion.com/v2/api-docs';
const userLogin = 'api/v1/security/login';
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};
export const logIn = credentials => dispatch => {
    dispatch(logInRequest());
    axios
        .post(userLogin, credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(logInSuccess(response.data));
        })
        .catch(error => {
            dispatch(logInError(error.message));
            // toast.error(error.message);
            console.log(error);
        });
};
