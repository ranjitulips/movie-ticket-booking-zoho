import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function FolderList(props) {
	const {
		show1_movie,
		show1_time,
		show2_movie,
		show2_time,
		show3_time,
		show3_movie,
		show4_time,
		show4_movie,
	} = props.movieDetails;

	const Movie = (props) => {
		return (
			<ListItem
				secondaryAction={
					<Button
						variant="outlined"
						size="small"
						onClick={(e) => {
							handleClick(e);
						}}
					>
						Book Now
					</Button>
				}
			>
				<ListItemText primary={props.movieName} secondary={props.movieTime} />
			</ListItem>
		);
	};

	const handleClick = (e) => {
		//click event
		console.log("handle Click");
	};

	return (
		<List sx={{ width: "100%", bgcolor: "background.paper" }}>
			<Movie movieName={show1_movie} movieTime={show1_time} />
			<Divider />
			<Movie movieName={show2_movie} movieTime={show2_time} />
			<Divider />
			<Movie movieName={show3_movie} movieTime={show3_time} />
			<Divider />
			<Movie movieName={show4_movie} movieTime={show4_time} />
		</List>
	);
}
