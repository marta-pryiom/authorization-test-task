import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/slices';
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
    },
    middleware,
});
export const persistor = persistStore(store);
