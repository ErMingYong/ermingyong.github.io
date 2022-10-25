import Head from "next/head";
import styles from "../styles/alternative_home.module.css";
import Image from "next/image";

export const siteTitle = "Ming Yong";
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
				<link rel="icon" href="/../public/my-icon.png" />
			</Head>
			<div className={styles.container}>
				<div className={styles.card}>
					{/* <Image
						priority
						src="/../public/my-icon.png"
						className={styles.borderCircle}
						height={144}
						width={144}
						alt="Profile Picture"
					/> */}
					<Image
						priority
						src="/../public/favicon.ico"
						className={styles.borderCircle}
						height={144}
						width={144}
						alt="Profile Picture"
					/>
					<br />
				</div>
				<div className={styles.card}>
					<h1 className={styles.name}>{name}</h1>
					<section className={styles.description}>
						<p className={styles.introduction}>{selfIntroduction}</p>
						<p>{selfDescription}</p>
						<p>
							Learn more about{" "}
							<a className={styles.link} href="/about">
								Me
							</a>
							!
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
