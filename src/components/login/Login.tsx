"use client";

import { FcGoogle } from "react-icons/fc";
export const SignIn = () => {
  const redirecturl= process.env.NEXT_PUBLIC_REDIRECT_URL as string
const handleLogin=async ()=> {
 
  window.location.href=`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=${redirecturl}/api/auth/google/redirect&scope=profile%20email&client_id=801191979878-14auvuc2kbkie7r98ea8fpb3n7picmou.apps.googleusercontent.com&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow`
 }
  return (
    <button
      onClick={()=> handleLogin()}
      className="text-lg py-2 cursor-pointer md:py-4 hover:bg-gray-50 rounded-sm w-full border flex justify-center items-center gap-4 "
    >
      {" "}
      <FcGoogle className="w-6 h-6" /> <span>Sign up with google</span>{" "}
    </button>
  );
};
