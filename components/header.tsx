import type { NextPage } from "next";

const Header: NextPage = () => {
	return (
		<header className="header">
			<div className="empty-space"></div>
			<nav className="navbar flex">
				<nav className="navbar-items-left flex">
					<a className="brand flex" href="/about">
						Ming Yong
					</a>
				</nav>
				<nav className="navbar-items-right flex">
					<a className="navbar-item" href="/about/me">
						About
					</a>
					<a className="navbar-item" href="/about/skills">
						Skills
					</a>
					<a className="navbar-item" href="/about/experiences">
						Experiences
					</a>
					<a className="navbar-item" href="/about/projects">
						Projects
					</a>
					<a className="navbar-item" href="/about/contact">
						Contact
					</a>
				</nav>
			</nav>
		</header>
	);
};

export default Header;
