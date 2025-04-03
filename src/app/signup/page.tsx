"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignIn } from "@/components/login/Login";
import { Formik } from "formik";
import { createUser } from "@/lib/getUser";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser,setToken } from "@/lib/user/userSlice";
function Spage() {  
const router= useRouter()
const dispatch= useDispatch()
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
          <p className=" text-2xl md:text-4xl">Create an account </p>
          <p className=" md:text-lg">Enter your details below</p>
          <div className="flex flex-col gap-2 md:gap-4 md:mt-6">
            <Formik
            initialValues={{
              name:"",
              email:"",
              password:"",
              confirmpassword:""

            }}
            onSubmit={async(values)=> {
              try{
                const user= await createUser({name:values.name,email:values.email,password:values.password})
                dispatch(setUser({name:user.name!,email:user.email,id:user.id!,image:user.image!}))
                dispatch(setToken(user.token!))
                router.push("/")
              }catch(err){
                console.log(err)
              }

            }}
            validate={(values) => {
              const errors = {email:"",password:""};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if(values.password !==values.confirmpassword){
                errors.password="Password not matched"
                
              }
              return errors;
            }
          
          }
            >
              {({handleBlur,handleChange,handleSubmit,values,setFieldValue,errors,touched,isSubmitting})=> 
              <form className="flex flex-col gap-6 md:gap-10   " onSubmit={handleSubmit} >
              <input
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={(e)=> {
                  const trimmedVal= e.target.value.trim()
                  setFieldValue("name",trimmedVal)
                  handleBlur(e)
                }}
              />
              <input
              required
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="text"
                placeholder="Email or Phone Number"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={(e)=> {
                  const trimmedEmail= e.target.value.trim()
                  setFieldValue("email",trimmedEmail)
                  handleBlur(e)
                }}
              />
              <span className="text-red-500"> {errors.email && touched.email && errors.email}</span>
              <input
                required
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={(e)=> {
                  const trimmedpassword= e.target.value.trim()
                  setFieldValue("password",trimmedpassword)
                  handleBlur(e)
                }}
              />
               <span className="text-red-500">{  errors.password && touched.password && errors.password}</span>
              <input
                className="outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md"
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={(e)=> {
                  const trimmedpassword= e.target.value.trim()
                  setFieldValue("confirmpassword",trimmedpassword)
                  handleBlur(e)
                }}
              />
              <button type="submit" disabled={isSubmitting} className="text-lg py-2 md:py-4 cursor-pointer w-full bg-[#DB4444] hover:bg-[#DB2222] text-white">
                Create Account
              </button>
            </form>
              }
            </Formik>
            
            <div className="flex flex-col">
              <SignIn />

              <p className="w-full text-center py-6 md:py-8 md:text-lg rounded-sm">
                <span className="opacity-70">Already have account? </span>{" "}
                <Link className="ml-2 underline hover:text-[#DB4444]" href="/login">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spage;
