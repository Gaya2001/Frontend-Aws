import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white justify-between items-center h-20 max--w-[1240px] mx-auto px-4  flex  bg-black">
      <h1 className=" text-4xl font-bold text-[#00df9a]  ">REACT. </h1>

      <ul className="hidden md:flex ">
        <li className="p-4 mx-2 font-bold bg-green-700 rounded-md ">
          <Link to="/"> HOME </Link>
        </li>

        <li className="p-4 mx-2 font-bold bg-green-700 rounded-md ">
          <Link to="/AddUser"> ADD USER </Link>
        </li>
        <li className="p-4 mx-2 font-bold bg-green-700 rounded-md ">
          <Link to="/UserDetails"> USER DETAILS </Link>
        </li>

        <li className="p-4 mx-2 font-bold bg-green-700 rounded-md ">
          <Link to="/Contact"> CONTACT </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">ADD USER</li>
          <li className="p-4 border-b border-gray-600">USER DETAILS</li>
          <li className="p-4 border-b border-gray-600">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
