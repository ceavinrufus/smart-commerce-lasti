import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginAdmin = (e) => {
    e.preventDefault();
    localStorage.setItem("loginAs", "admin");
    navigate("/");
  };
  const handleLoginCust = (e) => {
    e.preventDefault();
    localStorage.setItem("loginAs", "customer");
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-80 items-center justify-center font-Inter">
      <div className="max-w-[1240px] text-2xl">Login as</div>
      <div className="flex gap-4">
        <button
          onClick={handleLoginAdmin}
          className="font-Inter hover:underline duration-100 transition-all bg-black text-base border border-white text-white px-4 py-2"
        >
          Admin
        </button>
        <button
          onClick={handleLoginCust}
          className="font-Inter hover:underline duration-100 transition-all bg-black text-base border border-white text-white px-4 py-2"
        >
          Customer
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
