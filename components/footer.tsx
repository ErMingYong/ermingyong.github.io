import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "next/link";

export default function BottomAppBar() {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="fixed"
				color="primary"
				sx={{
					top: "auto",
					bottom: 0,
					background: "#395d74",
					boxShadow: "none",
					borderTop: "1px solid #eaeaea",
				}}
			>
				<Toolbar>
					<Typography
						variant="h6"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
							fontFamily: "monospace",
							fontWeight: "bold",
							fontSize: "1.5rem",
							marginLeft: "4rem",
						}}
					>
						<Link href="/about">MING YONG</Link>
					</Typography>
					<Box
						sx={{ display: { xs: "none", sm: "block" }, marginRight: "4rem" }}
					>
						<Button
							key="GitHub"
							sx={{
								color: "#fff",
								fontFamily: "monospace",
								fontSize: "1.3rem",
							}}
							className="navbar-items link"
						>
							<Link href="https://github.com/NIL-99?tab=repositories">
								GitHub
							</Link>
						</Button>
						<Button
							key="LinkedIn"
							sx={{
								color: "#fff",
								fontFamily: "monospace",
								fontSize: "1.3rem",
							}}
							className="navbar-items link"
						>
							<Link href="https://www.linkedin.com/in/er-ming-yong/">
								LinkedIn
							</Link>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
