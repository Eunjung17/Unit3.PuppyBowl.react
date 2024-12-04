//2. Build the initial interface in the Redux store (state)
//Fetch the initial data and build the application state

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

//const COHORT_CODE = "2109-UNF-HY-WEB-PT";
const COHORT_CODE = "2408-FTB-ET-WEB-AM";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

const api = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes:["Player"],
    endpoints: ()=> ({}),
});

export default api;

