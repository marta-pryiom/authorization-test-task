import { createSlice } from '@reduxjs/toolkit';
import { login } from './operations';
const initialState = {
    email: '',
    token: '',
    isAuth: false,
};
const authSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [login.fulfilled](state, { payload }) {
            state.email=payload.email;
            state.token=payload.token;
            state.isAuth=true;
        },
    },
});
export default authSlice.reducer;

