import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-screen">
      <div
        className="w-full h-5/6 flex justify-center items-end p-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/images/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          // Add any other necessary styles
        }}
      >
        <div className="max-w-[1000px] w-full space-y-8">
          <div className="space-y-2">
            <h1 className="text-white text-5xl font-DrunkWide leading-tight">
              Style Unleashed,
              <br /> Zoro.
            </h1>
            <p className="text-base text-white font-Inter">
              Elevate your style with our exclusive collection
            </p>
          </div>
          <button className="font-Inter hover:text-black hover:underline duration-100 transition-all hover:bg-white text-base border border-white text-white px-4 py-2">
            <Link to={"/products"} className="">
              Shop Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
