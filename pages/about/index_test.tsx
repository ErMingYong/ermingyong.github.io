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
			<div className="empty-space"></div>
			<Card
				sx={{ backgroundColor: "#395d74", border: "none", boxShadow: "none" }}
			>
				<h1 className="cardTitle">{introductionTitle} 👨‍💻</h1>
				<br />
				<Typography
					variant="h3"
					sx={{
						fontFamily: "monospace",
						fontSize: "2rem",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					{introductionText}
				</Typography>
			</Card>
		</Layout>
	);
};

export default About;
