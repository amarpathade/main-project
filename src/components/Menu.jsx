

import { useState } from "react";
import { Menu, X } from "lucide-react";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed top-4 right-4">
      <button
        onClick={toggleMenu}
        className="p-2 backdrop-blur text-black rounded-2xl shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/Home">Home</a> </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/About">About</a></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/EFarmingServices">Services</a> </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/FarmersDashboard">Dashboard</a></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/SellingPage">Agro connect</a></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="EnquiryForm">contact</a></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/Profile">Profile</a></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="/">Log Out</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
