import React from "react";
import { Link } from "react-router-dom";
import { cadToRupiah, formatNumberWithDots } from "../utils/formatNumber";

function ProductCard({ katalog }) {
  return (
    <Link
      to={`/products/details/${katalog.node.id.match(/\d+/)}`}
      key={katalog.node.id.match(/\d+/)}
      className="rounded-md group  cursor-pointer flex flex-col h-full items-between p-2"
    >
      <div className="flex justify-between">
        <div className="flex flex-col items-between h-full gap-2">
          <img
            className="group-hover:scale-[103%] duration-300 transition-all"
            src={katalog.node.featuredImage.url}
            alt=""
          />
          <div className="">
            <p className="text-sm font-Inter">{katalog.node.title}</p>
            <p className="font-semibold font-Inter">
              Rp
              {formatNumberWithDots(
                cadToRupiah(katalog.node?.variants.edges[0].node.price.amount)
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
