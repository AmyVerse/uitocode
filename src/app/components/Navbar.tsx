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
      <div className="text-black relative flex space-x-16">
        {["Home", "Collection", "Customize", "About"].map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}
            className="relative cursor-pointer"
          >
            <div
              className={`absolute -top-16 left-1/2 -translate-x-1/2 h-24 w-24 transition-all duration-300 ${
                activeTab === item
                  ? "bg-orange-500 px-10 rounded-b-lg shadow-lg"
                  : "opacity-0"
              }`}
            ></div>

            <div
              className={`relative z-10 text-center text-black font-medium font-[prompt] transition-all duration-300 ${
                activeTab === item
                  ? "text-white"
                  : "text-black hover:text-orange-600"
              }`}
            >
              {item}
            </div>
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
