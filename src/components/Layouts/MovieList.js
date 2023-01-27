import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SeatsBooking from "./SeatsBooking";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />;
});

export default function FolderList(props) {
	const { mail, theatre_name } = props;
	const [open, setOpen] = React.useState(false);
	const [msgOpen, setMsgOpen] = React.useState(false);
	const [message, setMessage] = React.useState("");
	const [selectedMovieName, setSelectedMovieName] = React.useState(null);
	const [selectedMovieTime, setSelectedMovieTime] = React.useState(null);
	const [selectedSeats, setSelectedSeats] = React.useState([]);

	const getFormattedDate = (date) => {
		return new Intl.DateTimeFormat("en-GB").format(date);
	};

	const bookTicket = async (selectedSeats) => {
		const url = "https://zincubate.in/api/MovieTicketChecker?action=bookSeats";
		await axios
			.post(url, {
				show_time: selectedMovieTime,
				movie_name: selectedMovieName,
				theatre_name: theatre_name,
				booked_seats: selectedSeats,
				date: getFormattedDate(new Date()),
				user_mail_id: mail,
			})
			.then(
				(response) => {
					console.log(response.data);
					setMessage(response.data.message);
					setMsgOpen(true);
				},
				(error) => {
					console.log(error);
				}
			);
	};

	const handleClickOpen = (movie) => {
		setSelectedMovieName(movie.movieName);
		setSelectedMovieTime(movie.movieTime);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleMsgClose = () => {
		setMsgOpen(false);
	};

	const handleConfirm = (selectedSeats) => {
		bookTicket(selectedSeats);
		setOpen(false);
	};

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
							handleClickOpen(props);
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

	return (
		<>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				<Movie movieName={show1_movie} movieTime={show1_time} />
				<Divider />
				<Movie movieName={show2_movie} movieTime={show2_time} />
				<Divider />
				<Movie movieName={show3_movie} movieTime={show3_time} />
				<Divider />
				<Movie movieName={show4_movie} movieTime={show4_time} />
			</List>
			<SeatsBooking
				selectedMovieName={selectedMovieName}
				selectedMovieTime={selectedMovieTime}
				open={open}
				handleClose={handleClose}
				handleConfirm={handleConfirm}
			/>
			<Snackbar
				open={msgOpen}
				autoHideDuration={6000}
				onClose={handleMsgClose}
				anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
			>
				<Alert
					onClose={handleMsgClose}
					severity="success"
					sx={{ width: "100%" }}
				>
					{message}
				</Alert>
			</Snackbar>
		</>
	);
}
