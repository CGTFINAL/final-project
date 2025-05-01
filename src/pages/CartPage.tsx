// CartPage.tsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import styles from '../styles/cart.module.css';
import products from '../products.json';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Cart</h1>

      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, i) => {
            const product = products[parseInt(item.index)];
            return (
              <div
                key={`${item.index}-${item.size}-${item.color}-${item.qty}-${i}`}
                className={styles.item}
              >
                <div className={styles.details}>
                  <p><strong>{product.name}</strong></p>
                  {product?.img_src && (
                    <img
                      src={product.img_src}
                      alt="Product image"
                      style={{ width: '150px', height: 'auto' }}
                    />
                  )}
                  {item.size && (
                    <p><strong>Size:</strong> {item.size}</p>
                  )}
                  {item.color && (
                    <p><strong>Color:</strong> {item.color}</p>
                  )}
                  {item.qty && (
                    <p><strong>Quantity:</strong> {item.qty}</p>
                  )}
                </div>

                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartPage;
