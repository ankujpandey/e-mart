import React from "react";
import Footer from "../Components/Footer";
import "./Contact.css";

function Contact(props) {
	return (
		<div>
			<div className="contact">
				<h1>Contact</h1>
				<div className="contact-form">
					<form>
						<label htmlFor="name">Full Name: </label>
						<br />
						<input type="text" id="name" name="name" />
						<br />
						<label htmlFor="reason">Reason: </label>
						<br />
						<input type="text" id="reason" name="reason" />
						<br />
						<label htmlFor="message">Write your message here..</label>
						<br />
						<textarea name="message" id="message" cols="30" rows="5"></textarea>
						<br />
						<center>
							<input type="submit" value="Submit" className="submit-btn" />
						</center>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
