import ProductList from "@/components/homepage/bestSellingProduct/ProductList";
import Category from "@/components/homepage/category/Category";
import Feature from "@/components/homepage/feature/Feature";
import Leftfirst from "@/components/homepage/first/Leftfirst";
import Rightfirst from "@/components/homepage/first/Rightfirst";
import Musicbanner from "@/components/homepage/Musicbanner";
import Ourproduct from "@/components/homepage/product/Ourproduct";
import CarolTop from "@/components/homepage/second/CarolTop";
import SeCarousel from "@/components/homepage/second/SeCarousel";
import Options from "@/components/homepage/subfooter/Options";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export const metadata: Metadata = {
  title: "Xprive.com",
  description: "Best luxury shop where items are made in  hell",
  keywords: "Luxury xprive xeron e-commerse-Website expensive",
};
export default function Home() {
  useEffect(()=> {
    const ulrPara= useSearchParams()
    if(ulrPara.get('message')==="successfullyloggedin"){

    }
  })
  return (
    <div className="space-y-14 md:space-y-35">
      <div className="flex h-fit ">
        <div className="hidden lg:flex justify-center items-center border-r-2 pr-4">
          <Leftfirst />
        </div>

        <Rightfirst />
      </div>
      <div className="space-y-4 md:space-y-15">
        <CarolTop />
        <SeCarousel />
      </div>
      <Category />
      <ProductList />
      <Musicbanner />
      <Ourproduct />
      <Feature />
      <Options />
    </div>
  );
}
