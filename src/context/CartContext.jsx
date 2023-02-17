import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);

	// const state = {
	// 	cart: localCartData(),
	// };

	// localStorage.setItem("localCart", JSON.stringify(cart));
	// }, [cart]
	useEffect(() => {
		let localCart = localStorage.getItem("localCart");
		// console.log("....localCart...", localCart);
		if (localCart == null) {
			setCart([]);
		} else {
			setCart(JSON.parse(localCart));
		}
	}, []);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{props.children}
		</CartContext.Provider>
	);
};
