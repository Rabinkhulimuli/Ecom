import React, { SetStateAction } from "react";
import { BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { LogOutUser } from "@/lib/getUser";
import { clearUser } from "@/lib/user/userSlice";

function ProfileDropdown({
  setActive,
}: {
  setActive: React.Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const handleDropdown = () => {
    setActive(false);
  };
  const handleLogout = () => {
    LogOutUser();
    dispatch(clearUser());
    handleDropdown();
  };
  return (
    <div className="flex flex-col gap-3 px-5 py-4 w-fit bg-gray-600 text-white rounded-md from-black to-gray-900 backdrop-blur-3xl ">
      <div onClick={handleDropdown} className="flex items-center gap-4 py-1 transition-all duration-700 cursor-pointer font-semibold hover:translate-x-4 px-3 rounded-xs hover:text-gray-900 ease-in-out  hover:bg-gray-200  ">
        <BiUser className="w-8 h-8" />
        <p className="text-lg text-nowrap capitalize font-semibold">
          manage my account
        </p>
      </div>
      <div onClick={handleDropdown} className="flex items-center gap-4 py-1 transition-all duration-700 cursor-pointer font-semibold hover:translate-x-4 px-3 rounded-xs hover:text-gray-900 ease-in-out  hover:bg-gray-200">
        <FiShoppingBag className="w-8 h-8" />
        <p className="text-lg text-nowrap capitalize font-semibold">my order</p>
      </div>
      <div onClick={handleDropdown} className="flex items-center gap-4 py-1 transition-all duration-700 cursor-pointer font-semibold hover:translate-x-4 px-3 rounded-xs hover:text-gray-900 ease-in-out  hover:bg-gray-200">
        <MdOutlineCancel className="w-8 h-8" />
        <p className="text-lg text-nowrap capitalize font-semibold">
          my cancellation
        </p>
      </div>
      <div onClick={handleDropdown} className="flex items-center gap-4 py-1 transition-all duration-700 cursor-pointer font-semibold hover:translate-x-4 px-3 rounded-xs hover:text-gray-900 ease-in-out  hover:bg-gray-200">
        <IoStarOutline className="w-8 h-8" />
        <p className="text-lg text-nowrap capitalize font-semibold">
          my reviews
        </p>
      </div>
      <div className="flex items-center gap-4 py-1 transition-all duration-700 cursor-pointer font-semibold hover:translate-x-4 px-3 rounded-xs hover:text-gray-900 ease-in-out  hover:bg-gray-200">
        <TbLogout2 className="w-8 h-8" />
        <p
          className="text-lg text-nowrap capitalize font-semibold"
          onClick={handleLogout}
        >
          logout
        </p>
      </div>
    </div>
  );
}

export default ProfileDropdown;
