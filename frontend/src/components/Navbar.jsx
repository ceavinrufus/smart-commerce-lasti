import React from "react";

function Navbar() {
  return (
    <div className="flex z-50 relative h-32 bg-white items-center justify-center">
      <div className="flex h-full max-w-[1240px] bg-white items-center w-full justify-between">
        <div className="h-full">
          <a href="/">
            <img src="/images/zoro.png" className="h-32" alt="" />
          </a>
        </div>
        <div className="flex gap-12 mr-12">
          <a href="/products" className="font-semibold text-black">
            Products
          </a>
          <a href="/financial" className="font-semibold text-black">
            Financial Recap
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
