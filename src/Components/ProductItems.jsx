import React, { useEffect, useState } from "react";
import { icons } from "../icons/Icons";
import "./ProductItems.css";
import { Link } from "react-router-dom";

function ProductItems(props) {
	const [items, setItems] = useState();

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((res) => setItems(res));
	}, []);

	console.log("items----", items);

	if (!items) {
		return <h1 className="loading">Loading...</h1>;
	}
	return (
		<div className="products-container">
			<div>
				<h1 className="product-headline">Latest Products</h1>
			</div>
			<div className="container">
				<div className="product-column">
					{items?.map((product, index) => {
						return (
							<div key={index} className="product-item">
								<div className="product-image">
									<img src={product.image} />
								</div>
								<div className="product-item-text-section">
									<div className="product-title">{product.title}</div>
									<div className="products-ratings">
										{icons.starIcon}
										{product.rating.rate}/5
										{icons.peopleIcon}
										{product.rating.count}
									</div>
									<div className="product-price">
										{icons.rupeeIcon}
										{product.price}
									</div>

									<Link to={`/${product.id}`}>
										<button className="buy-btn">Buy Now</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProductItems;
