import axios from "axios";
import { UserType } from "../../types/userType";

export const getUser=async ():Promise<UserType |null> => {
    try{
        
        const response= await axios.get("/auth/user")
        return response.data.user
    }catch (err){
        console.log(err)
        return null
    }
}

export const LogOutUser= async ()=> {
        await axios.post("/auth/logout")
}