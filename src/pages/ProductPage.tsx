import Product from "../components/Product";
import products from "../products.json";
import style from "../styles/productpage.module.css";

const ProductPage = () => {
    return(
        <div className = {style.productPage}>
            <h1 className = {style.title}>Products</h1>
            <div className = {style.productList}>
                {products.map((product, index) => (
                    <Product
                        key={index}
                        img_src={product.img_src}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductPage;