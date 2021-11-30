import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './operations';
import { logInSuccess, logInError } from './actions';
const initialState = {
    user: { email: '' },
    token: '',
    isAuth: false,
    error: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [logInSuccess](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
        },
        [logInError](state, { payload }) {
            state.error = payload.message;
        },
        [logOut.fulfilled](state, _) {
            state.user = '';
            state.token = '';
            state.isAuth = false;
        },
    },
});

export default authSlice.reducer;
