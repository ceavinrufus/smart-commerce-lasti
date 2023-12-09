import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const CatalogPage = () => {
  // Mock data for testing the component's layout
  const mockData = [
    { id: 1, name: 'Product 1', price: 100, stok: 10 },
    { id: 2, name: 'Product 2', price: 150, stok: 5 },
    // Add more mock data as needed
  ];

  return (
    <div className="font-sans text-gray-900 antialiased w-full h-full bg-cover px-9 py-5" style={{backgroundImage: "url('./images/bg.svg')"}}>
      <div className="flex items-center justify-between gap-12 mb-6">
        <img src="/images/home.svg" className="" alt="Home" />
        <form action="#" method="get">
          <input type="text" name="search" placeholder="Search" className="rounded-2xl bg-transparent w-96" />
        </form>
        <div>
          {/* Mocked authentication buttons */}
          <a href="/login" className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>
          <a href="/register" className="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col items-center bg-stone-600 h-[800px] rounded-2xl py-4">
          <Link to="/" className=""><img src="/images/katalog.svg" className="cursor-pointer" alt="Catalog" /></Link>
          <Link to="/history" className=""><img src="/images/history.svg" className="cursor-pointer" alt="History" /></Link>
        </div>
        {mockData.length !== 0 ? (
          <div className="grid grid-cols-6 gap-x-6 gap-y-0">
            {mockData.map((katalog) => (
            <Link to={`/detail/${katalog.id}`} key={katalog.id} className="w-36 h-36 bg-[#9C9C9C] rounded-xl hover:scale-105 cursor-pointer flex flex-col justify-end px-3 py-2">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="font-extrabold">{katalog.name}</p>
                        <p>Rp {katalog.price}</p>
                    </div>
                    <p className="font-extrabold">{katalog.stok}</p>
                </div>
            </Link>
        ))}
          </div>
        ) : (
          <div className="flex w-full justify-center items-center">
            <h1 className="text-xl font-bold text-slate-800 text-center">Data tidak ada</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
