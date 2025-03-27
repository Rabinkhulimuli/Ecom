import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { LogOutUser } from "@/lib/getUser";
import { clearUser } from "@/lib/user/userSlice";
 export default function LogOut(){
    const dispatch = useDispatch()
    const handleLogout=()=> {
        LogOutUser()
        dispatch(clearUser())
    }
    return (
        <>
            <div className="relative group">
            <button onClick={handleLogout}><IoMdLogOut className="rounded-full w-6 h-6 md:w-8 md:h-8 " /></button>
            <p className="text-sm hidden absolute text-white bg-black/40 rounded-lg px-4 py-2  text-nowrap right-9 capitalize -top-1  group-hover:block">log out</p>
            </div>
             </>
    )
 }