import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { icons } from "../icons/Icons";
import "./CartPage.css";

function CartPage(props) {
	const { cart, setCart } = useContext(CartContext);
	console.log(cart);

	const handleIncrementBtn = async (item) => {
		const findItem = await cart.find((element) => element.id === item.id);
		if (findItem) {
			const updatedProduct = await cart?.map((product) =>
				product.id === item.id ? { ...product, qty: product.qty + 1 } : product
			);
			setCart(updatedProduct);
			localStorage.setItem("localCart", JSON.stringify(cart));
		}
	};

	const handleDecrementBtn = async (item) => {
		const findItem = await cart.find((element) => element.id === item.id);
		let updatedProduct;
		if (findItem.qty === 1) {
			updatedProduct = await cart.filter((product) => product.id !== item.id);
		} else {
			updatedProduct = await cart.map((product) =>
				product.id === item.id ? { ...product, qty: product.qty - 1 } : product
			);
		}
		setCart(updatedProduct);
		localStorage.setItem("localCart", JSON.stringify(cart));
	};

	const handleTotalAmaunt = () => {
		return cart.reduce((a, b) => a + b.price * b.qty, 0);
	};

	return (
		<div className="cart-page">
			{cart.length > 0 ? (
				<div>
					{cart?.map((product) => (
						<div>
							<div className="cart-item" key={product.id}>
								<div className="cart-item-image">
									<img src={product.image} alt="cart image" />
								</div>
								<div className="cart-item-details">
									<div className="cart-item-title">{product.title}</div>
									<div className="cart-items-price">
										{product.qty} X &#8377;
										{product.price} = &#8377;
										{product.qty * product.price}
									</div>
									<div className="cart-buttons">
										<button
											className="decrease-btn"
											onClick={() => handleDecrementBtn(product)}>
											{icons.RemoveIcon}
										</button>
										<button
											className="increase-btn"
											onClick={() => handleIncrementBtn(product)}>
											{icons.addIcon}
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="total-cart-price">
						<h3>Total Price : &#8377; {handleTotalAmaunt().toFixed(2)}</h3>
					</div>
				</div>
			) : (
				<div className="no-data-found">No Data Found!!</div>
			)}
		</div>
	);
}

export default CartPage;
