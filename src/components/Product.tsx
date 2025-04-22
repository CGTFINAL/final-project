import style from '../styles/product.module.css';

interface ProductProps {
    img_src: string;
    name: string;
    price: number;
}

const Product = ({img_src, name, price}:ProductProps) => {
    return (
        <div className={style['product-card']}>
            <img src={img_src} />
            <p>{name}</p>
            <p>{price}</p>
            
        </div>
    );
}

export default Product;