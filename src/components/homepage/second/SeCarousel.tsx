"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TiHeartOutline } from "react-icons/ti";
import Image from "next/image";
import AutoPlay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import { GiBleedingEye, GiStaryu } from "react-icons/gi";
import CarolTop from "./CarolTop";
import Link from "next/link";
import { useGetProductQuery } from "@/lib/product/productSlice";
import { allProductResponse } from "../../../../types/userType";

const SeCarousel = () => {
  const [alignCaro, setAlignCaro] = useState<"start" | "center">("start");
  const [isHovering, setIsHovering] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof AutoPlay> | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const {products = [], isLoading } = useGetProductQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      products: data?.data || [],
      nextCursor: data?.nextCursor,
      isLoading
    })
  });

  const autoplayOptions: AutoplayOptionsType = {
    stopOnInteraction: false,
    delay: 3000,
    
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: alignCaro, dragFree: false },
    [AutoPlay(autoplayOptions)]
  );

  useEffect(() => {
    if (emblaApi) {
      autoplayRef.current = emblaApi.plugins().autoplay;
    }
  }, [emblaApi]);

  const restartAutoplay = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      if (autoplayRef.current && !isHovering) {
        autoplayRef.current.play();
      }
    }, 6000);
  }, [isHovering]);

  const handleInteraction = useCallback(() => {
    if (autoplayRef.current) {
      autoplayRef.current.stop();
      restartAutoplay();
    }
  }, [restartAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("pointerDown", handleInteraction);
    emblaApi.on("select", handleInteraction);

    return () => {
      emblaApi.off("pointerDown", handleInteraction);
      emblaApi.off("select", handleInteraction);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [emblaApi, handleInteraction]);

  
  useEffect(() => {
    if (!autoplayRef.current) return;

    if (isHovering) {
      autoplayRef.current.stop();
    } else {
      autoplayRef.current.play();
    }
  }, [isHovering]);


  useEffect(() => {
    const updateAlignment = () => {
      setAlignCaro(window.innerWidth < 500 ? "center" : "start");
    };
    
    updateAlignment();
    window.addEventListener("resize", updateAlignment);
    return () => window.removeEventListener("resize", updateAlignment);
  }, []);

 /*  if (isLoading) return <div className="h-64 flex items-center justify-center">Loading products...</div>; */
  if (!isLoading&&products.length === 0) return <div className="h-64 flex items-center justify-center">No products available</div>;
console.log(products)
  return (
    <div className="space-y-4 md:space-y-15">
      <CarolTop emblaApi={emblaApi} />
      <div className="relative">
        <div
          className="overflow-hidden w-full"
          ref={emblaRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
         {isLoading? <div className="flex z-10">
          {Array.from({length:10}).map((_,index) => (
              <ProductCard key={index} product={null} />
            ))}
            
          </div>:
          <div className="flex z-10">
            {products.map((product: allProductResponse) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>}
        </div>
        <div className="flex items-center justify-center">
          <p className="category-btn mt-10 lg:mt-16">View All Products</p>
        </div>
      </div>
    </div>
  );
};

const ProductCard = React.memo(({ product,isLoading }: { product: allProductResponse|null,isLoading?:boolean }) => {
  const [imgError, setImgError] = useState(false);
  if(isLoading||!product){

    return (
      <div  className="border-white border-4 flex-shrink-0 min-w-67 group">
      <div className="relative flex py-10 min-w-67 h-62 overflow-hidden justify-center bg-gray-100">
        <div className="max-w-43 max-h-38">
          <Image
            className="w-full h-full object-cover"
            src={ "/nav/defaultimage.jpg" }
            width={1024}
            height={720}
            blurDataURL=""
            alt="loading"
            priority
            onError={() => setImgError(true)}
          />
        </div>
        <div className="absolute transition-transform duration-700 ease-in-out opacity-0 cursor-pointer font-semibold capitalize translate-y-10 group-hover:-translate-y-2 group-hover:opacity-100 bottom-0 bg-black w-full py-2 text-white text-center">
          Add to cart
        </div>
       
          <div className="absolute top-3 left-3 px-1 py-0.5 md:px-3 md:py-1 text-xs bg-[#DB4444] rounded-md text-white">
            <p>-0%</p>
          </div>
        
        <div className="absolute right-2 top-2 cursor-pointer md:top-3 md:right-3">
          <TiHeartOutline className="w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full mb-1 md:mb-2 z-10" />
          <GiBleedingEye className="w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full z-10" />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 font-semibold">
        <h2>loading...</h2>
        <div className="flex gap-2">
          <p>$0</p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <GiStaryu
              key={index}
              className={index <= 5? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-1">(0)</span>
        </div>
      </div>
    </div>
    )
  }
  const discountPrice = product.price - (product.price * product.discount) / 100;

  return (
    <Link href={`product/${product.id}`} className="border-white border-4 flex-shrink-0 min-w-67 group">
      <div className="relative flex py-10 min-w-67 h-62 overflow-hidden justify-center bg-gray-100">
        <div className="max-w-43 max-h-38">
          <Image
            className="w-full h-full object-cover"
            src={imgError ? "/nav/defaultimage.jpg" : product.images[0]?.path==""?"/nav/defaultimage.jpg":product.images[0]?.path}
            width={1024}
            height={720}
            blurDataURL=""
            alt={product.name}
            priority
            onError={() => setImgError(true)}
          />
        </div>
        <div className="absolute transition-transform duration-700 ease-in-out opacity-0 cursor-pointer font-semibold capitalize translate-y-10 group-hover:-translate-y-2 group-hover:opacity-100 bottom-0 bg-black w-full py-2 text-white text-center">
          Add to cart
        </div>
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 px-1 py-0.5 md:px-3 md:py-1 text-xs bg-[#DB4444] rounded-md text-white">
            <p>-{product.discount}%</p>
          </div>
        )}
        <div className="absolute right-2 top-2 cursor-pointer md:top-3 md:right-3">
          <TiHeartOutline className="w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full mb-1 md:mb-2 z-10" />
          <GiBleedingEye className="w-6 h-6 md:w-8 md:h-8 bg-white p-1 rounded-full z-10" />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 font-semibold">
        <h2>{product.name}</h2>
        <div className="flex gap-2">
          {product.discount > 0 && <p>${discountPrice.toFixed(2)}</p>}
          <p className={product.discount > 0 ? "line-through text-[#DB4444]" : ""}>
            ${product.price}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <GiStaryu
              key={index}
              className={index <= product.reviews[0]?.rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-1">({product.reviews[0]?.rating || 0})</span>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = "ProductCard";
export default React.memo(SeCarousel);