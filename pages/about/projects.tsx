import type { NextPage } from "next";
import Image from "next/image";

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
			<div>
				<h1 className="cardTitle">Projects 🧪📝🥼</h1>
			</div>
			<br />
			<div className="card">
				<h2>{project1Duration}</h2>
				<h1>
					{project1Description} @{" "}
					<a className="link" href="https://www.comp.nus.edu.sg/">
						National University of Singapore
					</a>
				</h1>
				<p>
					{">"} {project1Achievement1}
				</p>
				<a className="link" href={project1GitHubLink1}>
					{project1GitHubLink1}
				</a>
				<p>Technology Stack: ReactJS, HTML5, CSS, Firebase</p>
				<Image src={ReactJSIcon} alt="ReactJS" height="40" width="40" />
				<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
				<Image src={CssIcon} alt="CSS" height="40" width="40" />
				<Image src={FirebaseIcon} alt="Firebase" height="40" width="40" />
			</div>
			<br />
			<div className="card">
				<h2>{project2Duration}</h2>
				<h1>
					{project2Description} @{" "}
					<a className="link" href="https://www.comp.nus.edu.sg/">
						National University of Singapore
					</a>
				</h1>
				<p>
					{">"} {project2Achievement1}
				</p>
				<a className="link" href={project2GitHubLink1}>
					{project2GitHubLink1}
				</a>
				<p>Technology Stack: Jakarta EE, JPA ORM, JPQL, GlassFish</p>
				<Image src={JakartaEEIcon} alt="JakartaEE" height="40" width="40" />
				<Image src={JQueryIcon} alt="iQuery" height="40" width="40" />
				<Image src={GlassfishIcon} alt="Glassfish" height="40" width="40" />
			</div>
			<br />
			<div className="card">
				<h2>{project3Duration}</h2>
				<h1>
					{project3Description} @{" "}
					<a className="link" href="https://www.comp.nus.edu.sg/">
						National University of Singapore
					</a>
				</h1>
				<p>
					{">"} {project3Achievement1}
				</p>
				<p>
					Frontend:
					<a className="link" href={project3GitHubLink1}>
						{project3GitHubLink1}
					</a>
				</p>
				Backend:
				<a className="link" href={project3GitHubLink2}>
					{project3GitHubLink2}
				</a>
				<p>
					Technology Stack: Jakarta EE, JPA ORM, JPQL, GlassFish, HTML5, CSS,
					AngularJS
				</p>
				<Image src={JakartaEEIcon} alt="JakartaEE" height="40" width="40" />
				<Image src={JQueryIcon} alt="jQuery" height="40" width="40" />
				<Image src={GlassfishIcon} alt="Glassfish" height="40" width="40" />
				<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
				<Image src={CssIcon} alt="CSS" height="40" width="40" />
				<Image src={AngularIcon} alt="AngularJS" height="40" width="40" />
			</div>
			<br />
			<div className="card">
				<h2>{project4Duration}</h2>
				<h1>
					{project4Description} @{" "}
					<a className="link" href="/">
						Myself
					</a>
				</h1>
				<p>
					{">"} Frontend:
					<a className="link" href={project4GitHubLink1}>
						{project4GitHubLink1}
					</a>
				</p>
				<p>Technology Stack: ReactJS, NextJS, TypeScript, HTML5, CSS</p>
				<Image src={NextJSIcon} alt="NextJS" height="40" width="40" />
				<Image src={ReactJSIcon} alt="ReactJS" height="40" width="40" />
				<Image src={TypeScriptIcon} alt="TypeScript" height="40" width="40" />
				<Image src={Html5Icon} alt="HTML5" height="40" width="40" />
				<Image src={CssIcon} alt="CSS" height="40" width="40" />
			</div>
		</Layout>
	);
};

export default Projects;
