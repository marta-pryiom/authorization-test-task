import { createReducer } from '@reduxjs/toolkit';
import { logInRequest, logInSuccess, logInError } from './actions';

const user = createReducer('', {
    [logInRequest]: (state, { payload }) => {
        console.log(state);
        /*можна поставити умову */
        return payload;
    },
    [logInSuccess]: (state, { payload }) => {
        console.log(state);
        /*можна поставити умову */
        return payload;
    },
    [logInError]: (state, { payload }) => {
        console.log(state);
        /*можна поставити умову */
        return payload;
    },
});

export default user;

//const user = (state, { type, payload }) => {
//     console.log(state);
//     switch (type) {
//         case types.LOGIN:
//             return payload;
//         default:
//             return state;
//     }
// };
