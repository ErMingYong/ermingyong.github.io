import type { NextPage } from "next";
import Image from "next/image";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Layout from "../../components/layout";
import styles from "../../styles/skills.module.css";

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
import GoogleAnalytics4Icon from "../../images/googleanalytics4.svg";
import MaterialUIIcon from "../../images/material-ui.svg";
import ReactBootstrapIcon from "../../images/react-bootstrap.svg";
import AWSWebServicesIcon from "../../images/amazonwebservices.svg";
import AWSACMIcon from "../../images/aws/awscertificatemanager.svg";
import AWSCFNIcon from "../../images/aws/cloudformation.svg";
import AWSCloudTrailIcon from "../../images/aws/cloudtrail.svg";
import AWSCloudWatchIcon from "../../images/aws/cloudwatch.svg";
import AWSCodeArtifactIcon from "../../images/aws/codeartifact.svg";
import AWSCodeBuildIcon from "../../images/aws/codebuild.svg";
import AWSCodeDeployIcon from "../../images/aws/codedeploy.svg";
import AWSCodePipelineIcon from "../../images/aws/codepipeline.svg";
import AWSDynamoDBIcon from "../../images/aws/dynamodb.svg";
import AWSEC2Icon from "../../images/aws/elasticcomputecloud.svg";
import AWSECRIcon from "../../images/aws/elasticcontainerregistry.svg";
import AWSECSIcon from "../../images/aws/elasticcontainerservice.svg";
import AWSECSFargateIcon from "../../images/aws/fargate.svg";
import AWSIAMIcon from "../../images/aws/identityandaccessmanagement.svg";
import AWSKMSIcon from "../../images/aws/keymanagementservice.svg";
import AWSLambdaIcon from "../../images/aws/lambda.svg";
import AWSLoadBalancerIcon from "../../images/aws/loadbalancer.svg";
import AWSRDSIcon from "../../images/aws/rds.svg";
import AWSSecretsManagerIcon from "../../images/aws/secretsmanager.svg";
import AWSSNSIcon from "../../images/aws/simplenotificationservice.svg";
import AWSS3Icon from "../../images/aws/simplestorageservice.svg";

// below method renders the output of the page
// copy and refactor <div className="innerCard"></div> component to place more details or experiences
const Skills: NextPage = () => {
	return (
		<Layout>
				<h1 className="cardTitle">
					My Skills 📖🧠👨‍💻
				</h1>
				<br />
				{/* <Card className="innerCard" style={{ backgroundColor: "#93BFCF"}}> */}
				<Card>
					<h2 className="cardContent">
						Languages
					</h2>
					<h3 className="innerCardContent">
						{"> "} Java, Python, JavaScript, TypeScript, HTMl, CSS
					</h3>
					<Image src={JavaIcon} alt="Java" height={50} width={50}/>
					<Image src={PythonIcon} alt="Python" height={50} width={50} />
					<Image src={JSIcon} alt="JavaScript" height={50} width={50} />
					<Image
						src={TypeScriptIcon} alt="TypeScript" height={50} width={50}
					/>
					<Image src={Html5Icon} alt="HTML5" height={50} width={50} />
					<Image src={CssIcon} alt="Css" height={50} width={50} />
				</Card>
				{/* <Card className="innerCard" style={{ backgroundColor: "#93BFCF"}}> */}
				<Card>
					<h2 className="cardContent">
						Frameworks
					</h2>
					<h3 className="innerCardContent">
						{"> "} Jakarta EE, jQuery, AngularJS, ReactJS, NextJS, Flask,
						PyTest, Bootstrap 5, Material UI, ChartJS, Ionic
					</h3>
					<Image
						src={JakartaEEIcon}
						alt="Jakarta EE"
						height={50}
						width={50}
					/>
					<Image src={JQueryIcon} alt="jQuery" height={50} width={50} />
					<Image src={AngularJSIcon} alt="AngularJS" height={50} width={50} />
					<Image src={ReactJSIcon} alt="ReactJS" height={50} width={50} />
					<Image src={NextJSIcon} alt="NextJS" height={50} width={50} />
					<Image src={IonicIcon} alt="Ionic" height={50} width={50} />
					<Image src={FlaskIcon} alt="Flask" height={50} width={50} />
					<Image src={PyTestIcon} alt="PyTest" height={50} width={50} />
					<Image
						src={Bootstrap5Icon}
						alt="Bootstrap 5"
						height={50}
						width={50}
					/>
					<Image
						src={MaterialUIIcon}
						alt="Material UI"
						height={50}
						width={50}
					/>
					<Image
						src={ReactBootstrapIcon}
						alt="React Bootstrap"
						height={50}
						width={50}
					/>
					<Image src={ChartJSIcon} alt="ChartJS" height={50} width={50} />
				</Card>
				{/* <Card className="innerCard" style={{ backgroundColor: "#93BFCF"}}> */}
				<Card>
					<h2 className="cardContent">
						Database
					</h2>
					<h3 className="innerCardContent">
						{"> "} MySQL, PostgreSQL, AWS DynamoDB, AWS RDS
					</h3>
					<Image src={MySQLIcon} alt="MySQL" height={50} width={50} />
					<Image
						src={PostgreSQLIcon}
						alt="PostgreSQL"
						height={50}
						width={50}
					/>
					<Image
						src={AWSDynamoDBIcon}
						alt="AWS DynamoDB"
						height={50}
						width={50}
					/>
					<Image
						src={AWSRDSIcon}
						alt="AWS Relational Database"
						height={50}
						width={50}
					/>
				</Card>
				{/* <Card className="innerCard" style={{ backgroundColor: "#93BFCF"}}> */}
				<Card>
					<h2 className="cardContent">
						Platforms and Services
					</h2>
					<h3 className="innerCardContent">
						{"> "} AWS, Docker, Jenkins, Firebase, Postman, Slack, GlassFish
					</h3>
					<Image
						src={AWSIcon}
						alt="Amazon Web Services"
						height={50}
						width={50}
					/>
					<Image src={DockerIcon} alt="Docker" height={50} width={50} />
					<Image src={JenkinsIcon} alt="Jenkins" height={50} width={50} />
					<Image src={FirebaseIcon} alt="Firebase" height={50} width={50} />
					<Image src={PostmanIcon} alt="Postman" height={50} width={50} />
					<Image src={SlackIcon} alt="Slack" height={50} width={50} />
					<Image src={GlassfishIcon} alt="Docker" height={50} width={50} />
				</Card>
				{/* <Card className="innerCard" style={{ backgroundColor: "#93BFCF"}}> */}
				<Card>
					<h2 className="cardContent">
						Tools
					</h2>
					<h3 className="innerCardContent">
						{"> "} Git, GitHub, Figma, Linux, Ubuntu, Google Analytics
					</h3>
					<Image src={GitIcon} alt="Git" height={50} width={50} />
					<Image src={GitHubIcon} alt="Docker" height={50} width={50} />
					<Image src={FigmaIcon} alt="Figma" height={50} width={50} />
					<Image src={LinuxIcon} alt="Linux" height={50} width={50} />
					<Image src={UbuntuIcon} alt="Ubuntu" height={50} width={50} />
					<Image
						src={GoogleAnalytics4Icon}
						alt="Google Analytics"
						height={50}
						width={50}
					/>
				</Card>
				{/* <Card className="innerCard" style={{ backgroundColor: "#93BFCF"}}> */}
				<Card>
					<h2 className="cardContent">
						Suite of AWS platforms and Services
					</h2>
					<Image
						src={AWSWebServicesIcon}
						alt="Amazon Web Services"
						height={50}
						width={50}
					/>
					<Image
						src={AWSS3Icon}
						alt="AWS Simple Storage Service"
						height={50}
						width={50}
					/>
					<Image
						src={AWSLoadBalancerIcon}
						alt="AWS Loab Balancer"
						height={50}
						width={50}
					/>
					<Image
						src={AWSLambdaIcon}
						alt="AWS Lambda"
						height={50}
						width={50}
					/>
					<Image
						src={AWSEC2Icon}
						alt="AWS Elastic Compute Cloud"
						height={50}
						width={50}
					/>
					<Image
						src={AWSECRIcon}
						alt="AWS Elastice Container Registry"
						height={50}
						width={50}
					/>
					<Image
						src={AWSECSIcon}
						alt="AWS Elastic Container Service"
						height={50}
						width={50}
					/>
					<Image
						src={AWSECSFargateIcon}
						alt="AWS ECS Fargate"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCodeArtifactIcon}
						alt="AWS CodeArtifact"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCodeBuildIcon}
						alt="AWS CodeBuild"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCodeDeployIcon}
						alt="AWS CodeDeploy"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCodePipelineIcon}
						alt="AWS CodeDeploy"
						height={50}
						width={50}
					/>
					<Image
						src={AWSDynamoDBIcon}
						alt="AWS DynamoDB"
						height={50}
						width={50}
					/>
					<Image
						src={AWSRDSIcon}
						alt="AWS Relational Database"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCloudWatchIcon}
						alt="AWS CloudWatch"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCFNIcon}
						alt="AWS CloudFormation"
						height={50}
						width={50}
					/>
					<Image
						src={AWSCloudTrailIcon}
						alt="AWS CloudTrail"
						height={50}
						width={50}
					/>
					<Image
						src={AWSSNSIcon}
						alt="AWS Simple Notification Service"
						height={50}
						width={50}
					/>
					<Image
						src={AWSIAMIcon}
						alt="AWS Identity and Access Management"
						height={50}
						width={50}
					/>
					<Image
						src={AWSACMIcon}
						alt="Amazon Certificate Manager"
						height={50}
						width={50}
					/>
					<Image
						src={AWSKMSIcon}
						alt="AWS Key Management Service"
						height={50}
						width={50}
					/>
					<Image
						src={AWSSecretsManagerIcon}
						alt="AWS Secrets Manager"
						height={50}
						width={50}
					/>
				</Card>
		</Layout>
	);
};

export default Skills;
