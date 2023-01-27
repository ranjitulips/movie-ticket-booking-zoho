import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function PaginationRounded(props) {
	const { open } = props;

	const handleClose = () => {
		setSelectedSeats([]);
		props.handleClose();
	};
	const handleConfirm = () => {
		setSelectedSeats([]);
		props.handleConfirm();
	};

	const handleOnClick = (page) => {
		let seats = selectedSeats;
		if (seats.includes(page)) {
			let filteredArray = seats.filter((num) => num !== page);
			setSelectedSeats(filteredArray);
		} else {
			seats.push(page);
			setSelectedSeats(seats);
		}
	};

	const [selectedSeats, setSelectedSeats] = useState([]);

	useEffect(() => {}, [selectedSeats]);

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Select your seats</DialogTitle>
			<DialogContent>
				<Stack spacing={2}>
					<Pagination
						onChange={(event, page) => {
							handleOnClick(page);
						}}
						count={100}
						defaultPage={6}
						siblingCount={0}
						variant="outlined"
						shape={"rounded"}
						boundaryCount={100}
						hideNextButton={true}
						hidePrevButton={true}
						renderItem={(item) => (
							<PaginationItem
								{...item}
								color={"primary"}
								selected={selectedSeats.includes(item.page)}
							/>
						)}
					/>
					;
				</Stack>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleConfirm} variant={"contained"}>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
}
