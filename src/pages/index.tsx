
import Link from "next/link";
import {
  Laptop,
  Shirt,
  Sparkles,
  House,
  ShoppingBasket,
  Smartphone,
} from "lucide-react";

import ProductCard from "./ProductCard";
import { ProductService } from "../srvices/services";

const categories = [
  { name: "Beauty", icon: Sparkles },
  { name: "Fashion", icon: Shirt },
  { name: "Furniture", icon: House },
  { name: "Groceries", icon: ShoppingBasket },
  { name: "Laptops", icon: Laptop },
  { name: "Mobile", icon: Smartphone },
];

export async function getServerSideProps() {
  try {
    const products = await ProductService.getProducts();

    return {
      props: {
        products: products || [],
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}

interface HomeProps {
  products: any[];
}

export default function Home({ products }: HomeProps) {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#F8F5EF]">

      {/* HERO BANNER */}
      <section
        className="relative min-h-[420px] md:min-h-[500px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(24, 60, 50, 0.85),
              rgba(24, 60, 50, 0.25)
            ),
            url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&auto=format&fit=crop')
          `,
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 py-20">
          <p className="text-[#D6B77B] uppercase tracking-[4px] text-sm mb-4">
            Welcome to URBAN CART
          </p>

          <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight mb-5">
            Everything You Love,
            <br />
            In One Place.
          </h1>

          <p className="text-gray-100 max-w-lg mb-8 leading-7">
            Discover amazing products and enjoy a simple
            and seamless shopping experience.
          </p>

          <Link
            href="/products"
            className="inline-block bg-[#D6B77B] !text-[#183C32] px-8 py-3 font-medium hover:bg-white transition duration-300 !rounded-xl !no-underline"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="text-center mb-9">
          <p className="text-[#A67C3D] uppercase tracking-[3px] text-xs mb-2">
            Explore
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-[#183C32]">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href="/products"
                key={category.name}
                className="bg-[#EEE6D8] !no-underline rounded-lg p-5 flex flex-col items-center justify-center gap-3 hover:bg-[#E2D4BD] hover:-translate-y-1 transition duration-300"
              >
                <Icon
                  size={34}
                  strokeWidth={1.5}
                  className="text-[#183C32]"
                />

                <span className="text-sm font-medium text-[#183C32]">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-[#A67C3D] uppercase tracking-[3px] text-xs mb-2">
              Our Collection
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-[#183C32]">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="!text-[#A67C3D] font-medium text-sm hover:!text-[#183C32] transition !no-underline"
          >
            View All →
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: any) => (
              <div
                key={product.id}
                className="[&_a]:!text-[#A67C3D] [&_a]:!no-underline [&_a:hover]:!text-[#183C32]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No products available.
          </p>
        )}

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block bg-[#183C32] !text-white px-8 py-3 hover:!bg-[#A67C3D] transition duration-300 !no-underline rounded-lg"
          >
            View All Products
          </Link>
        </div>
      </section>
    </main>
  );
}
