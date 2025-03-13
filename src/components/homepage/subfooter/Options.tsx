import React from 'react'
import OptionMod from './OptionMod'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaHeadset } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
function Options() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-around gap-1 lg:gap-22'>
      
      <OptionMod Icon={TbTruckDelivery} title={"Free And Fast Delivery"} desc={"Free delivery for all orders over $140"} />
    
      <OptionMod Icon={FaHeadset} title={"24/7 Customer service"} desc={"Friendly 24/7 customer support"} />
    
      <OptionMod Icon={MdOutlineSecurity} title={"Money back guarantee"} desc={"we return money within 30 days"} />
    
    </div>
  )
}

export default Options
