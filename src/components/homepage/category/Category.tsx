import React from 'react'
import CategoryCaro from './CategoryCaro'

function Category() {
  return (
    <div>
      <div className='space-y-4 md:space-y-15'>
      <div className="flex flex-col gap-2 lg:gap-6">
        <div className="flex items-center gap-2">
          <span
          className=" w-2 md:w-5  h-8 md:h-10 bg-[#DB4444] "
          ></span>
          <span
          className="font-semibold text-[#DB4444]"
          >Categories</span>
        </div>
        <p className="text-xl md:text-4xl font-semibold">Browse By Category</p>
      </div>
      <div>
        <CategoryCaro/>
      </div>
      </div>
    </div>
  )
}

export default Category
