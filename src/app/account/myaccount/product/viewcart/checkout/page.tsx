"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import BillingDetail from '@/components/checkout/BillingDetail'
import CheckoutDetail from '@/components/checkout/CheckoutDetail'

function Page() {
    const pathName=usePathname()
  return (
    <div>
      <p className=' text-xs sm:text-[16px] capitalize' >{pathName.replace("/","").split("/").join(" / ")} </p>
        <div>
            <div>
                <p className='text-xl sm:text-4xl capitalize mb-8 sm:mb-12 mt-10 sm:mt-20'>
                    Billing details
                </p>
                <div className='flex flex-col lg:flex-row gap-15 xl:gap-30 justify-between'>
                    <BillingDetail/>
                    <CheckoutDetail/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page
