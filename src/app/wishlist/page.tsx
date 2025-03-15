import Wishlist from '@/components/wishlist/Wishlist'
import WishlistModel from '@/components/wishlist/WishlistModel'
import React from 'react'

function Page() {
  return (
    <div className=' space-y-10 sm:space-y-20'>
      <Wishlist/>
      <WishlistModel/>
    </div>
  )
}

export default Page
