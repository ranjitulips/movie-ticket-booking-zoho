import Header from "./components/UI/Header";
import TheatresList from "./components/Layouts/TheatresList.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import axios from "axios";

const mail = "ranjitulips@gmail.com";
const url = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails";

function App() {
	const getData = async () => {
		await axios
			.post(url, {
				user_mail_id: mail,
			})
			.then(
				(response) => {
					console.log(response.data);
					setListOfTheatres(response.data);
					setLoading(false);
				},
				(error) => {
					console.log(error);
					setLoading(false);
				}
			);
	};

	const [listOfTheatres, setListOfTheatres] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="App">
			<Header mail={mail} />
			<Box sx={{ width: "100%", margin: "10px" }}>
				<Grid
					container
					spacing={{ xs: 1, md: 1 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{loading
						? "Loading..."
						: listOfTheatres.theatre.map((theatre, index) => (
								<Grid item xs={4} sm={4} md={4} key={index}>
									<TheatresList theatre={theatre} mail={mail} />
								</Grid>
						  ))}
				</Grid>
			</Box>
		</div>
	);
}

export default App;
