
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import { ProductService } from "../../srvices/services";
import AddToCartButton from "../AddToCartButton";

export default function ProductDetails() {
    const router = useRouter();
    const { productId } = router.query;

    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!router.isReady || !productId) return;

        const id = Array.isArray(productId)
            ? productId[0]
            : productId;

        const fetchProduct = async () => {
            try {
                setLoading(true);

                const data = await ProductService.getProductById(
                    Number(id)
                );

                setProduct(data);
            } catch (error) {
                console.error("Product fetching error:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [router.isReady, productId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF]">
                <p className="text-[#A67C3D]">Loading product...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F5EF]">
                <h2 className="text-2xl text-[#35251D] mb-4">
                    Product Not Found
                </h2>
                <Link
                    href="/products"
                    className="text-[#A67C3D] no-underline"
                >
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F5EF] py-12 px-4">
            <div className="max-w-6xl mx-auto">

                <Link
                    href="/products"
                    className="inline-block mb-8 text-[#A67C3D] no-underline hover:text-[#35251D]"
                >
                    ← Back to Products
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-6 md:p-10 shadow-sm">

                    <div className="flex justify-center items-center bg-[#F8F5EF] rounded-xl p-8">
                        <img
                            src={product.thumbnail || product.image}
                            alt={product.title}
                            className="w-full max-w-sm h-80 object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-sm uppercase tracking-[3px] text-[#A67C3D] mb-3">
                            {product.category}
                        </p>

                        <h1 className="text-3xl md:text-4xl font-semibold text-[#35251D] mb-5">
                            {product.title}
                        </h1>

                        <p className="text-[#6B6259] leading-7 mb-6">
                            {product.description}
                        </p>

                        <p className="text-3xl font-bold text-[#A67C3D] mb-8">
                            ${product.price}
                        </p>

                        <AddToCartButton product={product} />
                    </div>

                </div>
            </div>
        </div>
    );
}
