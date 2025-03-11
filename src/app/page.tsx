import Leftfirst from "@/components/homepage/first/Leftfirst";
import Rightfirst from "@/components/homepage/first/Rightfirst";
import CarolTop from "@/components/homepage/second/CarolTop";
import SeCarousel from "@/components/homepage/second/SeCarousel";

export default function Home() {
  return (
    
    <div>
      <div
      className="flex py-10 h-fit "
      >
        <Leftfirst/>
        
        <Rightfirst/>
      </div>
      <div className="space-y-2">
        
      <CarolTop/>
      <SeCarousel/>
      </div>
    </div>
  );
}
