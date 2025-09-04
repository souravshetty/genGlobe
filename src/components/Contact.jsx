
			import React, { useState } from "react";
			import emailjs from "emailjs-com";

			const Contact = () => {
				const [formData, setFormData] = useState({
					name: "",
					email: "",
					message: "",
				});
				const [status, setStatus] = useState(""); // message text
				const [showPopup, setShowPopup] = useState(false); // show/hide popup

				const handleChange = (e) => {
					setFormData({ ...formData, [e.target.name]: e.target.value });
				};

				const handleSubmit = (e) => {
					e.preventDefault();

					
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID, // service ID
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // template ID
				formData,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY // public key
			)
			.then(
				(result) => {
					setStatus("✅ Email sent successfully!");
					setShowPopup(true);
					setFormData({ name: "", email: "", message: "" });

					setTimeout(() => setShowPopup(false), 3000);
				},
				(error) => {
					setStatus("❌ Failed to send message. Try again later.");
					setShowPopup(true);
					setTimeout(() => setShowPopup(false), 3000);
				}
			);
				};

				return (
					<section id="contact" className="contact">
						{/* Popup Notification */}
						{showPopup && (
							<div
								style={{
									position: "fixed",
									top: "90px",
									left: "50%",
									transform: "translateX(-50%)",
									backgroundColor: status.includes("✅")
										? "#4caf50"
										: "#f44336",
									color: "#fff",
									padding: "10px 20px",
									borderRadius: "5px",
									boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
									zIndex: 9999,
								}}
							>
								{status}
							</div>
						)}

						<div className="container">
							<h2 className="section-title">Get In Touch</h2>

							<form onSubmit={handleSubmit} className="contact-form">
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input
										id="name"
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										id="email"
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										name="message"
										rows="5"
										value={formData.message}
										onChange={handleChange}
										required
									></textarea>
								</div>

								<button type="submit" className="submit-btn">
									Send Message
								</button>
							</form>
						</div>
					</section>
				);
			};

			export default Contact;
