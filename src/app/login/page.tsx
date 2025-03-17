import React from 'react'
import { FcGoogle} from "react-icons/fc"
import Link from 'next/link'
import Image from 'next/image'
function page() {
  return (
    <div className='flex flex-col gap-8 xl:gap-32 lg:flex-row md:justify-between mt-8 md:mt-15'>
        <div className='relative min-w-[200px] w-full min-h-[400px] max-w-[805px] max-h-[780px]'>
            <Image className='w-full h-full object-cover' src="/signup/cart.png" alt=" cart" fill priority />
        </div>
      <div className='w-full flex items-center justify-center'>

        <div className='flex flex-col gap-4 md:gap-6 xl:min-w-[370px] w-full '>
            <p className=' text-2xl md:text-4xl'>Log in to Xprive </p>
            <p className=' md:text-lg'>Enter your details below</p>
            <div className='flex flex-col gap-2 md:gap-4 md:mt-6'>
                <form className='flex flex-col gap-6 md:gap-10  ' action="">
                
                <input
                className='outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md'
                type="text" placeholder='Email or Phone Number' name="email" />
                <input
                className='outline-none border-b-2 px-2 pb-2 text-lg focus:ring-2 focus:ring-blue-600 focus:rounded-md'
                type="password" placeholder='Password' name="password" />
                <div className='flex md:justify-between gap-12'>
                <button className='text-lg py-2 md:py-4 px-12 cursor-pointer w-fit bg-[#DB4444] text-white rounded-sm' >Log In</button>
                <button className='text-lg py-2 md:py-4 cursor-pointer w-fit text-[#DB4444] ' >Forget Password?</button>
                </div>
            </form>
            <div className='flex flex-col'>
            <button className='text-lg py-2 cursor-pointer md:py-4 w-full border flex justify-center items-center gap-4 '> <FcGoogle className='w-6 h-6'/> <span>Log In with google</span> </button>
                
            <p className='w-full text-center py-6 md:py-8 md:text-lg rounded-sm'><span className='opacity-70'>Don&apos;t have account yet? </span> <Link className='ml-2 underline' href="/signup">Sign Up</Link></p>
                
        
            </div>
            </div>
            
        </div>        
      </div>
    </div>
  )
}

export default page
