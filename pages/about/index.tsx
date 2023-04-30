import type { NextPage } from "next";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Layout from "../../components/layout";

export const introductionTitle = "Hi, I'm Ming Yong!";
export const introductionText =
	"I am interested in coding and eager to acquire real-world experience within the computing industry and opportunities to pick up and improve technical skills.";

const About: NextPage = () => {
	return (
		<Layout>
			{/* <Card className="card"> */}
				<h1 className="cardTitle">{introductionTitle} 👨‍💻</h1>
				<br />
				<h2 className="cardContent">{introductionText}</h2>
			{/* </Card> */}
		</Layout>
	);
};

export default About;
