

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: ReactNode }) {

    const [cartItems, setCartItems] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart items from localStorage
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem("urban-cart");

            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error("Error loading cart:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Save cart items whenever they change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(
                "urban-cart",
                JSON.stringify(cartItems)
            );
        }
    }, [cartItems, isLoaded]);

    // Add product to cart
    const addToCart = (product: any) => {

        setCartItems((prev) => {

            const existing = prev.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    // Remove product
    const removeFromCart = (id: number) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // Update quantity
    const updateQuantity = (id: number, quantity: number) => {

        if (quantity < 1) return;

        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Total cart quantity
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Total price
    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartCount,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}