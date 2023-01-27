import Header from "./components/UI/Header";
import MovieList from "./components/Layouts/MovieList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const mail = "ranjitulips@gmail.com";

const Movies = {
	movies: [
		{
			release_date: "November 4, 2022",
			running_time: "2 hours 34 minutes",
			language: "Tamil",
			movie_name: "Love Today",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
			imdb_rating: "8.4",
			tags: "Comedy,Drama,Romance",
		},
		{
			release_date: "June 10, 2022",
			running_time: "2 hours 44 minutes",
			language: "Kannada",
			movie_name: "777 Charlie",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/en/1/19/777_Charlie_official_poster.jpg",
			imdb_rating: "8.9",
			tags: "Adventure,Comedy,Drama",
		},
		{
			release_date: "November 4, 2022",
			running_time: "2 hours 34 minutes",
			language: "Tamil",
			movie_name: "Love Today",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
			imdb_rating: "8.4",
			tags: "Comedy,Drama,Romance",
		},
		{
			release_date: "June 10, 2022",
			running_time: "2 hours 44 minutes",
			language: "Kannada",
			movie_name: "777 Charlie",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/en/1/19/777_Charlie_official_poster.jpg",
			imdb_rating: "8.9",
			tags: "Adventure,Comedy,Drama",
		},
		{
			release_date: "November 4, 2022",
			running_time: "2 hours 34 minutes",
			language: "Tamil",
			movie_name: "Love Today",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
			imdb_rating: "8.4",
			tags: "Comedy,Drama,Romance",
		},
		{
			release_date: "June 10, 2022",
			running_time: "2 hours 44 minutes",
			language: "Kannada",
			movie_name: "777 Charlie",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/en/1/19/777_Charlie_official_poster.jpg",
			imdb_rating: "8.9",
			tags: "Adventure,Comedy,Drama",
		},
	],
};

function App() {
	return (
		<div className="App">
			<Header mail={mail} />
			<Box sx={{ width: "100%" }}>
				<Grid
					container
					spacing={{ xs: 1, md: 1 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{Movies.movies.map((movie, index) => (
						<Grid item xs={4} sm={4} md={4} key={index}>
							<MovieList movie={movie} />
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}

export default App;
