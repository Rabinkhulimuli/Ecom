import axios from "axios";
import { loginType, UserType } from "../../types/userType";

export const getUser=async ():Promise<UserType |null> => {
    try{
        
        const response= await axios.get("/auth/user")
        return response.data.user
    }catch (err){
        console.log(err)
        return null
    }
}
export const createUser= async(data:loginType):Promise<loginType>=> {
    try{
        const response= await axios.post("/user/createUser",data,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        return response.data
    }catch(err){
        console.log(err)
        throw new Error("error creating user")
    }
}
type loginUserType={
    user:loginType,
    token:string
}
export const loginUser= async(data:loginType):Promise<loginUserType> => {
    try{
      
        const response= await axios.post("/user/loginUser",data,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        return response.data
    }catch (err){
        if(axios.isAxiosError(err)){
            const customError= err.response?.data.msg
            console.log(customError)
            throw new Error(customError)
        }else{
            throw new Error (err instanceof Error? err.message:"An un expected error occcoured")
        }
    }
}
export const LogOutUser= async ()=> {
    try{
        await axios.post("/auth/logout")
    }catch(err){
        console.log(err)
    }

}