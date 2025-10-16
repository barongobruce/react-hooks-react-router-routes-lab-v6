import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import fallbackData from "../../db.json";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies)
      .catch(() => setMovies(fallbackData.movies || []));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
        <p>Welcome to the Movie Database. Use the navigation links to explore actors and directors.</p>
      </main>
    </>
  );
}

export default Home;
