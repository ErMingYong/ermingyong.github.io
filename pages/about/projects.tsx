import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Layout from "../../components/layout";

import ReactJSIcon from "../../images/reactjs.svg";
import Html5Icon from "../../images/html5.svg";
import CssIcon from "../../images/css.svg";
import FirebaseIcon from "../../images/firebase.svg";
import JakartaEEIcon from "../../images/jakartaee.svg";
import JQueryIcon from "../../images/jquery.svg";
import GlassfishIcon from "../../images/glassfish.svg";
import AngularIcon from "../../images/angular.svg";
import NextJSIcon from "../../images/nextjs.svg";
import TypeScriptIcon from "../../images/typescript.svg";
import MaterialUIIcon from "../../images/material-ui.svg";

// copy and refactor for more details or experiences
export const project1Duration = "May 2021 - Jul 2021";
export const project1Description = "Developer, Orbital (Apollo 11) 🚀";
export const project1Achievement1 =
	"Overseaw Agile Development of website, determining software features in a team of 2; conducted field work with target audiences for product feedback";
export const project1GitHubLink1 =
	"https://github.com/NIL-99/Orbital-InsertNameHere";
export const project2Duration = "Aug 2021 - Dec 2021";
export const project2Description =
	"Developer, Hotel Management System (IS2103) 🏨";
export const project2Achievement1 =
	"Oversaw Agile Developement of Enterprise System with CLI, determining software featurues in a team of 2";
export const project2GitHubLink1 = "https://github.com/NIL-99/IS2103HoRS";
export const project3Duration = "Jan 2022 - May 2022";
export const project3Description = "Developer, Service Me Now (IS3106) 🛠️";
export const project3Achievement1 =
	"Oversaw Agile Developement of Enterprise System with both Frontend and Backend, determining features in a team of 4";
export const project3GitHubLink1 =
	"https://github.com/NIL-99/ServiceMeNowAngular";
export const project3GitHubLink2 = "https://github.com/NIL-99/ServiceMeNow";
export const project4Duration = "24th Oct 2022";
export const project4Description = "Developer, Personal Portfolio Website 📁";
export const project4GitHubLink1 = "https://github.com/NIL-99/portfolio";

// below method renders the output of the page
// copy and refactor <div className="card"></div> component to place more details or experiences
const Projects: NextPage = () => {
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
					Projects 🧪📝🥼
				</Typography>
				<br />
				<Card
					sx={{
						backgroundColor: "#395d74",
						border: "none",
						boxShadow: "none",
						margin: "1rem 0rem 1rem 0rem",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1.3rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{project1Duration}
					</Typography>
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
						{project1Description} @{" "}
						<Link className="link" href="https://www.comp.nus.edu.sg/">
							National University of Singapore
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{">"} {project1Achievement1}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						<Link className="link" href={project1GitHubLink1}>
							{project1GitHubLink1}
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						Technology Stack: ReactJS, HTML5, CSS, Firebase
					</Typography>
					<Image src={ReactJSIcon} alt="ReactJS" height="40" width="40" />
					<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
					<Image src={CssIcon} alt="CSS" height="40" width="40" />
					<Image src={FirebaseIcon} alt="Firebase" height="40" width="40" />
				</Card>
				<br />
				<Card
					sx={{
						backgroundColor: "#395d74",
						border: "none",
						boxShadow: "none",
						margin: "1rem 0rem 1rem 0rem",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1.3rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{project2Duration}
					</Typography>
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
						{project2Description} @{" "}
						<Link className="link" href="https://www.comp.nus.edu.sg/">
							National University of Singapore
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{">"} {project2Achievement1}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						<Link className="link" href={project2GitHubLink1}>
							{project2GitHubLink1}
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						Technology Stack: Jakarta EE, JPA ORM, JPQL, GlassFish
					</Typography>
					<Image src={JakartaEEIcon} alt="JakartaEE" height="40" width="40" />
					<Image src={JQueryIcon} alt="iQuery" height="40" width="40" />
					<Image src={GlassfishIcon} alt="Glassfish" height="40" width="40" />
				</Card>
				<br />
				<Card
					sx={{
						backgroundColor: "#395d74",
						border: "none",
						boxShadow: "none",
						margin: "1rem 0rem 1rem 0rem",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1.3rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{project3Duration}
					</Typography>
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
						{project3Description} @{" "}
						<Link className="link" href="https://www.comp.nus.edu.sg/">
							National University of Singapore
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{">"} {project3Achievement1}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						Frontend:
						<Link className="link" href={project3GitHubLink1}>
							{project3GitHubLink1}
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						Backend:
						<Link className="link" href={project3GitHubLink2}>
							{project3GitHubLink2}
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						Technology Stack: Jakarta EE, JPA ORM, JPQL, GlassFish, HTML5, CSS,
						AngularJS
					</Typography>
					<Image src={JakartaEEIcon} alt="JakartaEE" height="40" width="40" />
					<Image src={JQueryIcon} alt="jQuery" height="40" width="40" />
					<Image src={GlassfishIcon} alt="Glassfish" height="40" width="40" />
					<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
					<Image src={CssIcon} alt="CSS" height="40" width="40" />
					<Image src={AngularIcon} alt="AngularJS" height="40" width="40" />
				</Card>
				<br />
				<Card
					sx={{
						backgroundColor: "#395d74",
						border: "none",
						boxShadow: "none",
						margin: "1rem 0rem 1rem 0rem",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1.3rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{project4Duration}
					</Typography>
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
						{project4Description} @{" "}
						<Link className="link" href="/">
							Myself
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						{">"} Frontend:
						<Link className="link" href={project4GitHubLink1}>
							{project4GitHubLink1}
						</Link>
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "monospace",
							fontSize: "1rem",
							lineHeight: "1.5",
							maxWidth: "70rem",
						}}
					>
						Technology Stack: ReactJS, NextJS, TypeScript, HTML5, CSS, Material
						UI
					</Typography>
					<Image src={NextJSIcon} alt="NextJS" height="40" width="40" />
					<Image src={ReactJSIcon} alt="ReactJS" height="40" width="40" />
					<Image src={TypeScriptIcon} alt="TypeScript" height="40" width="40" />
					<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
					<Image src={CssIcon} alt="CSS" height="40" width="40" />
					<Image
						src={MaterialUIIcon}
						alt="Material UI"
						height="40"
						width="40"
					/>
				</Card>
			</Card>
		</Layout>
	);
};

export default Projects;
