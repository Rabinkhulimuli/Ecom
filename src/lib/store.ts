import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import { querySlice } from "./query/querySlice"
export const store= configureStore({
    reducer:{
        user:userReducer,
        [querySlice.reducerPath]:querySlice.reducer,
    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(querySlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch