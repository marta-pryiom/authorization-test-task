import { createAction } from '@reduxjs/toolkit';
export const logInRequest = createAction('auth/logInRequest');
export const logInSuccess = createAction('auth/logInSuccess');
export const logInError = createAction('auth/logInError');
