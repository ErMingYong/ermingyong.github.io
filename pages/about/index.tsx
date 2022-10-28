import type { NextPage } from "next";

import Layout from "../../components/layout";

export const introductionTitle = "Hi, I'm Ming Yong!";
export const introductionText =
	"I am interested in coding and eager to acquire real-world experience within the computing industry and opportunities to pick up and improve technical skills.";

const About: NextPage = () => {
	return (
		<Layout>
			<div className="empty-space"></div>
			<div className="card">
				<h1 className="cardTitle">{introductionTitle} 👨‍💻</h1>
				<p className="cardText">{introductionText}</p>
			</div>
		</Layout>
	);
};

export default About;
