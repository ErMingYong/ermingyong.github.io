import type { NextPage } from "next";

import Layout from "../../components/layout";

export const aboutTitle = "About Me";
export const aboutText1 =
	"I am currently reading the Beachelor of Computing in Information Systems with the intention of specialising into Digital Product and Platform Management and Intelligent Systems Solutioning.";
export const aboutText2 =
	"An Enthusiastic, hard-working, curious, and quick learner with a passion to develop and implement solutions to solve real world problems.";

const Me: NextPage = () => {
	return (
		<Layout>
			<div className="container">
				<div className="card">
					<h1 className="cardTitle">{aboutTitle}</h1>
					<p className="cardText">{aboutText1}</p>
					<p className="cardText">{aboutText2}</p>
				</div>
			</div>
		</Layout>
	);
};

export default Me;
