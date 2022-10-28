import Head from "next/head";
import styles from "../styles/index.module.css";
import Image from "next/image";
import profilePic from "../public/profile.jpg";

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
				<div className={styles.card}>
					<Image
						priority
						src={profilePic}
						className={styles.borderCircle}
						height={200}
						width={200}
						alt="Profile Picture"
						placeholder="blur"
					/>
					<br />
				</div>
				<div className={styles.card}>
					<h1 className={styles.name}>
						<a className={styles.link} href="/about">
							{name}
						</a>
					</h1>
					<section className={styles.description}>
						<p className={styles.introduction}>{selfIntroduction}</p>
						<p>{selfDescription}</p>
						<p>
							Learn more about Me! {"->"} <a href="/about">&#128102;</a>
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
