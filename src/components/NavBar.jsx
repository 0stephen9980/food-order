import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="max-w-[1600px] mx-auto flex justify-between items-center p-4">
      {/* Side bar menu */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>
      {/* Search */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="Search foods"
        />
      </div>
      {/* Cart */}
      <button className="bg-black text-white py-2 items-center hidden md:flex rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {navOpen ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : null}
      {/* Side Bar */}
      <div
        className={
          navOpen
            ? `fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300`
            : `fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300`
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
