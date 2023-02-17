import React, { useContext } from "react";
import "./Header.css";
import { icons } from "../icons/Icons";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header(props) {
	const { cart } = useContext(CartContext);
	return (
		<div className="header-section">
			<div className="header-logo-section">
				<h2>E-MART</h2>
			</div>
			<div className="header-nav-section">
				<ul>
					<li>
						<NavLink to="/e-mart">Home</NavLink>
					</li>
					<li>
						<NavLink to="/Products">Products</NavLink>
					</li>
					<li>
						<NavLink to="/About">About Us</NavLink>
					</li>
					<li>
						<NavLink to="/Contact">Contact</NavLink>
					</li>
				</ul>
			</div>
			<div className="header-signup-section">
				<button className="header-button">
					{icons.loginIcon}
					Login
				</button>
				<button className="header-button">
					{icons.registerIcon}
					Register
				</button>
				<Link to="/cart">
					<button className="header-button">
						{icons.shopingCart}
						Cart({cart ? cart.length : 0})
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
