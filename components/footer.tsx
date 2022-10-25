import type { NextPage } from "next";

const Footer: NextPage = () => {
	return (
		<footer className="footer">
			<nav className="navbar flex">
				<nav className="navbar-items-left flex">
					<a className="brand flex" href="/about">
						Ming Yong
					</a>
				</nav>
				<nav className="navbar-items-right flex">
					<a
						className="navbar-item"
						href="https://github.com/NIL-99?tab=repositories"
					>
						GitHub
					</a>
					<a
						className="navbar-item"
						href="https://www.linkedin.com/in/er-ming-yong/"
					>
						LinkedIn
					</a>
				</nav>
			</nav>
		</footer>
	);
};

export default Footer;
