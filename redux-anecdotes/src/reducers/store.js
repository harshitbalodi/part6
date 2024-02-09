import { configureStore } from "@reduxjs/toolkit";
import anecdoteSlice from "./anecdoteReducer";
import filterSlice from "./FilterReducer";
import NotificationReducer from "./NotificationReducer";

const store=configureStore({
    reducer:{
        anecdotes:anecdoteSlice,
        filter: filterSlice,
        notification:NotificationReducer
    }

})

export default store;