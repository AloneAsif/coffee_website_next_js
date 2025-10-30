"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
// import { FaReact } from "react-icons/fa";

interface NavLink {
  href: string;
  label: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // 🧭 Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-md"
          : "bg-white/40 backdrop-blur-lg border-gray-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🌟 Logo */}

          <div className="flex-shrink-0 flex items-center ">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={closeMenu}
            >
              <div className="">
                {/* logo svg */}
                <Image
                  className=""
                  src="/logo.svg" // Path from public folder
                  alt="Website Logo"
                  width={100} // set width
                  height={100} // set height
                  priority // loads faster
                />
              </div>
              {/* <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                YourBrand
              </span> */}
            </Link>
          </div>

          {/* 🧭 Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-orange-600 bg-orange-100/70"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-100/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 🧩 Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Sign In
            </button> */}
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Link href={"/contact"}>Get Started</Link>
            </button>
          </div>

          {/* 📱 Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-800 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white backdrop-blur-xl border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-orange-600 bg-orange-100/70"
                  : "text-gray-800 hover:text-orange-600 hover:bg-orange-100/50"
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200/60">
            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-700 hover:to-orange-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link href={"/contact"}>Get Started Free</Link>
            </button>
          </div>
        </div>
      </div>

      {/* 🔲 Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
