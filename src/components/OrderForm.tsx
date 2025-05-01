import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface OrderFormTypes {
  index: string;
  options: {
    size: boolean;
    color: boolean;
  };
}

const OrderForm = ({ index, options }: OrderFormTypes) => {
  const { addToCart } = useCart();

  const [data, setData] = useState({
    size: '',
    color: '',
    qty: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: name === 'qty' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newItem = {
      index,
      size: data.size,
      color: data.color,
      qty: data.qty.toString(), // match CartType structure
    };

    console.log('Adding to cart:', newItem);
    addToCart(newItem);
    setData({ size: '', color: '', qty: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Customization:</legend>

        {options.size && (
          <>
            <label htmlFor="size">Size:</label>
            <select
              id="size"
              name="size"
              value={data.size}
              onChange={handleChange}
            >
              <option value="">---</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </>
        )}

        {options.color && (
          <>
            <label htmlFor="color">Color:</label>
            <select
              id="color"
              name="color"
              value={data.color}
              onChange={handleChange}
            >
              <option value="">---</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Grey">Grey</option>
              <option value="Blue">Blue</option>
            </select>
          </>
        )}

        <label htmlFor="qty">Quantity:</label>
        <input
          id="qty"
          name="qty"
          type="number"
          min={1}
          max={255}
          step={1}
          value={data.qty}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button
          type="submit"
          disabled={
            (options.size && data.size.trim() === '') ||
            (options.color && data.color.trim() === '') ||
            data.qty === 0
          }
        >
          Add to Cart
        </button>
      </fieldset>
    </form>
  );
};

export default OrderForm;
