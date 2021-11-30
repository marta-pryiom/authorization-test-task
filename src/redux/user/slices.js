import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './operations';
const initialState = {
    email: '',
    token: '',
    isAuth: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [logIn.fulfilled](state, { payload }) {
            state.email = payload.email;
            state.token = payload.token;
            state.isAuth = true;
        },
        // [logOut.fulfilled](state, _) {
        //     state.email = '';
        //     state.token = '';
        //     state.isAuth = false;
        // },
    },
});

export default authSlice.reducer;
