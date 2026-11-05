"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }: any) {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        console.log("Product received:", product);

        addToCart(product);

        alert("Product added successfully!");
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-[#A67C3D] hover:bg-[#183C32] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
        >
            Add to Cart
        </button>
    );
}