import Header from "./components/UI/Header";
import TheatresList from "./components/Layouts/TheatresList.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const mail = "ranjitulips@gmail.com";

const ListOfTheatres = {
	theatre: [
		{
			show2_time: "12:30 PM",
			website: "http://gokulamcinemas.com/",
			address:
				"795C, Old Sundar Theatre Complex,Trunk Road, Poonamallee, Rukmani Nagar, Poonamallee,Chennai, Tamil Nadu 600056",
			show1_movie: "Love Today",
			show4_time: "6:30 PM",
			thumbnail_url:
				"https://lh3.googleusercontent.com/p/AF1QipMrgKxJIQkJKXyvOoBjqXuPpVYqupxwMMOjuQtU=s1360-w1360-h1020",
			customer_rating: "4.8",
			show2_movie: "777 Charlie",
			theatre_name: "Gokulam Cinemas",
			show4_movie: "777 Charlie",
			show1_time: "9:30 AM",
			show3_time: "3:00 PM",
			show3_movie: "Love Today",
		},
		{
			show2_time: "12:30 PM",
			website: "https://www.jazzcinemas.com/",
			address:
				"Phoenix Market City, No. 142, 2nd Floor, Velachery Rd, Indira Gandhi Nagar, Velachery, Chennai, Tamil Nadu 600042",
			show1_movie: "Ponniyin Selvan: Part I",
			show4_time: "6:30 PM",
			thumbnail_url:
				"https://www.google.com/maps/uv?pb=!1s0x3a5267623f4a1bdd%3A0xc691108f18ef0793!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPlP4t0ZR8ToQnszeBHtqCpoByLIGOL07UOD-IT%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPlP4t0ZR8ToQnszeBHtqCpoByLIGOL07UOD-IT&hl=en&sa=X&ved=2ahUKEwjRmJvBzYj8AhWcZWwGHYcABQMQ7ZgBKAB6BAgeEAI#",
			customer_rating: "4.3",
			show2_movie: "Sita Ramam",
			theatre_name: "Jazz Cinemas LUXE",
			show4_movie: "Sita Ramam",
			show1_time: "9:30 AM",
			show3_time: "3:00 PM",
			show3_movie: "Ponniyin Selvan: Part I",
		},
		{
			show2_time: "12:30 PM",
			website: "https://www.spicinemas.in/",
			address:
				"8, Thiruvika Rd, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014",
			show1_movie: "Major",
			show4_time: "6:30 PM",
			thumbnail_url:
				"https://www.google.com/maps/uv?pb=!1s0x3a52679f1ec75045%3A0xf51a070494ff05d2!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP_ebPKZhES7GgOIWaX6ER2OBtk--uOJKrDW28%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipP_ebPKZhES7GgOIWaX6ER2OBtk--uOJKrDW28&hl=en&sa=X&ved=2ahUKEwjzute0zoj8AhV4TGwGHbJsAeUQ7ZgBKAB6BAgaEAI#",
			customer_rating: "4.4",
			show2_movie: "Rocketry: The Nambi Effect",
			theatre_name: "Sathyam Cinemas",
			show4_movie: "Rocketry: The Nambi Effect",
			show1_time: "9:30 AM",
			show3_time: "3:00 PM",
			show3_movie: "Major",
		},
	],
};

function App() {
	return (
		<div className="App">
			<Header mail={mail} />
			<Box sx={{ width: "100%", margin: "10px" }}>
				<Grid
					container
					spacing={{ xs: 1, md: 1 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{ListOfTheatres.theatre.map((theatre, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<TheatresList theatre={theatre} />
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}

export default App;
