import React from "react";
import Navbar from "../Navbar/Navbar";
import avatar from "../../assets/img/avatar.png";

export default function Header() {
	return (
		<>
			<Navbar />
			<header>
				<img src={avatar} alt="My avatar" className="avatar-header" />
				<h1>
					Hi, I am <span className="name-header">Daniel Ulises,</span>
				</h1>
				<h2>I'm a full-stack web developer.</h2>
				<a className="btn btn-header" href="#projects">
					Check my work!
					<i className="fas fa-arrow-down"></i>
				</a>
			</header>
		</>
	);
}
