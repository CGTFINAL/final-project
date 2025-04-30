import { useState, useEffect } from "react";
import CountdownTimer from "../components/Countdown";
import Product from "../components/Product";
import productsData from "../products.json";

interface Product {
	id: number;
	name: string;
	date: string;
	image: string;
	time?:number;
}

const NewDrop = () => {

	const [closestProduct, setClosestProduct] = useState<Product | null>(null);

	const targetDates: Product[] = [
		{ id: 1, name: 'Product 1', date: '2025-05-01T01:01:01', image: '' },
		{ id: 2, name: 'Product 2', date: '2025-05-02T12:00:00', image: '' },
		{ id: 3, name: 'Product 3', date: '2025-05-03T23:59:59', image: '' },
	];
	 


	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			let closest: Product | null = null;

			targetDates.forEach((product) => {
				const productTime = new Date(product.date).getTime();
				if (productTime - now > 0 && (!closest || productTime < new Date(closest.date).getTime())) {
					closest = product;
				}
			});

			setClosestProduct(closest);
		}, 1000);
		
		return () => clearInterval(interval);
	}, []);

	return(
		<div>
			<h1>New Drops!</h1>
			<div style = {{ marginBottom: "20px" }}>
				{closestProduct && (
					<div style = {{ fontSize: "1.5em", color: "red" }}>
						<img
							src={closestProduct.image}
							alt={closestProduct.name}
						/>
						<strong>Closest Product: {closestProduct.name} </strong>
						<CountdownTimer targetDate = {closestProduct.date} />
					</div>
				)}
			</div>
			<div style={{display: 'flex', gap: '20px'}}>
				{targetDates
				// .filter((product) => !closestProduct || product.id !== closestProduct.id)
				.map((product) => (
					<div key = {product.id}>
						<img
							src={product.image}
							alt={product.name}
						/>
						<h3>{product.name}</h3>
						<CountdownTimer targetDate={product.date} />
					</div>
				))}
			</div>
		</div>
	);
};
// 	return (
// 		// <CountdownTimer targetDate={targetDate} />
// 	);
// }

export default NewDrop;
