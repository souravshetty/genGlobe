import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
	return (
		<div style={{ textAlign: "center", padding: "2rem" }}>
			<h1>Hello React!</h1>
			<p>This is my static website built with Parcel.</p>
		</div>
	);
};

// Render App into #root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
