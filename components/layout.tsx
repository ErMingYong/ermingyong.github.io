import Head from "next/head";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

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
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main>
				<Header />
				<br />
				<Box component="main" sx={{ p: 3 }} style={{ backgroundColor: "#93BFCF" }}>
					{/* <Card className="card" style={{ backgroundColor: "#93BFCF" }} > */}
					<Card>
						{children}
					</Card>
				</Box>
				<Footer />
			</main>
		</div>
	);
}
