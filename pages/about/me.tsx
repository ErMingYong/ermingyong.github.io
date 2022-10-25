import type { NextPage } from "next";

import Layout from "../../components/layout";

export const aboutTitle = "About Me";
export const aboutText1 =
	"I am currently reading the 🎓 Bachelor of Computing in Information Systems with the intention of specialising into Digital Product and Platform Management and Intelligent Systems Solutioning.";
export const aboutText2 =
	"An Enthusiastic, hard-working, curious, and quick learner with a passion to develop and implement solutions to solve real world problems.";
export const academic = "Bachelor of Computing in Information Systems";
export const specialization1 = "Digital Product and Platform Management";
export const specialization2 = "Intelligent Systems Solutioning";

const Me: NextPage = () => {
	return (
		<Layout>
			<div className="container">
				<div className="card">
					<h1 className="cardTitle">{aboutTitle} ❓</h1>
					<p className="cardText">
						I am current reading 🎓{" "}
						<b>
							<u>{academic}</u>
						</b>
						, with the intention of specializing into {specialization1} and{" "}
						{specialization2}
					</p>
					<p className="cardText">
						<b>{aboutText2}</b>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Me;
