import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInRequest, logInSuccess, logInError } from './actions';
/*ваш бекенд */
// axios.defaults.baseURL = 'https://site.ualegion.com/';
// const userLogin = 'api/v1/security/login';
/*мій бекенд*/
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userLogOut = '/users​/logout';
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
            toast.error('Please register or enter correct data ');
        });
};

/*Використовуючи createAsyncThunk*/
// export const logIn = createAsyncThunk(
//     'auth/login',
//     async (credentials, { rejectWithValue }) => {
//         try {
//             console.log(credentials);
//             const { data } = await axios.post(userLogin, credentials);
//             token.set(data.token);
//             console.log(data);
//             return data;
//         } catch (err) {
//             toast.success('No such user');
//             rejectWithValue(err.message);
//         }
//     },
// );
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        console.log(state);
        token.set(state.token);
        try {
            await axios.delete(userLogOut);
            token.unset();
        } catch (err) {
            rejectWithValue(err.message);
        }
    },
);
