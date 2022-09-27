import { configureStore } from '@reduxjs/toolkit';

import disneyReducer from '../Reducer/MovieReduer.js';
import UserReducer from '../Reducer/UserReducer.js';

export const Store = configureStore({
    reducer: {
        movie: disneyReducer,
        user: UserReducer
    },
});