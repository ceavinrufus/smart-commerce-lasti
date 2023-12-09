import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await axios.request(
          "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
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
    <div className="font-sans bg-[#F3F3F3] antialiased flex justify-center w-full h-full bg-cover py-5">
      {!loading ? (
        <div className="flex p-16 flex-col gap-12 max-w-[1240px]">
          {/* Katalog */}
          <h1 className="text-3xl font-bold font-DrunkWide text-center">
            Products
          </h1>
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
      ) : (
        <div class="loader"></div>
      )}
    </div>
  );
};

export default CatalogPage;
