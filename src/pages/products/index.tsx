
import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";
import { ProductService } from "../../srvices/services";

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF]">
                <p className="text-[#A67C3D] text-lg">
                    Loading products...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F5EF] py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[4px] text-[#A67C3D] font-semibold mb-3">
                        DISCOVER OUR COLLECTION
                    </p>

                   

                    <div className="w-20 h-[2px] bg-[#A67C3D] mx-auto mt-6"></div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((p: any) => (
                        <div
                            key={p.id}
                            className="
                                [&_h2]:!text-[#A67C3D]
                                [&_h2]:hover:!text-[#35251D]
                                [&_a]:!text-[#A67C3D]
                                [&_a]:!no-underline
                                [&_p]:!text-[#A67C3D]
                            "
                        >
                            <ProductCard product={p} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
