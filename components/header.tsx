import type { NextPage } from "next";

const Header: NextPage = () => {
	return (
		<header className="header">
			<div className="empty-space"></div>
			<nav className="navbar flex">
				<nav className="navbar-items-left flex">
					<a className="brand flex">Ming Yong</a>
				</nav>
				<nav className="navbar-items-right flex">
					<a className="navbar-item">About</a>
					<a className="navbar-item">Skills</a>
					<a className="navbar-item">Experiences</a>
					<a className="navbar-item">Projects</a>
					<a className="navbar-item">Contact</a>
				</nav>
			</nav>
		</header>
	);
};

export default Header;
