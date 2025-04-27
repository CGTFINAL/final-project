import style from '../styles/product.module.css';
import products from '../products.json';

interface ProductProps {
    img_src: string;
    name: string;
    price: number;
}

const Product = ({ img_src, name, price }: ProductProps) => {
    return (
        <div className={style['product-card']}>
            <div className={style['product-card__img']}>
                <img src={img_src} />
            </div>
            <div className={style['product-card__content']}>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};



export default Product;
