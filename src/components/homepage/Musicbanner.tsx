import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
function Musicbanner() {
  return (
    <div className='bg-black text-white py-19 px-14 drop-shadow-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center justify-between'>
      <div className='flex flex-col gap-8'>
        <p className='text-[#00ff66] font-semibold capitalize'>category</p>
        <p className='text-5xl font-semibold capitalize'>enhance your music experience</p>
        <div className='flex gap-6 items-center'>
            <div className='w-16 h-16 bg-white  rounded-full  flex items-center justify-center'>
                <p className='flex text-black leading-4 flex-col font-semibold items-center tracking-tight '>
                    <span>23</span>
                    <span>Days</span>
                </p>
            </div>
            <div className='w-16 h-16 bg-white  rounded-full  flex items-center justify-center'>
                <p className='flex text-black leading-4 flex-col font-semibold items-center tracking-tight '>
                    <span>23</span>
                    <span>Hours</span>
                </p>
            </div>
            <div className='w-16 h-16 bg-white  rounded-full  flex items-center justify-center'>
                <p className='flex text-black leading-4 flex-col font-semibold items-center tracking-tight '>
                    <span>23</span>
                    <span>minutes</span>
                </p>
            </div>
            <div className='w-16 h-16 bg-white  rounded-full  flex items-center justify-center'>
                <p className='flex text-black leading-4 flex-col font-semibold items-center tracking-tight '>
                    <span>23</span>
                    <span>second</span>
                </p>
            </div>
        </div>
        <motion.button
        whileTap={{scale:0.9}}
        whileHover={{scale:1.1}}
        className='px-12 py-4 w-fit bg-[#00ff66] rounded-md'>Buy Now!</motion.button>
      </div>
      <motion.div
      animate={{baseFrequency:0.2}}
      initial={{opacity:0}}
      whileTap={{scale:0.9}}
      whileInView={{opacity:1,transition:{
        delay:0.5,
        duration:0.8,
        type:'spring',
        bounce:0.8,
        damping:300,
        mass:0.5,
        
      }
    }}
      viewport={{amount:0.2}}
      className='relative max-w-[800px] max-h-[800px] bg-radial from-gray-500 -rotate-30 rounded-full p-4  to-black'>
      
        <Image
        className=' w-full h-full object-cover -rotate-8 '
        src="/homepage/category/music.png" alt="music player" width={1024} height={960} />
      </motion.div>
    </div>
  )
}

export default Musicbanner
