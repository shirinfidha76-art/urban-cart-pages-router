
"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function ProductCard(props: any) {
  const prod = props.product;
  const { addToCart } = useCart();

  return (
    <div className="h-full w-full rounded-xl bg-white p-4 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <div className="flex justify-center items-center h-48 bg-[#F8F5EF] rounded-lg">
        <img
          src={prod.thumbnail}
          className="w-[150px] h-[150px] object-contain"
          alt={prod.title}
        />
      </div>

      {/* Product Details */}
      <div className="text-center mt-4">
        <h6 className="font-semibold text-[#A67C3D] hover:text-[#35251D] line-clamp-2 min-h-[48px]">
          {prod.title}
        </h6>

        <p className="font-bold text-[#35251D] mt-3 mb-4">
          ${prod.price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">

        <Link
          href={`/products/${prod.id}`}
          className="block text-center border border-[#A67C3D] text-[#A67C3D] py-2 rounded-lg no-underline hover:bg-[#A67C3D] hover:!text-white transition duration-300"
        >
          View Details
        </Link>

        <button
          onClick={() => addToCart(prod)}
          className="w-full bg-[#183C32] text-white py-2 rounded-lg hover:bg-[#A67C3D] transition duration-300"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}
