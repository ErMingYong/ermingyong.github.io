import type { NextPage } from "next";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Layout from "../../components/layout";

export const aboutTitle = "About Me";
export const aboutText1 =
	"I am currently reading the 🎓 Bachelor of Computing in Information Systems with the intention of specialising in Digital Product and Platform Management and Intelligent Systems Solutioning.";
export const aboutText2 =
	"An Enthusiastic, hard-working, curious, and quick learner with a passion to develop and implement solutions to solve real world problems.";
export const academic = "Bachelor of Computing in Information Systems";
export const specialization1 = "Digital Product and Platform Management";
export const specialization2 = "Intelligent Systems Solutioning";

const Me: NextPage = () => {
	return (
		<Layout>
			<Card
				sx={{ backgroundColor: "#395d74", border: "none", boxShadow: "none" }}
			>
				<h1 className="cardTitle">{aboutTitle} ❓</h1>
				<Typography
					variant="h3"
					sx={{
						fontFamily: "monospace",
						fontSize: "2rem",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					I am current reading 🎓{" "}
					<b>
						<u>{academic}</u>
					</b>
					, with the intention of specializing into{" "}
					<b>
						{specialization1} and {specialization2}
					</b>
				</Typography>
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
					{aboutText2}
				</Typography>
			</Card>
		</Layout>
	);
};

export default Me;
