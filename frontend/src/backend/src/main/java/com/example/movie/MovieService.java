package com.example.movie;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MovieService {

    private final List<Movie> movies = new ArrayList<>();

    public MovieService() {

        movies.add(new Movie("The Dark Knight", "Action", 9.0));
        movies.add(new Movie("Gladiator", "Action", 8.5));
        movies.add(new Movie("Avengers: Endgame", "Action", 8.4));

        movies.add(new Movie("3 Idiots", "Comedy", 8.4));
        movies.add(new Movie("The Hangover", "Comedy", 7.7));
        movies.add(new Movie("Superbad", "Comedy", 7.6));

        movies.add(new Movie("Inception", "Sci-Fi", 8.8));
        movies.add(new Movie("Interstellar", "Sci-Fi", 8.7));
        movies.add(new Movie("The Matrix", "Sci-Fi", 8.7));

        movies.add(new Movie("The Shawshank Redemption", "Drama", 9.3));
        movies.add(new Movie("Forrest Gump", "Drama", 8.8));
        movies.add(new Movie("The Green Mile", "Drama", 8.6));
    }

    public List<Movie> getAllMovies() {
        return movies;
    }

    public List<Movie> getRecommendations(String genre) {

        List<Movie> recommendations = new ArrayList<>();

        for (Movie movie : movies) {

            if (movie.getGenre().equalsIgnoreCase(genre)) {
                recommendations.add(movie);
            }
        }

        recommendations.sort(
            (movie1, movie2) ->
                Double.compare(
                    movie2.getRating(),
                    movie1.getRating()
                )
        );

        return recommendations;
    }
}
