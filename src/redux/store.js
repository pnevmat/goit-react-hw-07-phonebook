import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    },
    middleware: [
        ...getDefaultMiddleware(),
        logger
    ],
    devTools: process.env.NODE_ENV === 'development'
});

export default store;