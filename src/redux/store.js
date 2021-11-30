import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './user/reducers';
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
    // version: 1,
    storage,
    whitelist: ['token'],
};

// const rootReducer = combineReducers({ items, filter });
const persistedReducer = persistReducer(persistConfig, user);

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
