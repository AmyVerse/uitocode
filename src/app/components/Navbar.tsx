"use client";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-transparent">
      {/* Left - Logo */}
      <div className="flex text-black items-center space-x-2">
        <Image
          src="/logo.png"
          alt="HotWheels Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-medium leading-relaxed font-[prompt] text-lg">
          HotWheels.io
        </span>
      </div>

      {/* Center - Navigation Links */}
      <div className="text-black flex space-x-16">
        {["Home", "Collection", "Customize", "About"].map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)} // Update active tab on click
            className={`relative text-md font-medium font-[prompt] cursor-pointer transition-all duration-300 ${
              activeTab === item ? "text-white" : "hover:text-orange-600"
            }`}
          >
            {item}
            <span
              className={`absolute bottom-[-4px] left-1/2 h-[2px] w-0 bg-orange-500 transition-all duration-300 ${
                activeTab === item
                  ? "w-full -translate-x-1/2"
                  : "w-0 -translate-x-1/2"
              }`}
            ></span>
          </div>
        ))}
      </div>

      {/* Right - Icons */}
      <div className="flex space-x-8">
        <Search
          className="w-5 h-5 cursor-pointer"
          onClick={() => console.log("Search clicked")}
        />
        <ShoppingCart
          className="w-5 h-5 cursor-pointer"
          onClick={() => console.log("ShoppingCart clicked")}
        />
        <User
          className="w-5 h-5 cursor-pointer"
          onClick={() => console.log("User clicked")}
        />
      </div>
    </nav>
  );
}
