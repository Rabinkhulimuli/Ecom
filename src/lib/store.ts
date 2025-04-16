import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import productSlice from "./product/productSlice"
export const store= configureStore({
    reducer:{
        user:userReducer,
        [productSlice.reducerPath]:productSlice.reducer
    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(productSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch