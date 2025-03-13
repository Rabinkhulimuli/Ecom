import Link from 'next/link'
import Marquee from "react-fast-marquee"
function TopAds() {
  return (
    <div className='flex justify-end items-center px-8 h-12 md:px-33 bg-black text-white'>
      <div className='flex gap-2 sm:gap-6  lg:gap-57 items-center'>
        <div className='text-sm capitalize text-nowrap max-w-[270px] sm:max-w-[450px] flex items-center gap-2'>
            <Marquee speed={40}  pauseOnHover={true} > <p>summer sale for all swims suits and free express delivery -OFF 50%! <span className='w-4 px-1' ></span> </p></Marquee> <Link  href="/" className='underline text-xs sm:text-sm font-semibold'>shop now</Link>
        </div>
        <select className='text-xs md:text-sm outline-none' name="lang" id="lang">
            <option value="english">English</option>
        </select>
      </div>
    </div>
  )
}

export default TopAds
