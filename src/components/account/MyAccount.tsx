import React from 'react'
import MyAccLeft from './MyAccLeft'
import MyAccRight from './MyAccRight'

function MyAccount() {
  return (
    <div className=' space-y-10 md:space-y-20'>
       <div className='flex justify-between items-center'>
       <p className='' >Home / My Acccount</p>
       <p>Wellcome to xprive</p>
       </div>
        <div className='lg:grid lg:grid-cols-3 justify-between  '>
        <MyAccLeft/>
           <div className='lg:col-span-2 '>
           
           <MyAccRight/>
           </div>
           
        </div>
    </div>
  )
}

export default MyAccount
