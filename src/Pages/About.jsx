import React from "react";
import Footer from "../Components/Footer";
import "./About.css";

function About(props) {
	return (
		<div>
			<div className="about">
				<h1 className="about-us-headline">About Us</h1>

				<div className="about-details">
					<div className="about-txt-section">
						<div className="about-txt">
							Hello There!
							<br />
							This whole website is made by Ankuj
							<br />
							You can contact him at..
							<br />
							<a href="ankuj.mca20.du@gmail.com">ankuj.mca20.du@gmail.com</a>
						</div>
					</div>
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/gujarati-man-is-sitting-on-chair-and-reading-a-book-2775555-2319275.png"
						alt="welcome Image"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
