"use client";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
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
      <div className="hidden md:flex text-black relative space-x-16">
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
      <div className="flex items-center space-x-4 md:space-x-8 text-black">
        <Search className="w-5 h-5 md:w-7 md:h-7 font-bold cursor-pointer hover:text-orange-600 transition-all duration-300" />
        <ShoppingCart className="w-5 h-5 md:w-7 md:h-7 font-bold cursor-pointer hover:text-orange-600 transition-all duration-300" />
        <User className="hidden md:block w-5 h-5 md:w-7 md:h-7 font-bold cursor-pointer hover:text-orange-600 transition-all duration-300" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none md:hidden"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-24 right-4 w-1/2 rounded-2xl bg-white shadow-lg z-50 transform"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Collection", "Customize", "About", "My Account"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setIsMenuOpen(false);
                  }}
                  className={`cursor-pointer text-black font-medium font-[prompt] ${
                    activeTab === item
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
