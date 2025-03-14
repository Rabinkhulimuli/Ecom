"use client"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
export const SignIn= ()=> {
  return <button  
  onClick={()=> signIn("google")}
  className='text-lg py-2 cursor-pointer md:py-4 rounded-sm w-full border flex justify-center items-center gap-4 '> <FcGoogle className='w-6 h-6'/> <span>Sign up with google</span> </button>
}