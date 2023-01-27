import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import PublicIcon from "@mui/icons-material/Public";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "@mui/material/Link";
import MovieList from "./MovieList";

export default function TheatresList(props) {
	const { theatre_name, thumbnail_url, website, address, customer_rating } =
		props.theatre;

	const movieDetails = {
		show1_movie: props.theatre.show1_movie,
		show1_time: props.theatre.show1_time,
		show2_movie: props.theatre.show2_movie,
		show2_time: props.theatre.show2_time,
		show3_time: props.theatre.show3_time,
		show3_movie: props.theatre.show3_movie,
		show4_time: props.theatre.show4_time,
		show4_movie: props.theatre.show4_movie,
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={theatre_name}
				height="140"
				image={thumbnail_url}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{theatre_name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`${customer_rating} rating`}
				</Typography>
				<MovieList movieDetails={movieDetails} />
			</CardContent>
			<CardActions>
				<IconButton aria-label="website">
					<Link href={website} underline="none">
						<PublicIcon />
					</Link>
				</IconButton>
				<IconButton aria-label="address">
					<Link
						href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}
						underline="none"
					>
						<PlaceIcon />
					</Link>
				</IconButton>
			</CardActions>
		</Card>
	);
}
