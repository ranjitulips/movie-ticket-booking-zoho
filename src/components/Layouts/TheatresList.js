import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import PublicIcon from "@mui/icons-material/Public";
import PlaceIcon from "@mui/icons-material/Place";
import MovieList from "./MovieList";
import FALLBACK_IMAGE from "../../assets/images/fallbackimage.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import CardActionArea from "@mui/material/CardActionArea";

import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} color="primary" />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function TheatresList(props) {
	const { theatre_name, thumbnail_url, website, address, customer_rating } =
		props.theatre;

	const { mail } = props;

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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

	const onMediaFallback = (event) => (event.target.src = FALLBACK_IMAGE);

	return (
		<Card sx={{ maxWidth: 345 }} raised={true}>
			<CardActionArea onClick={handleExpandClick}>
				<CardMedia
					component="img"
					alt={theatre_name}
					height="140"
					image={thumbnail_url}
					onError={onMediaFallback}
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{theatre_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{`${customer_rating} rating`}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions disableSpacing>
				<IconButton aria-label="website" href={website} target={"_blank"}>
					<PublicIcon href={website} />
				</IconButton>
				<IconButton
					aria-label="address"
					href={`https://www.google.com/maps/dir/?api=1&destination=${address}&dir_action=navigate`}
					target={"_blank"}
				>
					<PlaceIcon />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<MovieList
						movieDetails={movieDetails}
						mail={mail}
						theatre_name={theatre_name}
					/>
				</CardContent>
			</Collapse>
		</Card>
	);
}
