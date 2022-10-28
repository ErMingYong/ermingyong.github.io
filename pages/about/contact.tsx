import type { NextPage } from "next";
import Link from "next/link";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Layout from "../../components/layout";

export const contactTitle = "Contact Me!";
export const contactText1 = "Email: ";
export const contactText2 = "LinkedIn: ";
export const contactText3 = "GitHub: ";
export const contactText4 = "Location: ";
export const emailAddress = "mingyong1999@gmail.com";
export const linkedInLink = "https://www.linkedin.com/in/er-ming-yong/";
export const githubLink = "https://github.com/NIL-99?tab=repositories";
export const location = "Singapore, Singapore";

const Contact: NextPage = () => {
	return (
		<Layout>
			<Card
				sx={{
					backgroundColor: "#395d74",
					border: "none",
					boxShadow: "none",
					margin: "1rem 0rem 1rem 0rem",
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontFamily: "monospace",
						fontSize: "3rem",
						fontWeight: "bold",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					{contactTitle} 📲
				</Typography>
				<br />
				<Typography
					variant="h2"
					sx={{
						fontFamily: "monospace",
						fontSize: "2rem",
						fontWeight: "bold",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					📩 {contactText1}
					{emailAddress}
				</Typography>
				<br />
				<Typography
					variant="h2"
					sx={{
						fontFamily: "monospace",
						fontSize: "2rem",
						fontWeight: "bold",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					🔗 {contactText2}
					<Link href="https://www.linkedin.com/in/er-ming-yong/">
						<u>{linkedInLink}</u>
					</Link>
				</Typography>
				<br />
				<Typography
					variant="h2"
					sx={{
						fontFamily: "monospace",
						fontSize: "2rem",
						fontWeight: "bold",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					👨‍💻 {contactText3}
					<Link href="https://github.com/NIL-99?tab=repositories">
						<u>{githubLink}</u>
					</Link>
				</Typography>
				<br />
				<br />
				<Typography
					variant="h2"
					sx={{
						fontFamily: "monospace",
						fontSize: "2rem",
						fontWeight: "bold",
						lineHeight: "1.3",
						maxWidth: "70rem",
					}}
				>
					📍 {contactText4}
					{location}
				</Typography>
			</Card>
		</Layout>
	);
};

export default Contact;
