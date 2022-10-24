import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

export const siteTitle = "MingYong";

export default function Layout(children: React.ReactNode) {
	return (
		<div>
			<Head>
				<link ref="icon" href="/../public/my-icon.png" />
				<meta name="description" content="Ming Yong portfolio" />
				<meta name="og:title" content={siteTitle} />
			</Head>
			<Header />
			<Footer />
		</div>
	);
}
