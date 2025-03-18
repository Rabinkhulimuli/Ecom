import ProductDescription from '@/components/product/productdetails/ProductDescription'
import ProductImage from '@/components/product/productdetails/ProductImage'
import RelatedProduct from '@/components/product/productdetails/RelatedProduct'
import React from 'react'

function Page() {
  return (
    <div className='flex flex-col gap-18'>
     <div className='flex flex-col xl:flex-row justify-between gap-10 md:gap-18'>
     <ProductImage/>
     <ProductDescription/>
     </div>
      <RelatedProduct/>
    </div>
  )
}

export default Page
