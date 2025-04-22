import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h1>404</h1>
			<p style={{ textAlign: "center" }}>
				Sorry, the page you are looking for is not found.
			</p>
			<Link to="/" style={{ margin: "0 auto" }}>
				Go back to Home
			</Link>
		</>
	);
};

export default NotFound;
