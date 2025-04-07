"use client";
import { secProduct } from '@/config/carouselRight';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GiStaryu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

type Params = {
  id: number;
};
interface Product {
  id: number;
  discount: number;
  title: string;
  price: number;
  NumStar: number;
  totalStar: number;
  image: string;
}
function Product({ params }: { params: Params }) { // Removed Promise<Params>
  const router = useRouter();
  const [product, setProduct] = useState<Product|null>(null);
  const { id } = params; // Direct access (no Promise)

  useEffect(() => {
    // Validate ID and data before access
    if (typeof id === 'number' && secProduct && secProduct.length > id) {
      setProduct(secProduct[id]);
    } else {
      router.replace('/not-found'); // Invalid ID
    }
  }, [id, router]);

  if (!product) {
    return <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      Loading...
    </div>; // Unified loading state
  }

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center w-screen h-screen m-auto bg-black/50'>
      <div className='flex flex-col items-center justify-center w-fit h-fit p-4 px-8 bg-white/50 rounded-md backdrop-blur-3xl'>
        <div className='relative w-full py-4'>
          <RxCross2 
            onClick={() => router.back()} 
            className='absolute top-0 -right-5 w-7 h-7 text-white bg-red-700 rounded-full cursor-pointer'
          />
        </div>
        <div onClick={() => router.push(`/product/${id}`)}>
          <Image 
            src={product.image} 
            alt={product.title} 
            width={200} 
            height={200} 
            className='w-60 sm:w-80 rounded-md'
          />
        </div>
        <div className="flex flex-col w-full gap-2 px-4 mt-4 font-semibold rounded-md h-full backdrop-blur-2xl">
          <h2 className='overflow-x-clip'>{product.title}</h2>
          <div className="flex gap-2">
            {product.discount > 0 && (
              <p>${(product.price - (product.price * product.discount) / 100).toFixed(2)}</p>
            )}
            <p className={product.discount > 0 ? "line-through text-[#DB4444]" : ""}>
              ${product.price}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <GiStaryu
                key={index}
                className={index <= product.NumStar ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-1">({product.NumStar})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;