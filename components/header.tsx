import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import styles from "../styles/header.module.css";

import LinkedInIcon from "../images/linkedIn.svg";
import GitHubIcon from "../images/github.svg";

const drawerWidth = 240;
const navItems = ["me", "skills", "experiences", "projects", "contact"];

export default function Header() {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography
				variant="h6"
				sx={{
					my: 2,
					fontFamily: "monospace",
					fontWeight: "bold",
					fontSize: "1.5rem",
					color: "#000",
				}}
			>
				MING YONG
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							sx={{
								textAlign: "center",
								fontFamily: "monospace",
								fontSize: "1.2rem",
								color: "#000",
							}}
						>
							<a
								className={styles.drawerItem}
								href={"/about/" + String(item)}
							>
								{item === "me" ? "About" : item}
							</a>
						</ListItemButton>
					</ListItem>
				))}
				<div className={styles.column}>
					<Button href="/about/contact">
						<Image src={GitHubIcon} alt="Github" height={50} width={50} />
					</Button>
					<Button>
						<Image src={LinkedInIcon} alt="Linkedin" height={50} width={50} />
					</Button>
				</div>
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				component="nav"
				sx={{
					background: "#6096B4",
					boxShadow: "none",
					borderBottom: "1.5px solid #eaeaea",
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
						&nbsp;&nbsp;
						<a href="/about" className={styles.drawerTitle}>Ming Yong</a>
					</IconButton>

					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
							fontFamily: "monospace",
							fontWeight: "bold",
							fontSize: "1.5rem",
							marginLeft: "4rem",
						}}
					>
						<a href="/about" className={styles.navbarItem}>MING YONG</a>
					</Typography>
					<Box
						sx={{ display: { xs: "none", sm: "block" }, marginRight: "4rem" }}
					>
						{navItems.map((item) => (
							<Button
								key={item}
								sx={{
									color: "#fff",
									fontFamily: "monospace",
									fontSize: "1.3rem",
								}}
								className="navbar-items"
							>
								<a
									className={styles.navbarItem}
									href={"/about/" + String(item)}
								>
									{item === "me" ? "About" : item}
								</a>
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						color: "#000",
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
