import { useNavigate, useParams } from "react-router-dom";
import products from "../products.json";
import style from '../styles/product.module.css';
import Wrapper from "../components/Wrapper";
import OrderForm from "../components/OrderForm";

const ProductDetailPage = () => {
    const navigate = useNavigate();

    const { index } = useParams();
    
    function redirectIfUndefined<T>(x: T | undefined): asserts x is T {
        if (typeof x === "undefined") navigate('/');
    }
    redirectIfUndefined(index);
    const product = products[parseInt(index)];

    return (
        <Wrapper>
            <div className={style['product-detail']}>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <img src={product.img_src} />
            </div>
            <div className={style['product-order-form']}>
                <OrderForm index={index} options={product.options} />
            </div>
        </Wrapper>
    );
}
export default ProductDetailPage;
