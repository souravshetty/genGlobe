import React, { useState, useEffect } from "react";
import circle from "../assets/circle.png";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Determine active section
			const sections = ["home", "services", "why-us", "about", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (section) => activeSection === section;

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="container">
				<nav className="nav">
					{/* Logo */}
					<a href="#home" className="logo">
						<div className="logo-icon">
							<i className="fas fa-globe"></i>
						</div>
						<span>
							<span className="highlight">G</span>englobe{" "}
							<span className="highlight">A</span>nalytics
						</span>
					</a>

					{/* Hamburger Icon */}
					<div
						className={`hamburger ${menuOpen ? "open" : ""}`}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>

					{/* Nav Links */}
					<ul className={`nav-links ${menuOpen ? "open" : ""}`}>
						<li>
							<a
								href="#home"
								className={isActive("home") ? "active" : ""}
								onClick={() => setMenuOpen(false)}
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#services"
								className={isActive("services") ? "active" : ""}
								onClick={() => setMenuOpen(false)}
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="#why-us"
								className={isActive("why-us") ? "active" : ""}
								onClick={() => setMenuOpen(false)}
							>
								Why Us
							</a>
						</li>
						<li>
							<a
								href="#about"
								className={isActive("about") ? "active" : ""}
								onClick={() => setMenuOpen(false)}
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className={`contact-btn ${isActive("contact") ? "active" : ""}`}
								onClick={() => setMenuOpen(false)}
							>
								Contact Us
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
