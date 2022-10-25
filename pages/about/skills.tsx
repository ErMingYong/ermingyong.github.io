import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../../components/layout";

import JavaIcon from "../../images/java.svg";
import PythonIcon from "../../images/python.svg";
import JSIcon from "../../images/js.svg";
import TypeScriptIcon from "../../images/typescript.svg";
import Html5Icon from "../../images/html5.svg";
import CssIcon from "../../images/css.svg";
import JakartaEEIcon from "../../images/jakartaee.svg";
import JQueryIcon from "../../images/jquery.svg";
import AngularJSIcon from "../../images/angular.svg";
import ReactJSIcon from "../../images/reactjs.svg";
import NextJSIcon from "../../images/nextjs.svg";
import IonicIcon from "../../images/ionic.svg";
import FlaskIcon from "../../images/flask.svg";
import PyTestIcon from "../../images/pytest.svg";
import Bootstrap5Icon from "../../images/bootstrap5.svg";
import ChartJSIcon from "../../images/chartjs.svg";
import MySQLIcon from "../../images/mysql.svg";
import PostgreSQLIcon from "../../images/postgresql.svg";
import AWSIcon from "../../images/aws.svg";
import DockerIcon from "../../images/docker.svg";
import JenkinsIcon from "../../images/jenkins.svg";
import FirebaseIcon from "../../images/firebase.svg";
import PostmanIcon from "../../images/postman.svg";
import SlackIcon from "../../images/slack.svg";
import GlassfishIcon from "../../images/glassfish.svg";
import GitIcon from "../../images/git.svg";
import GitHubIcon from "../../images/github.svg";
import FigmaIcon from "../../images/figma.svg";
import LinuxIcon from "../../images/linux.svg";
import UbuntuIcon from "../../images/ubuntu.svg";
import GoogleAnalyticsIcon from "../../images/analytics.svg";

// below method renders the output of the page
// copy and refactor <div className="card"></div> component to place more details or experiences
const Skills: NextPage = () => {
	return (
		<Layout>
			<div className="container">
				<div className="card">
					<h1 className="cardTitle">My Skills 📖🧠👨‍💻</h1>
				</div>
				<br />
				<div className="card">
					<h1>Languages</h1>
					<p>{"> "} Java, Python, JavaScript, TypeScript, HTMl, CSS</p>
					<Image src={JavaIcon} alt="Java" height="100" width="100" />
					<Image src={PythonIcon} alt="Python" height="100" width="100" />
					<Image src={JSIcon} alt="JavaScript" height="100" width="100" />
					<Image
						src={TypeScriptIcon}
						alt="TypeScript"
						height="100"
						width="100"
					/>
					<Image src={Html5Icon} alt="HTML5" height="100" width="100" />
					<Image src={CssIcon} alt="Css" height="100" width="100" />
				</div>
				<div className="card">
					<h1>Frameworks</h1>
					<p>
						{"> "} Jakarta EE, jQuery, AngularJS, ReactJS, NextJS, Flask,
						PyTest, Bootstrap 5, ChartJS, Ionic
					</p>
					<Image
						src={JakartaEEIcon}
						alt="Jakarta EE"
						height="100"
						width="100"
					/>
					<Image src={JQueryIcon} alt="jQuery" height="100" width="100" />
					<Image src={AngularJSIcon} alt="AngularJS" height="100" width="100" />
					<Image src={ReactJSIcon} alt="ReactJS" height="100" width="100" />
					<Image src={NextJSIcon} alt="NextJS" height="100" width="100" />
					<Image src={FlaskIcon} alt="Flask" height="100" width="100" />
					<Image src={PyTestIcon} alt="PyTest" height="100" width="100" />
					<Image
						src={Bootstrap5Icon}
						alt="Bootstrap 5"
						height="100"
						width="100"
					/>
					<Image src={ChartJSIcon} alt="ChartJS" height="100" width="100" />
					<Image src={IonicIcon} alt="Ionic" height="100" width="100" />
				</div>
				<div className="card">
					<h1>Database</h1>
					<p>{"> "} MySQL, PostgreSQL</p>
					<Image src={MySQLIcon} alt="MySQL" height="100" width="100" />
					<Image
						src={PostgreSQLIcon}
						alt="PostgreSQL"
						height="100"
						width="100"
					/>
				</div>
				<div className="card">
					<h1>Platforms and Services</h1>
					<p>
						{"> "} AWS, Docker, Jenkins, Firebase, Postman, Slack, GlassFish
					</p>
					<Image
						src={AWSIcon}
						alt="Amazon Web Services"
						height="100"
						width="100"
					/>
					<Image src={DockerIcon} alt="Docker" height="100" width="100" />
					<Image src={JenkinsIcon} alt="Jenkins" height="100" width="100" />
					<Image src={FirebaseIcon} alt="Firebase" height="100" width="100" />
					<Image src={PostmanIcon} alt="Postman" height="100" width="100" />
					<Image src={SlackIcon} alt="Slack" height="100" width="100" />
					<Image src={GlassfishIcon} alt="Docker" height="100" width="100" />
				</div>
				<div className="card">
					<h1>Tools</h1>
					<p>{"> "} Git, GitHub, Figma, Linux, Ubuntu, Google Analytics</p>
					<Image src={GitIcon} alt="Git" height="100" width="100" />
					<Image src={GitHubIcon} alt="Docker" height="100" width="100" />
					<Image src={FigmaIcon} alt="Figma" height="100" width="100" />
					<Image src={LinuxIcon} alt="Linux" height="100" width="100" />
					<Image src={UbuntuIcon} alt="Ubuntu" height="100" width="100" />
					<Image
						src={GoogleAnalyticsIcon}
						alt="Google Analytics"
						height="100"
						width="100"
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Skills;
