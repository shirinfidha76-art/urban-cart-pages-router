
import React from "react";
import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Footer() {
  const linkStyle =
    "!text-white hover:!text-[#A67C3D] !no-underline transition-colors duration-300";

  const iconStyle =
    "text-white hover:text-[#A67C3D] transition-colors duration-300";

  return (
    <footer className="bg-[#183C32] text-white pt-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-serif tracking-wider text-[#A67C3D]">
              URBAN
              <br />
              CART
            </h2>

            <p className="text-gray-300 text-sm leading-7 mt-5">
              Discover everything you need in one place.
              Explore quality products across multiple
              categories and enjoy a seamless shopping
              experience with Urban Cart.
            </p>

            {/* Social Media */}
            <div className="flex gap-5 mt-6">

              <Link
                href="#"
                aria-label="Instagram"
                className={iconStyle}
              >
                <FaInstagram size={21} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className={iconStyle}
              >
                <FaFacebookF size={21} />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className={iconStyle}
              >
                <FaTwitter size={21} />
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-[#A67C3D] mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link href="/" className={linkStyle}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className={linkStyle}>
                  Products
                </Link>
              </li>

              <li>
                <Link href="/about" className={linkStyle}>
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className={linkStyle}>
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/cart" className={linkStyle}>
                  My Cart
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-serif text-[#A67C3D] mb-6">
              Customer Care
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link href="#" className={linkStyle}>
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link href="#" className={linkStyle}>
                  Return Policy
                </Link>
              </li>

              <li>
                <Link href="#" className={linkStyle}>
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className={linkStyle}>
                  FAQs
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-serif text-[#A67C3D] mb-6">
              Get In Touch
            </h3>

            <ul className="space-y-5 text-sm text-white">

              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-white shrink-0 hover:text-[#A67C3D]"
                />
                <span>support@urbancart.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-white shrink-0 hover:text-[#A67C3D]"
                />
                <span>+91 XXXXX XXXXX</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-white shrink-0 hover:text-[#A67C3D]"
                />
                <span>India</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-10 text-center">

          <h3 className="text-2xl font-serif text-[#A67C3D]">
            Join the Urban Cart Family
          </h3>

          <p className="text-sm text-gray-300 mt-3 mb-6">
            Subscribe to receive updates about new arrivals,
            trending products and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 min-w-0 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-[#A67C3D]"
            />

            <button
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3 !rounded-full bg-[#A67C3D] text-white  hover:text-[#183C32] transition"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-300">

          <p>
            © {new Date().getFullYear()} URBAN CART. All Rights Reserved.
          </p>

          <p>
            Shop Smart. Live Better.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
