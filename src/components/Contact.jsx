import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
	const [state, handleSubmit] = useForm("mgvlybja"); // 🔹 Replace with your Formspree ID
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Reset fields when form succeeds
	useEffect(() => {
		if (state.succeeded) {
			setFormData({ name: "", email: "", message: "" });
		}
	}, [state.succeeded]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section id="contact" className="contact">
			<div className="container">
				<h2 className="section-title">Get In Touch</h2>

				{state.succeeded ? (
					<p className="success-msg">
						✅ Thanks for your message! We'll get back to you soon.
					</p>
				) : (
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
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
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
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
						</div>

						<button
							type="submit"
							className="submit-btn"
							disabled={state.submitting}
						>
							{state.submitting ? "Sending..." : "Send Message"}
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Contact;
