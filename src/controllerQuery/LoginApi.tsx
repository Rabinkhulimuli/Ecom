
import axios from "axios"
import { useMutation} from "@tanstack/react-query"
import { UserType } from "../../types/userType"

export const useLoginSignup=()=> {
    const getUser = async ():Promise<UserType> => {
        try{
            const {data}= await axios.get("/api/auth/google/login")
            return data
        }catch(err){
            console.log(err)
            throw new Error("error logging in")
        }
        
    }
    const {mutate:createGetUser,isPending:isLoading} = useMutation({
        mutationFn:getUser,
        mutationKey:['loginUser']
    })
    return {createGetUser,isLoading}
}