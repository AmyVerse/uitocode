"use client";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-transparent">
      {/* Left - Logo */}
      <div className="flex text-black items-center space-x-2">
        <Image
          src="/logo.webp"
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
            <span
              className={`absolute inset-0 rounded-lg bg-orange-500 h-20 w-full px-10 transition-all duration-300 ${
                activeTab === item
                  ? "opacity-100 scale-100 text-white"
                  : "opacity-0 scale-75"
              }`}
            ></span>
            <span
              className={`absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold uppercase text-orange-200 pointer-events-none ${
                activeTab === item ? "opacity-20" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {item}
            </span>
            {item}
          </div>
        ))}
      </div>

      {/* Right - Icons */}
      <div className="flex space-x-8 text-black">
        <Search
          className="w-7 h-7 font-bold cursor-pointer hover:text-orange-600 transition-all duration-300"
          onClick={() => console.log("Search clicked")}
        />
        <ShoppingCart
          className="w-7 h-7 font-bold cursor-pointer hover:text-orange-600 transition-all duration-300"
          onClick={() => console.log("ShoppingCart clicked")}
        />
        <User
          className="w-7 h-7 font-bold cursor-pointer hover:text-orange-600 transition-all duration-300"
          onClick={() => console.log("User clicked")}
        />
      </div>
    </nav>
  );
}
