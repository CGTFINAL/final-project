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
    
    const [data, setData] = useState({ size: '', color: '', qty: 0 });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        formData.append('index', index);
        formData.append('size', data.size);
        formData.append('color', data.color);
        formData.append('qty', data.qty.toString());
        console.log(`FormData Object:\n${formData}`);

        addToCart(formData);
        setData({ size: '', color: '', qty: 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Customization:</legend>
                {options.size && (
                    <>
                        <label htmlFor='size'>Size:</label>
                        <select
                            id='size'
                            name='size'
                            onChange={handleChange}
                        >
                            <option value='' selected={data.size===''}>---</option>
                            <option value='S' selected={data.size==='S'}>S</option>
                            <option value='M' selected={data.size==='M'}>M</option>
                            <option value='L' selected={data.size==='L'}>L</option>
                            <option value='XL' selected={data.size==='XL'}>XL</option>
                        </select>
                    </>
                )}
                {options.color && (
                    <>
                        <label htmlFor='color'>Color:</label>
                        <select
                            id='color'
                            name='color'
                            onChange={handleChange}
                        >
                            <option value='' selected={data.color===''}>---</option>
                            <option value='Black' selected={data.color==='Black'}>Black</option>
                            <option value='White' selected={data.color==='White'}>White</option>
                            <option value='Grey' selected={data.color==='Grey'}>Grey</option>
                            <option value='Blue' selected={data.color==='Blue'}>Blue</option>
                        </select>
                    </>
                )}
                <input
                    id='qty'
                    name='qty'
                    type='number'
                    min={0}
                    max={255}
                    step={1}
                    value={data.qty}
                    onChange={handleChange}
                />
                <button
                    type='submit'
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
