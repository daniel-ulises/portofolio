import React from "react";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import "./main.css";

export default function App() {
	return (
		<>
			<Header />
			<Projects />
			<About />
			<Contact />
		</>
	);
}
