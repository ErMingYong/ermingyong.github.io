import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

export const siteTitle = "Ming Yong's Information";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="layout">
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/my-icon.ico" type="image/x-icon" />
				<meta name="description" content="Ming Yong's Description" />
				<meta name="og:title" content={siteTitle} />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
