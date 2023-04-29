import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "../styles/footer.module.css";

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
					background: "#6096B4",
					boxShadow: "none",
					borderTop: "1.5px solid #eaeaea",
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
						{/* <a href="/about" className={styles.navbarItem}>MING YONG</a> */}
					</Typography>
					<Box
						sx={{ display: { xs: "none", sm: "block" }, marginRight: "4rem" }}
					>
						<a href="https://github.com/NIL-99?tab=repositories" className={styles.navbarItem}>
							GitHub
						</a>
						<a href="https://www.linkedin.com/in/er-ming-yong/" className={styles.navbarItem}>
							LinkedIn
						</a>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
