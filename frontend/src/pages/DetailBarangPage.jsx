import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { formatNumberWithDots } from "../utils/formatNumber";

const DetailBarangPage = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await axios.request(
          `https://mock.shop/api?query=%7B%20product(id%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F${id}%22)%20%7B%20title%20handle%20description%20id%20images(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20url%20%7D%20%7D%20%7D%20variants(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%7D`
        );
        setProduct(response.data.data.product);
      } catch (error) {
        console.error("Error fetching diaries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    try {
      axios.post(process.env.REACT_APP_BASE_URL + "/transaction", {
        type: "incoming",
        transaction_from: "customer",
        description: product?.title,
        amount: product?.variants.edges[0].node.price.amount * 11456,
        date: formattedDate,
      });
      alert("Payment Success");
    } catch (error) {
      console.error("Error post data:", error);
    }
  };

  return (
    <div className="bg-[#F3F3F3] font-sans antialiased w-full h-screen">
      <div className="flex items-center w-full h-full justify-between">
        <div className="bg-[#000] text-white h-full w-1/2">
          <div className="p-20 gap-10 flex flex-col justify-center h-full">
            <div className="">
              <p className="font-extrabold text-[28px]">{product?.title}</p>
              <p className="">{product?.description}</p>
              <p className="text-xl mt-6">
                Rp
                {formatNumberWithDots(
                  product?.variants.edges[0].node.price.amount * 11456
                )}
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="px-2 py-1 bg-white hover:bg-gray-400 transition duration-100 text-black text-lg flex justify-center"
            >
              Buy
            </button>
          </div>
        </div>
        <div className="h-full flex justify-center items-center w-1/2">
          <div className="bg-black w-3/5">
            <img src={product?.images.edges[0].node.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBarangPage;
