"use client"
import MyAccount from "@/components/account/MyAccount";
import { getUser } from "@/lib/getUser";
import { setUser } from "@/lib/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Page() {
  const dispatch= useDispatch()
  useEffect(()=> {
    const getuser=async()=> {
      try{
        const user =await getUser()
        if(user){
          dispatch(setUser(user))
        }
        console.log(user)
      }catch(err){
        console.log(err)
      }
     
    }
        
   getuser()
  },[dispatch])

  return (
    <div>
      <MyAccount />
    </div>
  );
}

export default Page;
