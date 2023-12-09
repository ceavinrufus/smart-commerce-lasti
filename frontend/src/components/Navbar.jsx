import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("loginAs");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginAs");
    navigate(0);
  };

  return (
    <div className="flex z-50 relative h-32 bg-white items-center justify-center">
      <div className="flex h-full max-w-[1240px] bg-white items-center w-full justify-between">
        <div className="h-full">
          <a href="/">
            <img src="/images/zoro.png" className="h-32" alt="" />
          </a>
        </div>
        <div className="flex gap-12 items-center">
          {role === "customer" && (
            <a href="/products" className="font-semibold text-black">
              Products
            </a>
          )}
          {role === "admin" && (
            <a href="/financial" className="font-semibold text-black">
              Financial Recap
            </a>
          )}
          <div className="">
            {role ? (
              <button
                onClick={handleLogout}
                className="font-Inter hover:underline duration-100 transition-all text-base border bg-black text-white px-6 py-2"
              >
                Logout
              </button>
            ) : (
              <button className="font-Inter hover:underline duration-100 transition-all text-base border bg-black text-white px-6 py-2">
                <Link to={"/login"} className="">
                  Login
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
