import React from "react";
import { ShipIcon } from "lucide-react";
import { Backpack } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] bg-[#f5f5f5] flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-2xl text-center bg-gradient-to-br from-orange-500 to-amber-600 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-white">
          Student Tour package
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Exclusive{" "}
          <span className="bg-amber-400 text-gray-900 px-2 py-1 rounded-md">
            ₹9,999
          </span>{" "}
          Tour Packages for Schools & Colleges
        </h2>

        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-white text-orange-600 font-bold rounded-full animate-pulse">
            COMING SOON
          </div>
        </div>

        <p className="text-lg mb-8">
          We're crafting unforgettable experiences for students! Be the first to
          know when we launch these amazing educational tours.
        </p>

        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">5+</div>
            <div className="text-sm">Destinations</div>
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Support</div>
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">₹9,999</div>
            <div className="text-sm">Only for students</div>
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm">Safety</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
