// 1. The state is initialized in the Redux store with the configureStore method.

import {configureStore} from "@reduxjs/toolkit";
import api from "./playersAPI";
import allPlayers from "../components/allPayers/allPlayersSlice";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        allPlayers,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;