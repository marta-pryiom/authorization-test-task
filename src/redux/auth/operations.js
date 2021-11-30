import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://site.ualegion.com/v2/api-docs';
const userLogin = 'api/v1/security/login';
//api/v1/security/login
// /api/v1/users
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWidthValue }) => {
        try {
            const { data } = await axios.post(userLogin, credentials);
            token.set(data.token);
            return data;
        } catch (err) {
            rejectWidthValue(err.message);
        }
    },
);
