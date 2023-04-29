import type { NextPage } from "next";
import Link from "next/link";
import Card from "@mui/material/Card";
import h3 from "@mui/material/Typography";

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
			<Card className="card">
				<h1 className="cardTitle">
					{contactTitle} 📲
				</h1>
				<br />
				<h3 className="innerCardContent">
					📩 {contactText1}
					{emailAddress}
				</h3>
				<br />
				<h3 className="innerCardContent">
					🔗 {contactText2}
					<Link href="https://www.linkedin.com/in/er-ming-yong/">
						<u>{linkedInLink}</u>
					</Link>
				</h3>
				<br />
				<h3 className="innerCardContent">
					👨‍💻 {contactText3}
					<Link href="https://github.com/NIL-99?tab=repositories">
						<u>{githubLink}</u>
					</Link>
				</h3>
				<br />
				<br />
				<h3 className="innerCardContent">
					📍 {contactText4}
					{location}
				</h3>
			</Card>
		</Layout>
	);
};

export default Contact;
