import type { NextPage } from "next";

const Header: NextPage = () => {
	return (
		<header>
			<div className="empty-space"></div>
			<div className="navbar flex">
				<div className="brand flex">Name PlaceHolder</div>
				<div className="navbar-items flex">
					<div className="navbar-item">Item 1</div>
					<div className="navbar-item">Item 2</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
