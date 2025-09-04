
const rataImage = new URL("../assets/rata.png", import.meta.url).href;

const About = () => {
	const aboutCards = [
		{
			number: "01",
			title: "Innovation",
			content:
				"We embrace the latest advancements, continuously exploring new ideas to deliver solutions that create real business impact.",
			color: "blue",
		},
		{
			number: "02",
			title: "Performance Driven",
			content:
				"Our solutions are designed not just to impress but to achieve measurable results that drive your organization forward.",
			color: "purple",
		},
		{
			number: "03",
			title: "Partnership",
			content:
				"Your success is our success. We work hand-in-hand with you, building lasting relationships that go beyond projects to create shared growth.",
			color: "orange",
		},
		{
			number: "04",
			title: "Personalization",
			content:
				"Every client is unique. We tailor our approach to meet your specific needs, ensuring the highest level of attention and care",
			color: "green",
		},
		{
			number: "05",
			title: "Integrity",
			content:
				"We believe trust is the foundation of progress. That’s why we lead with transparency, honesty, and ethical practices in every engagement.",
			color: "blue",
		},
	];

	return (
		<section id="about" className="about">
			<div className="container">
				{/* About Hero Section */}
				<div className="about-hero">
					<div className="about-text-content">
						<h3>Genglobe Analytics</h3>
						<p>
							Founded on the belief that AI should be accessible and impactful,
							Genglobe Analytics bridges the gap between cutting-edge technology
							and business value.
						</p>
						<p>
							Our approach combines deep technical expertise with strategic
							business acumen to deliver AI solutions that don't just
							impress,they perform.
						</p>
						<p>
							From innovative startups to established enterprises, we help
							organizations navigate the complex landscape of AI transformation.
							Our boutique approach ensures personalized attention and solutions
							tailored to your unique goals and challenges.
						</p>

						<p>
							We pride ourselves on being more than consultants,we're your
							dedicated partners in the AI revolution, committed to your success
							every step of the way.
						</p>
					</div>

					{/* ✅ Use actual image */}
					<div className="about-image-content">
						<img
							src={rataImage}
							alt="Genglobe Analytics"
							className="about-photo"
						/>
					</div>
				</div>

				{/* Core Values Section */}
				<div className="section-header">
					<h2 className="section-title">
						Our <span className="orange">Core Values</span>
					</h2>
					<p className="section-description">
						The principles that guide our approach to AI transformation and
						client success
					</p>
				</div>

				{/* About Cards Grid */}
				<div className="about-grid">
					{aboutCards.map((card, index) => (
						<div key={index} className={`about-card ${card.color}`}>
							<div className="card-number">{card.number}</div>
							<h3>{card.title}</h3>
							<p>{card.content}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
