import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function NewArrival() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await axios.request(
          "https://mock.shop/api?query=%7B%20products(first%3A%206%2C%20sortKey%3A%20CREATED_AT%2C%20reverse%3A%20true)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D"
        );
        setProducts(response.data.data.products.edges);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex min-w-full justify-center">
      <div className="max-w-[1240px]">
        <h1 className="font-DrunkWide text-4xl text-center">New Arrivals</h1>
        <div className="">
          {products.length !== 0 ? (
            <div className="grid grid-cols-3 gap-x-6 gap-y-6">
              {products.map((katalog) => (
                <ProductCard katalog={katalog} />
              ))}
            </div>
          ) : (
            <div className="flex w-full justify-center items-center">
              <h1 className="text-xl font-bold text-slate-800 text-center">
                Data tidak ada
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
