import React, { useState, useEffect } from "react";
import CountdownTimer from "../components/Countdown";
import Product from "../components/Product";
import products from "../products.json";
import style from "../styles/newdrop.module.css";

interface Product {
    id: number;
    name: string;
    price: number;
    img_src: string;
    release_date: string;
    options: {
        size: boolean;
        color: boolean;
    };
}

const NewDrop: React.FC = () => {
    const [upcomingProducts, setUpcomingProducts] = useState<Product[]>([]);

    useEffect(() => {
        const filteredProducts = products.filter(product => {
            const releaseTime = new Date(product.release_date).getTime();
            return releaseTime > Date.now(); // Filter for future release dates
        });

        setUpcomingProducts(filteredProducts);
    }, []);

    return (
        <div className = {style.newDropPage}>
            <h1 className = {style.title}>Upcoming Releases</h1>
            <div className = {style.closestProduct}>
                {upcomingProducts.length > 0 && (
                    <>
						<img
							src = {upcomingProducts[0].img_src}
							alt = {upcomingProducts[0].name}
							className = {style.closestProductImage}
							/>
                        <strong>Closest Product: {upcomingProducts[0].name}</strong>
                        <CountdownTimer targetDate={upcomingProducts[0].release_date} />
                    </>
                )}
            </div>

            <div className={style.productList}>
                {upcomingProducts.map(product => (
                    <div key={product.id} className={style.productCard}>
                        <Product
                            img_src={product.img_src}
                            name={product.name}
                            price={product.price}
                        />
                        <CountdownTimer targetDate={product.release_date} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewDrop;
