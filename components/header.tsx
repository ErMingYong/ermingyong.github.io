import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Link from "next/link";

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
					flexGrow: 1,
					display: { xs: "none", sm: "block" },
					fontFamily: "monospace",
					fontWeight: "bold",
					fontSize: "1.5rem",
					marginLeft: "4rem",
				}}
			>
				MING YONG
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				component="nav"
				sx={{
					background: "#395d74",
					boxShadow: "none",
					borderBottom: "1px solid #eaeaea",
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
						<Link href="/about">MING YONG</Link>
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
								className="navbar-items link"
							>
								<Link className="navbar-item" href={"/about/" + String(item)}>
									{item === "me" ? "About" : item}
								</Link>
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
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
