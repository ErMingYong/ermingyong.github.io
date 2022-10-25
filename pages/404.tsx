import type { NextPage } from "next";

const Error: NextPage = () => {
	return (
		<div className="error">
			<div>
				<h1>Error Page 🚧🏗️👷‍♂️🚧</h1>
				<p>🛠️ You have found a page that is currently under construction! ⚒️</p>
				<p>
					Return to{" "}
					<a className="link" href="/">
						Home Page
					</a>
				</p>
			</div>
		</div>
	);
};

export default Error;
