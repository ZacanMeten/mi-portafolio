import React from "react";
import "./styles/About.css";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-desc">
				<h3>About me</h3>
				<p>
					My name is Anthony Arnaldo Hernandez Flores, I was born in 1998. I am
					a web development oriented programmer
				</p>
			</div>
			<div className="about-img">
				<img
					src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
					alt="about"
				/>
			</div>
		</div>
	);
};

export default About;
