import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserType } from "../../../types/userType"
interface UserState {
    user:UserType | null
    token:string
}
const initialState:UserState={
    user:null,
    token:""
}

const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser(state,action:PayloadAction<UserType>){
            state.user=action.payload
        },
        clearUser(state){
            state.user=null
        },
        setToken(state,action:PayloadAction<string>){
            state.token=action.payload
        },
        clearToken(state){
            state.token=""
        }
    }
})
export const {setUser,clearUser,setToken,clearToken}= userSlice.actions
export default userSlice.reducer