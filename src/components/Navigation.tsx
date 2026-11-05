"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartCount } = useCart();

  const links = [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between min-h-20">

 <Link
    href="/"
    passHref
    className="flex flex-col cursor-pointer no-underline leading-tight font-serif tracking-[3px]"
>
    <span className="text-2xl font-bold text-[#A67C3D]">
        URBAN
    </span>

    <span className="flex items-center gap-1 text-2xl font-bold text-[#A67C3D]">
        CART
        <ShoppingCart size={18} />
    </span>
</Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="!text-[#A67C3D] hover:!text-[#183C32] font-medium !no-underline transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart Icon and Mobile Menu */}
          <div className="flex items-center gap-4">

            {/* Cart Page with Live Count */}
            <Link
              href="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="relative !text-[#A67C3D] hover:!text-[#183C32] transition-colors duration-300"
            >
              <ShoppingCart size={25} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#183C32] text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#A67C3D] hover:text-[#183C32] p-2 transition-colors duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden absolute left-0 top-20 w-full bg-white shadow-lg flex flex-col gap-5 px-6 py-5 border-t border-gray-100">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="!text-[#A67C3D] hover:!text-[#183C32] font-medium !no-underline transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Cart Link */}
            <li>
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="!text-[#A67C3D] hover:!text-[#183C32] font-medium !no-underline flex items-center gap-2"
              >
                <ShoppingCart size={19} />
                Shopping Cart ({cartCount})
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navigation;