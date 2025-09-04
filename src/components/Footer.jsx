import React from "react";

const Footer = () => {
	const services = [
		"AI & Machine Learning",
		"Cloud Solutions",
		"Software Development",
		"Quality Assurance",
	];

	const companyLinks = ["About Us", "Why Choose Us", "Contact"];

	const contacts = [
		{
			type: "Email",
			value: "info@genglobe.ai",
			href: "mailto:info@genglobe.ai",
			icon: "fas fa-envelope",
		},
		{
			type: "Phone",
			value: "+91 9876543210",
			href: "tel:+919876543210",
			icon: "fas fa-phone",
		},
	];

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					{/* Left Column - Genglobe Analytics Info */}
					<div className="footer-column">
						<div className="footer-logo">
							<div className="footer-logo-icon">
								<i className="fas fa-globe"></i>
							</div>
							<span>Genglobe Analytics</span>
						</div>
						<p className="footer-description">
							Your trusted partner for AI transformation, delivering end-to-end
							solutions that drive measurable business value through
							cutting-edge technology.
						</p>
						<a href="#contact" className="footer-cta-btn">
							Start Your AI Journey Today
						</a>
					</div>

					{/* Middle Column - Services */}
					<div className="footer-column">
						<h3 className="footer-heading">Services</h3>
						<ul className="footer-links">
							{services.map((service, index) => (
								<li key={index}>
									<a href="#services">{service}</a>
								</li>
							))}
						</ul>
					</div>

					{/* Right Column - Company & Contacts */}
					<div className="footer-column">
						<h3 className="footer-heading">Company</h3>
						<ul className="footer-links">
							{companyLinks.map((link, index) => (
								<li key={index}>
									<a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
										{link}
									</a>
								</li>
							))}
						</ul>

						{/* Contacts Section with Icons */}
						<h3 className="footer-heading">Contacts</h3>
						<ul className="footer-links">
							{contacts.map((contact, index) => (
								<li
									key={index}
									style={{ display: "flex", alignItems: "center", gap: "8px" }}
								>
									<i className={contact.icon}></i>
									<a href={contact.href}>{contact.value}</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="footer-bottom">
					<p>
						© 2025 Genglobe Analytics. All rights reserved. Transforming
						businesses through AI innovation.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
