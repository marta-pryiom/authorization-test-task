import { configureStore } from '@reduxjs/toolkit';
import authSlice from './user/slices';
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
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logger),
});

export const persistor = persistStore(store);
