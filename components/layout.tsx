import Head from "next/head";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Toolbar from "@mui/material/Toolbar";

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
			<Header />
			<main>
				<Box component="main" sx={{ p: 3 }}>
					<Toolbar />
					<Card
						sx={{
							background: "#395d74",
							border: "none",
							boxShadow: "none",
							margin: "1rem 4rem",
						}}
					>
						<h1>{children}</h1>
					</Card>
				</Box>
			</main>
			<Footer />
		</div>
	);
}
