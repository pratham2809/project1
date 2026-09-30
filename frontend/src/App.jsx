import { useState } from "react";
import "./App.css";

function App() {
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  const movieData = {
    Action: [
      { title: "The Dark Knight", rating: 9.0 },
      { title: "Gladiator", rating: 8.5 },
      { title: "Avengers: Endgame", rating: 8.4 }
    ],
    Comedy: [
      { title: "3 Idiots", rating: 8.4 },
      { title: "The Hangover", rating: 7.7 },
      { title: "Superbad", rating: 7.6 }
    ],
    "Sci-Fi": [
      { title: "Inception", rating: 8.8 },
      { title: "Interstellar", rating: 8.7 },
      { title: "The Matrix", rating: 8.7 }
    ],
    Drama: [
      { title: "The Shawshank Redemption", rating: 9.3 },
      { title: "Forrest Gump", rating: 8.8 },
      { title: "The Green Mile", rating: 8.6 }
    ]
  };

  const getRecommendations = (selectedGenre) => {
    setGenre(selectedGenre);
    setMovies(movieData[selectedGenre]);
  };

  return (
    <div className="app">
      <h1>Movie Recommendation Engine</h1>

      <p className="subtitle">
        Personalized movie recommendations based on your favorite genre
      </p>

      <div className="buttons">
        <button onClick={() => getRecommendations("Action")}>
          Action
        </button>

        <button onClick={() => getRecommendations("Comedy")}>
          Comedy
        </button>

        <button onClick={() => getRecommendations("Sci-Fi")}>
          Sci-Fi
        </button>

        <button onClick={() => getRecommendations("Drama")}>
          Drama
        </button>
      </div>

      {genre && <h2>Recommended {genre} Movies</h2>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.title}>
            <h3>{movie.title}</h3>
            <p>Genre: {genre}</p>
            <p>Rating: ⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
