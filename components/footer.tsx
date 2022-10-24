import type { NextPage } from "next";

const Footer: NextPage = () => {
	return (
		<footer className="footer">
			<nav className="navbar flex">
				<nav className="navbar-items-left flex">
					<a className="brand flex">Ming Yong</a>
				</nav>
				<nav className="navbar-items-right flex">
					<a className="navbar-item">GitHub</a>
					<a className="navbar-item">LinkedIn</a>
					<a className="navbar-item">Email</a>
				</nav>
			</nav>
		</footer>
	);
};

export default Footer;
