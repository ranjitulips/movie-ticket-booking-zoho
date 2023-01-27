import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={props.movie.thumbnail_url}
					alt={props.movie.movie_name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.movie.movie_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.movie.running_time}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button variant="contained" size="small" color="primary">
					Book Now
				</Button>
			</CardActions>
		</Card>
	);
}
