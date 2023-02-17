import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound(props) {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Page Not Found</h1>
			<p>Sorry! the page you're looking for is not found!!</p>
			<button
				style={{ backgroundColor: "blue" }}
				onClick={() => navigate("/e-mart")}>
				Back to Home
			</button>
		</div>
	);
}

export default PageNotFound;
