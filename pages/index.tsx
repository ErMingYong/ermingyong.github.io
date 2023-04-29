import Head from "next/head";
import styles from "../styles/index.module.css";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
import Link from "next/link";
import Button from "@mui/material/Button";

export const siteTitle = "Welcome to MY Portfolio!";
export const name = "Er Ming Yong";
export const selfIntroduction = "Hi, my name is Ming Yong!";
export const selfDescription =
	"An Enthusiastic, Hard-working, Curious, and Quick Learner with a passion to develop and implement solutions to solve real world problems.";

export default function Home() {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<meta name="description" content="Ming Yong Portfolio" />
				<link rel="icon" href="/my-icon.ico" />
			</Head>
			<div className={styles.container}>
				<div className={styles.profilePic}>
					<Image
						priority
						src={profilePic}
						className={styles.borderCircle}
						height={250}
						width={250}
						alt="Profile Picture"
						placeholder="blur"
					/>
				</div>
				<br />
				<div className={styles.column}>
					<div className={styles.introduction}>
						<a href="/about" className={styles.link}>I'm Ming Yong</a>
					</div>
				</div>
				<br />
				<div className={styles.column}>
					{/* <Button variant="contained" href="/about" className={styles.button}>About Me</Button>&nbsp;
					<Button variant="contained" href="https://www.linkedin.com/in/er-ming-yong/">LinkedIn</Button>&nbsp;
					<Button variant="contained" href="https://github.com/ErMingYong?tab=repositories">GitHub</Button> */}
					<button type="button" className={styles.button}>
						<a href="/about" className={styles.link}>About Me</a>
					</button>
					<button type="button" className={styles.button}>
						<a href="https://github.com/ErMingYong?tab=repositories" className={styles.link}>GitHub</a>
					</button>
					<button type="button" className={styles.button}>
						<a href="https://www.linkedin.com/in/er-ming-yong/" className={styles.link}>LinkedIn</a>
					</button>
				</div>
			</div>
		</>
	);
}
