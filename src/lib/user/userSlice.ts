import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserType } from "../../../types/userType"
interface UserState {
    user:UserType | null
}
const initialState:UserState={
    user:null
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
        }
    }
})
export const {setUser,clearUser}= userSlice.actions
export default userSlice.reducer