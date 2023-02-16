import React from "react";
import "./HeroImage.css";

function HeroImage(props) {
	return (
		<div className="hero-image-section">
			<img src="https://i.pinimg.com/originals/fe/f4/bd/fef4bd312685b97de1caf4ed7b6fd867.jpg" />
			<div className="hero-image-text">
				<p className="hero-image-card-text">HOT 2022 COLLECTION</p>
				<h1 className="card-titel">
					Valentin Paul
					<br />
					Collection
				</h1>
				<p className="hero-image-card-text tagLine">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit...
				</p>
			</div>
		</div>
	);
}

export default HeroImage;
