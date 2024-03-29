import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Layout from "../../components/layout";

import Html5Icon from "../../images/html5.svg";
import CssIcon from "../../images/css.svg";
import JSIcon from "../../images/js.svg";
import PythonIcon from "../../images/python.svg";
import FlaskIcon from "../../images/flask.svg";
import SlackIcon from "../../images/slack.svg";
import PostgreSQLIcon from "../../images/postgresql.svg";
import DockerIcon from "../../images/docker.svg";
import JenkinsIcon from "../../images/jenkins.svg";
import PyTestIcon from "../../images/pytest.svg";
import AWSIcon from "../../images/aws.svg";
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

// copy and refactor for more details or experiences
const experience1Position = "Intern, Software & DevOps Engineer";
const experience1CompanyMission =
	"Empowering innovators with design and make technology so they can achieve the new possible";
const experience1Achievement1 =
	"Collaborated with 2 software developers to Develop, Implement, and Maintain core functionalities and Data Engineering for Localization Health Dashboard, providing Outage and Recovery notifications for users";
const experience1Achievement2 =
	"Implemented CI/CD pipeline infrastructure for Localization Health Dashboard using Docker, Jenkins, and AWS CodeBuild";
const experience1Achievement3 =
	"Lead the containerization of Localization applications using Dockers, improving resource utilization, performance, and cost savings";
const experience1Achievement4 =
	"Researched, Proposed, and Delivered an Enhanced CI/CD pipeline, further simplifying and streamlining CI/CD processes, extended into 2 other Localization applications";

// below method renders the output of the page
// copy and refactor <div className="card"></div> component to place more details or experiences
const Experiences: NextPage = () => {
	return (
		<Layout>
				<h1 className="cardTitle">
					Professional Experience 💻🖥️👨‍💻
				</h1>
				<br />
				<Card className="card" style={{ backgroundColor: "#93BFCF", border: "none", boxShadow: "none", paddingLeft: "0rem", paddingBottom: "3rem"}} >
					<h3 className="innerCardContent">
						May 2022 - Oct 2022
					</h3>
					<h2 className="cardContent">
						{experience1Position} @{" "}
						<Link className="link" href="https://www.autodesk.com.sg/">
							Autodesk Asia (Singapore)
						</Link>
					</h2>
					<br/>
					<h3 className="innerCardContent">
						{experience1CompanyMission}
					</h3>
					<br/>
					<h3 className="innerCardContent">
						{">"} {experience1Achievement1}
					</h3>
					<h3 className="innerCardContent">
						{">"} {experience1Achievement2}
					</h3>
					<h3 className="innerCardContent">
						{">"} {experience1Achievement3}
					</h3>
					<h3 className="innerCardContent">
						{">"} {experience1Achievement4}
					</h3>
					<br/>
					<h3 className="innerCardContent">
						Technology Stack:
					</h3>
					<h3 className="innerCardContent">
						- Frontend: HTML5, CSS, JS
					</h3>
					<h3 className="innerCardContent">
						- Backend: Python, Flask, Slack API
					</h3>
					<h3 className="innerCardContent">
						- Database: PostgreSQL, AWS RDS, AWS DynamoDB
					</h3>
					<h3 className="innerCardContent">
						- Build: Docker, Jenkins
					</h3>
					<h3 className="innerCardContent">
						- Test: PyTest
					</h3>
					<h3 className="innerCardContent">
						- Deployment: AWS EC2, AWS ECS Fargate
					</h3>
					<h3 className="innerCardContent">
						- Network and Security: AWS Load Balancer, AWS Security Group
					</h3>
					<h3 className="innerCardContent">
						- Infrastructure: AWS CloudFormation, AWS CodePipeline, AWS Simple
						Notification Service
					</h3>
					<h3 className="innerCardContent">
						Suite of Non-AWS Platforms and Services:{" "}
					</h3>
					<Image src={Html5Icon} alt="HTML5" height={40} width={40} />
					<Image src={CssIcon} alt="CSS" height={40} width={40} />
					<Image src={JSIcon} alt="JS" height={40} width={40} />
					<Image src={PythonIcon} alt="Python" height={40} width={40} />
					<Image src={FlaskIcon} alt="Flask" height={40} width={40} />
					<Image src={SlackIcon} alt="Slack API" height={40} width={40} />
					<Image src={PostgreSQLIcon} alt="PostgreSQL" height={40} width={40} />
					<Image src={DockerIcon} alt="Docker" height={40} width={40} />
					<Image src={JenkinsIcon} alt="Jenkins" height={40} width={40} />
					<Image src={PyTestIcon} alt="PyTest" height={40} width={40} />
					<h3 className="innerCardContent">
						Suite of AWS Platforms and Services:{" "}
					</h3>
					<Image
						src={AWSIcon}
						alt="Amazon Web Services"
						height="40"
						width="40"
					/>
					<Image
						src={AWSACMIcon}
						alt="Amazon Certificate Manager"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCFNIcon}
						alt="AWS CloudFormation"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCloudTrailIcon}
						alt="AWS CloudTrail"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCloudWatchIcon}
						alt="AWS CloudWatch"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCodeArtifactIcon}
						alt="AWS CodeArtifact"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCodeBuildIcon}
						alt="AWS CodeBuild"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCodeDeployIcon}
						alt="AWS CodeDeploy"
						height="40"
						width="40"
					/>
					<Image
						src={AWSCodePipelineIcon}
						alt="AWS CodeDeploy"
						height="40"
						width="40"
					/>
					<Image
						src={AWSDynamoDBIcon}
						alt="AWS DynamoDB"
						height="40"
						width="40"
					/>
					<Image
						src={AWSEC2Icon}
						alt="AWS Elastic Compute Cloud"
						height="40"
						width="40"
					/>
					<Image
						src={AWSECRIcon}
						alt="AWS Elastice Container Registry"
						height="40"
						width="40"
					/>
					<Image
						src={AWSECSIcon}
						alt="AWS Elastic Container Service"
						height="40"
						width="40"
					/>
					<Image
						src={AWSECSFargateIcon}
						alt="AWS ECS Fargate"
						height="40"
						width="40"
					/>
					<Image
						src={AWSIAMIcon}
						alt="AWS Identity and Access Management"
						height="40"
						width="40"
					/>
					<Image
						src={AWSKMSIcon}
						alt="AWS Key Management Service"
						height="40"
						width="40"
					/>
					<Image src={AWSLambdaIcon} alt="AWS Lambda" height={40} width={40} />
					<Image
						src={AWSLoadBalancerIcon}
						alt="AWS Loab Balancer"
						height="40"
						width="40"
					/>
					<Image
						src={AWSRDSIcon}
						alt="AWS Relational Database"
						height="40"
						width="40"
					/>
					<Image
						src={AWSSecretsManagerIcon}
						alt="AWS Secrets Manager"
						height="40"
						width="40"
					/>
					<Image
						src={AWSSNSIcon}
						alt="AWS Simple Notification Service"
						height="40"
						width="40"
					/>
					<Image
						src={AWSS3Icon}
						alt="AWS Simple Storage Service"
						height="40"
						width="40"
					/>
				</Card>
		</Layout>
	);
};

export default Experiences;
