import type { NextPage } from "next";

import Layout from "../../components/layout";

export const introductionTitle = "Hi, I'm Ming Yong!";
export const introductionText =
	"I am interested in coding and eager to acquire real-world experience within the computing industry and opportunities to pick up and improve technical skills.";

export const aboutTitle = "About Me";
export const aboutText1 =
	"I am currently reading the Beachelor of Computing in Information Systems with the intention of specialising into Digital Product and Platform Management and Intelligent Systems Solutioning.";
export const aboutText2 =
	"An Enthusiastic, hard-working, curious, and quick learner with a passion to develop and implement solutions to solve real world problems.";

const Test: NextPage = () => {
	return (
		<Layout>
			<div className="empty-space"></div>
			<div className="container" id="introduction">
				<div className="card">
					<h1 className="cardTitle">{introductionTitle}</h1>
					<p className="cardText">{introductionText}</p>
				</div>
			</div>
		</Layout>
	);
};

export default Test;
