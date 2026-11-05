"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartPage() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        totalPrice
    } = useCart();

    return (
        <div className="min-h-screen bg-[#F8F5EF] py-12 px-4">
            <div className="max-w-6xl mx-auto">

                

                {cartItems.length === 0 ? (

                    <div className="text-center py-20">
                        <h2 className="text-2xl text-[#35251D] mb-4">
                            Your Cart is Empty
                        </h2>

                        <Link
                            href="/products"
                            className="inline-block bg-[#A67C3D] text-white px-6 py-3 rounded-lg no-underline"
                        >
                            Continue Shopping
                        </Link>
                    </div>

                ) : (

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2 space-y-5">

                            {cartItems.map((item: any) => (

                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5 shadow-sm"
                                >
                                    <img
                                        src={item.thumbnail || item.image}
                                        alt={item.title}
                                        className="w-28 h-28 object-contain"
                                    />

                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-[#35251D]">
                                            {item.title}
                                        </h2>

                                        <p className="text-[#A67C3D] font-bold">
                                            ${item.price}
                                        </p>

                                        <div className="flex items-center gap-4 mt-3">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                                className="border px-3 py-1 rounded text-[#A67C3D] hover:text-[#183C32] transition-colors duration-300"
                                            >
                                                -
                                            </button>

                                            <span className="text-[#A67C3D] font-bold">{item.quantity}</span>

                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="border px-3 py-1 rounded text-[#A67C3D] hover:text-[#183C32] transition-colors duration-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-bold text-[#A67C3D]">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-600 text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>

                            ))}

                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm h-fit">

                            <h2 className="text-xl font-bold text-[#35251D] mb-6">
                                Order Summary
                            </h2>

                            <div className="flex justify-between mb-4 text-[#A67C3D] font-bold">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between mb-4 text-[#A67C3D] font-bold">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <hr />

                            <div className="flex justify-between text-lg font-bold text-[#A67C3D] mt-4">
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                            <button className="w-full mt-6 bg-[#183C32] text-white py-3 rounded-lg">
                                Proceed to Checkout
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}