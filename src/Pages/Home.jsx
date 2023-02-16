import React from "react";
import Footer from "../Components/Footer";
import HeroImage from "../Components/HeroImage";
import ProductItems from "../Components/ProductItems";

function Home(props) {
	return (
		<div>
			<HeroImage />
			<ProductItems />
			<Footer />
		</div>
	);
}

export default Home;
