// CartContext.tsx
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

interface CartType {
    index: string;
    size: string;
    color: string;
    qty: string;
}

interface CartContextType {
    cart: CartType[];
    addToCart: (data: CartType) => void;
    removeFromCart: (item: CartType) => void;
}

interface CartProps {
    children: React.ReactElement;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: (_data: CartType) => { },
    removeFromCart: (_item: CartType) => { },
});
export default CartContext;

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<CartType[]>([]);

    const addToCart = useCallback((data: CartType) => {
        setCart((prev) => [...prev, data]);
    }, []);

    const removeFromCart = useCallback((itemToRemove: CartType) => {
        setCart((prev) =>
            prev.filter(
                (item) =>
                    item.index !== itemToRemove.index ||
                    item.size !== itemToRemove.size ||
                    item.color !== itemToRemove.color ||
                    item.qty !== itemToRemove.qty
            )
        );
    }, []);

    const value = useMemo<CartContextType>(
        () => ({ cart, addToCart, removeFromCart }),
        [cart, addToCart, removeFromCart]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
