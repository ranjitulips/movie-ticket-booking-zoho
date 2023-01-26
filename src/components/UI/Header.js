import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = (props) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Z- Movie Booking
				</Typography>
				<Typography variant="h6" component="div">
					{props.mail}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
