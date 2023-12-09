import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for a specific product
const mockProduct = {
  id: 1,
  name: 'Product 1',
  price: 100,
  stok: 10,
  // Add more product details as needed
};

const DetailBarangPage = () => {
  return (
    <div className="font-sans text-gray-900 antialiased w-full h-full bg-cover px-9 py-5" style={{backgroundImage: "url('./../images/bg.svg')"}}>
      <img src="/images/home.svg" alt="Home" className="" />
      <div className="flex justify-between gap-12 mt-6">
        <div className="flex flex-col items-center bg-stone-600 h-[800px] rounded-2xl py-4">
          <Link to="/" className="cursor-pointer"><img src="/images/katalog.svg" alt="Catalog" /></Link>
          <Link to="/history" className="cursor-pointer"><img src="/images/history.svg" alt="History" /></Link>
        </div>
        <div className="flex flex-col items-center gap-8 justify-center">
          <div className="bg-white w-96 h-[400px] rounded-2xl flex flex-col py-6 px-8">
            <div className="w-full h-64 bg-[#9C9C9C] rounded-xl mb-6"></div>
            <p className="font-extrabold text-[28px]">{mockProduct.name}</p>
            <div className="flex justify-between">
              <p>{mockProduct.price}</p>
              <p className="font-extrabold">{mockProduct.stok}</p>
            </div>
          </div>
          <Link to={`/detail/${mockProduct.id}/buy`} className="my-4 w-full py-3 rounded-full text-white bg-gradient-to-b from-pink-400 to-purple-400 hover:from-pink-300 hover:to-purple-300 text-lg md:text-xl xl:text-2xl font-semibold flex justify-center">
            Click Here to Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailBarangPage;
