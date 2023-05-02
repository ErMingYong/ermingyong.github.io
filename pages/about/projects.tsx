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
// copy and refactor <div className="innerCard"></div> component to place more details or experiences
const Projects: NextPage = () => {
	return (
		<Layout>
				<h1 className="cardTitle">
					Projects 🧪📝🥼
				</h1>
				<br />
				<Card className="card" style={{ backgroundColor: "#93BFCF", border: "none", boxShadow: "none", paddingLeft: "1rem", paddingBottom: "3rem"}} >
					<h3 className="innerCardContent">
						{project1Duration}
					</h3>
					<h2 className="cardContent">
						{project1Description} @{" "}
						<Link className="link" href="https://www.comp.nus.edu.sg/">
							National University of Singapore
						</Link>
					</h2>
					<h3 className="innerCardContent">
						{">"} {project1Achievement1}
					</h3>
					<h3 className="innerCardContent">
						<Link className="link" href={project1GitHubLink1}>
							{project1GitHubLink1}
						</Link>
					</h3>
					<h3 className="innerCardContent">
						Technology Stack: ReactJS, HTML5, CSS, Firebase
					</h3>
					<Image src={ReactJSIcon} alt="ReactJS" height="40" width="40" />
					<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
					<Image src={CssIcon} alt="CSS" height="40" width="40" />
					<Image src={FirebaseIcon} alt="Firebase" height="40" width="40" />
				</Card>
				<br />
				<Card className="card" style={{ backgroundColor: "#93BFCF", border: "none", boxShadow: "none", paddingLeft: "1rem", paddingBottom: "3rem"}} >
					<h3 className="innerCardContent">
						{project2Duration}
					</h3>
					<h2 className="cardContent">
						{project2Description} @{" "}
						<Link className="link" href="https://www.comp.nus.edu.sg/">
							National University of Singapore
						</Link>
					</h2>
					<h3 className="innerCardContent">
						{">"} {project2Achievement1}
					</h3>
					<h3 className="innerCardContent">
						<Link className="link" href={project2GitHubLink1}>
							{project2GitHubLink1}
						</Link>
					</h3>
					<h3 className="innerCardContent">
						Technology Stack: Jakarta EE, JPA ORM, JPQL, GlassFish
					</h3>
					<Image src={JakartaEEIcon} alt="JakartaEE" height="40" width="40" />
					<Image src={JQueryIcon} alt="iQuery" height="40" width="40" />
					<Image src={GlassfishIcon} alt="Glassfish" height="40" width="40" />
				</Card>
				<br />
				<Card className="card" style={{ backgroundColor: "#93BFCF", border: "none", boxShadow: "none", paddingLeft: "1rem", paddingBottom: "3rem"}} >
					<h3 className="innerCardContent">
						{project3Duration}
					</h3>
					<h2 className="cardContent">
						{project3Description} @{" "}
						<Link className="link" href="https://www.comp.nus.edu.sg/">
							National University of Singapore
						</Link>
					</h2>
					<h3 className="innerCardContent">
						{">"} {project3Achievement1}
					</h3>
					<h3 className="innerCardContent">
						Frontend:
						<Link className="link" href={project3GitHubLink1}>
							{project3GitHubLink1}
						</Link>
					</h3>
					<h3 className="innerCardContent">
						Backend:
						<Link className="link" href={project3GitHubLink2}>
							{project3GitHubLink2}
						</Link>
					</h3>
					<h3 className="innerCardContent">
						Technology Stack: Jakarta EE, JPA ORM, JPQL, GlassFish, HTML5, CSS,
						AngularJS
					</h3>
					<Image src={JakartaEEIcon} alt="JakartaEE" height="40" width="40" />
					<Image src={JQueryIcon} alt="jQuery" height="40" width="40" />
					<Image src={GlassfishIcon} alt="Glassfish" height="40" width="40" />
					<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
					<Image src={CssIcon} alt="CSS" height="40" width="40" />
					<Image src={AngularIcon} alt="AngularJS" height="40" width="40" />
				</Card>
				<br />
				<Card className="card" style={{ backgroundColor: "#93BFCF", border: "none", boxShadow: "none", paddingLeft: "1rem", paddingBottom: "3rem"}} >
					<h3 className="innerCardContent">
						{project4Duration}
					</h3>
					<h2 className="cardContent">
						{project4Description} @{" "}
						<Link className="link" href="/">
							Myself
						</Link>
					</h2>
					<h3 className="innerCardContent">
						{">"} Frontend:
						<Link className="link" href={project4GitHubLink1}>
							{project4GitHubLink1}
						</Link>
					</h3>
					<h3 className="innerCardContent">
						Technology Stack: ReactJS, NextJS, TypeScript, HTML5, CSS, Material
						UI
					</h3>
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
		</Layout>
	);
};

export default Projects;
