import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import ProductPage from "./Pages/ProductPage";
import Header from "./Components/Header";
import { CartProvider } from "./context/CartContext";
import CartPage from "./Pages/CartPage";

function App() {
	return (
		<div className="App">
			<CartProvider>
				<Header />
				<Routes>
					<Route path="/e-mart" element={<Home type="Home" />} />
					<Route path="/Products" element={<Products type="Products" />} />
					<Route path="/About" element={<About type="About" />} />
					<Route path="/Contact" element={<Contact type="Contact" />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path=":id" element={<ProductPage type="ProductPage" />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</CartProvider>
		</div>
	);
}

export default App;
