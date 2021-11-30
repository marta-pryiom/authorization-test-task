import { createAction } from '@reduxjs/toolkit';

// export const login = createAction('user/login', (email, password) => {
//     return {
//         payload: {
//             email,
//             password,
//             isAuth: true,
//         },
//     };
// });
export const logInRequest = createAction('user/logInRequest');
export const logInSuccess = createAction('user/logInSuccess');
export const logInError = createAction('user/logInError');
