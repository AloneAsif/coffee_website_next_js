"use client";

import Link from "next/link";
import { Coffee, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#4e342e] to-[#1b1a17] text-white px-6">
      {/* ☕ Icon or Image */}

      {/* 🔢 404 Title */}
      <h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-2">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-4">{`Oops! Coffee's Gone Cold ☕`}</h2>

      {/* 📝 Description */}
      <p className="text-gray-300 text-center max-w-md mb-8 leading-relaxed">
        {`Looks like you've wandered off the brew path.  
        The page you're looking for might have been moved or doesn't exist anymore.`}
      </p>

      {/* 🔘 Buttons */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Home size={20} />
          Back to Home
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-2 border border-orange-400 hover:bg-orange-500/20 text-orange-300 px-6 py-3 rounded-xl font-medium transition-all duration-300"
        >
          <Coffee size={20} />
          Contact Us
        </Link>
      </div>

      {/* ✨ Extra */}
      <div className="mt-10 text-sm text-gray-400 italic">
        {`“Even the best baristas spill a little sometimes.”`}
      </div>
    </div>
  );
}
