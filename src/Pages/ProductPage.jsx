import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { icons } from "../icons/Icons";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import { CartContext } from "../context/CartContext";

function ProductPage(props) {
	let { id } = useParams();
	const [product, setProduct] = useState(null);
	const { cart, setCart } = useContext(CartContext);

	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
			setProduct(response.data);
		});
	}, []);

	// console.log(cart);

	const handleAddCart = async (item) => {
		const findItem = await cart.find((element) => element.id === item.id);
		if (!findItem) {
			const update = [...cart, { ...item, qty: 1 }];
			await setCart([...cart, { ...item, qty: 1 }]);
			localStorage.setItem("localCart", JSON.stringify(update));
			// console.log("This is cart ---", item);
		} else {
			alert("Already in Cart!");
		}
	};

	if (!product) {
		return (
			<div>
				<p className="loading">Loading...</p>;
			</div>
		);
	}
	return (
		<div>
			<div className="produc-details-page">
				<div className="product-img">
					<img src={product.image} alt="product Image" />
				</div>
				<div className="about-product">
					<p className="product-category">{product.category}</p>
					<h1 className="item-title">{product.title}</h1>
					<h4 className="product-ratings">
						{icons.starIcon}
						{product.rating.rate}/5
						{icons.peopleIcon}
						{product.rating.count}
					</h4>
					<h1 className="product-prices">
						{icons.rupeeIcon}
						{product.price}
					</h1>
					<p>{product.description}</p>

					<button
						className="add-to-cart"
						onClick={() => handleAddCart(product)}>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
