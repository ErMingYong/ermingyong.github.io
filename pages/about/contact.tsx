import type { NextPage } from "next";

import Layout from "../../components/layout";

export const contactTitle = "Contact Me!";
export const contactText1 = "Email: ";
export const contactText2 = "LinkedIn: ";
export const contactText3 = "Location: ";
export const emailAddress = "mingyong1999@gmail.com";
export const linkedInLink = "https://www.linkedin.com/in/er-ming-yong/";
export const location = "Singapore, Singapore";

const Contact: NextPage = () => {
	return (
		<Layout>
			<div className="container">
				<div className="card">
					<h1 className="cardTitle">{contactTitle}</h1>
					<br />
					<p className="cardText contact">
						{contactText1}
						{emailAddress}
					</p>
					<p className="cardText contact">
						{contactText2}
						{linkedInLink}
					</p>
					<br />
					<p className="cardText contact">
						{contactText3}
						{location}
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
