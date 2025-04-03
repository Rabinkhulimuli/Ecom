"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { Formik } from "formik";
import { loginUser } from "@/lib/getUser";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/lib/user/userSlice";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client"
function LoginPage() {
  const [customError, setCustomError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const redirecturl=process.env.NEXT_PUBLIC_REDIRECT_URL
  const handleLogin=()=> {
 
    window.location.href=`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=${redirecturl}/api/auth/google/redirect&scope=profile%20email&client_id=801191979878-14auvuc2kbkie7r98ea8fpb3n7picmou.apps.googleusercontent.com&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow`
   }
  return (
    <div className="flex flex-col gap-8 xl:gap-32 lg:flex-row md:justify-between mt-8 md:mt-15">
      <div className="relative min-w-[200px] w-full min-h-[400px] max-w-[805px] max-h-[780px]">
        <Image
          className="w-full h-full object-cover"
          src="/signup/cart.png"
          alt=" cart"
          fill
          priority
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col gap-4 md:gap-6 xl:min-w-[370px] w-full ">
          <p className=" text-2xl md:text-4xl">Log in to Xprive </p>
          <p className=" md:text-lg">Enter your details below</p>
          <div className="flex flex-col gap-2 md:gap-4 md:mt-6">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                try {
                  const res = await loginUser(values);
                  console.log(res)
                  dispatch(
                    setUser({
                      id: res.user.id!,
                      name: res.user.name!,
                      email: res.user.email,
                      image: res.user.image!,
                    })
                  );
                  dispatch(setToken(res.token!));
                  router.push("/");
                } catch (err) {
                  if (err instanceof Error) {
                    setCustomError(err.message);
                  }
                }
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit,
                isSubmitting
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 md:gap-10  "
                  action=""
                >
                  <div className="flex flex-col">
                    <span className="text-red-300 text-center capitalize">
                      {customError}{" "}
                    </span>
                    <input
                    required
                      className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                      type="text"
                      placeholder="Email or Phone Number"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={(e) => {
                        const trimmedemail = e.target.value.trim();
                        setFieldValue("email", trimmedemail);
                        handleBlur(e);
                      }}
                      value={values.email}
                    />
                  </div>
                  <input
                  required
                    className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const trimmedPassword = e.target.value.trim();
                      setFieldValue("password", trimmedPassword);
                      handleBlur(e);
                    }}
                  />
                  <div className="flex md:justify-between gap-12">
                    <motion.button
                    disabled={isSubmitting}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    className="text-lg py-2 md:py-4 px-12 cursor-pointer w-fit bg-[#DB4444] text-white rounded-sm">
                      Log In
                    </motion.button>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="text-lg py-2 md:py-4  hover:underline cursor-pointer w-fit text-[#DB4444] "
                    >
                      Forget Password?
                    </button>
                  </div>
                </form>
              )}
            </Formik>

            <div className="flex flex-col">
              <button onClick={handleLogin}  className="text-lg py-2 hover:bg-gray-50 cursor-pointer md:py-4 w-full border flex justify-center items-center gap-4 ">
                {" "}
                <FcGoogle className="w-6 h-6" /> <span>Log In with google</span>{" "}
              </button>

              <p className="w-full text-center py-6 md:py-8 md:text-lg rounded-sm">
                <span className="opacity-70">
                  Don&apos;t have account yet?{" "}
                </span>{" "}
                <Link className="ml-2 underline hover:text-[#DB4444]" href="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
