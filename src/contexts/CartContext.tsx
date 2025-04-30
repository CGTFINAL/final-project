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
    addToCart: (data: any) => void;
    removeFromCart: (index: string) => void;
}

interface CartProps {
    children: React.ReactElement;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: (_data: any) => {},
    removeFromCart: (_index: string) => {},
});
export default CartContext;

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<CartType[]>([]);

    const addToCart = useCallback((data: any /* <-- I cheated :P */) => {
        setCart([
            ...cart,
            {
                index: data.index,
                size: data.size,
                color: data.color,
                qty: data.qty,
            },
        ]);
    }, []);

    // when the cart page gets added use this function and call it using the item's index
    // i am now realizing this will remove all instances of a product regardless of customization
    // to which i say for now: oh well ¯\_(ツ)_/¯   ( <--nothing more permanent than a temp solution )
    const removeFromCart = useCallback((index: string) => {
        setCart(cart.filter((c) => c.index !== index));
    }, []);

    const value = useMemo<CartContextType>(
        () => ({ cart, addToCart, removeFromCart }),
        [cart, addToCart, removeFromCart]
    );
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
